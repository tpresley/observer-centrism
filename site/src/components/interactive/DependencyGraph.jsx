// ---------------------------------------------------------------------------
// DependencyGraph -- Sygnal component
// Renders the derivation dependency DAG as an interactive SVG.
// Axioms sit at the top; predictions at the bottom.
// Hover highlights the ancestor chain; click navigates to the derivation page.
// ---------------------------------------------------------------------------

const BASE_URL = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')

const GROUP_COLORS = {
  foundation:   '#2563eb',
  dynamics:     '#7c3aed',
  geometry:     '#059669',
  quantum:      '#dc2626',
  particles:    '#ea580c',
  holography:   '#0891b2',
  gauge:        '#db2777',
  flavor:       '#9333ea',
  cosmology:    '#0d9488',
  'thermo-ext': '#78716c',
}

const GROUP_LABELS = {
  foundation:   'Foundation',
  dynamics:     'Dynamics',
  geometry:     'Geometry',
  quantum:      'Quantum',
  particles:    'Particles',
  holography:   'Holography',
  gauge:        'Gauge',
  flavor:       'Flavor',
  cosmology:    'Cosmology',
  'thermo-ext': 'Thermo Ext.',
}

const STATUS_OPACITY = {
  'non-viable': 0.3,
  stub:         0.4,
  draft:        0.6,
  provisional:  0.8,
  derived:      1.0,
}

// ---- pure helpers (no side-effects, used by both layout and render) --------

/** Build a lookup from node-id to its list of parent ids. */
function buildParentMap(edges) {
  const parents = {}
  for (const e of edges) {
    if (!parents[e.to]) parents[e.to] = []
    parents[e.to].push(e.from)
  }
  return parents
}

/** Build a lookup from node-id to its list of child ids. */
function buildChildMap(edges) {
  const children = {}
  for (const e of edges) {
    if (!children[e.from]) children[e.from] = []
    children[e.from].push(e.to)
  }
  return children
}

/** Count edge crossings between all adjacent layer pairs. */
function countCrossings(rows, depths, edges, maxDepth) {
  let total = 0
  for (let d = 0; d < maxDepth; d++) {
    const upper = rows[d]
    const lower = rows[d + 1]
    if (!upper.length || !lower.length) continue
    const upperPos = {}
    upper.forEach((id, i) => { upperPos[id] = i })
    const lowerPos = {}
    lower.forEach((id, i) => { lowerPos[id] = i })

    // Collect edges whose endpoints span exactly these two adjacent layers
    const layerEdges = []
    for (const e of edges) {
      if (depths[e.from] === d && depths[e.to] === d + 1) {
        layerEdges.push([upperPos[e.from], lowerPos[e.to]])
      }
    }

    // Count inversions: each pair of edges with inverted order is a crossing
    for (let i = 0; i < layerEdges.length; i++) {
      for (let j = i + 1; j < layerEdges.length; j++) {
        const [u1, l1] = layerEdges[i]
        const [u2, l2] = layerEdges[j]
        if ((u1 < u2 && l1 > l2) || (u1 > u2 && l1 < l2)) {
          total++
        }
      }
    }
  }
  return total
}

/** Reorder nodes within each layer to minimize edge crossings (barycenter heuristic). */
function minimizeCrossings(rows, depths, edges, maxDepth) {
  const parentMap = buildParentMap(edges)
  const childMap = buildChildMap(edges)
  const NUM_SWEEPS = 2

  let bestRows = rows.map(r => [...r])
  let bestCrossings = countCrossings(rows, depths, edges, maxDepth)

  for (let sweep = 0; sweep < NUM_SWEEPS; sweep++) {
    // Top-down: reorder each layer by average parent position in the layer above
    for (let d = 1; d <= maxDepth; d++) {
      const row = rows[d]
      if (row.length <= 1) continue
      const prevRow = rows[d - 1]
      const prevPos = {}
      prevRow.forEach((id, i) => { prevPos[id] = i })

      const withBary = row.map((id, origIdx) => {
        const parents = (parentMap[id] || []).filter(pid => depths[pid] === d - 1)
        const bc = parents.length === 0
          ? null
          : parents.reduce((sum, pid) => sum + prevPos[pid], 0) / parents.length
        return { id, bc, origIdx }
      })

      withBary.sort((a, b) => {
        if (a.bc === null && b.bc === null) return a.origIdx - b.origIdx
        if (a.bc === null) return 0
        if (b.bc === null) return 0
        return a.bc - b.bc
      })

      rows[d] = withBary.map(x => x.id)
    }

    // Bottom-up: reorder each layer by average child position in the layer below
    for (let d = maxDepth - 1; d >= 0; d--) {
      const row = rows[d]
      if (row.length <= 1) continue
      const nextRow = rows[d + 1]
      const nextPos = {}
      nextRow.forEach((id, i) => { nextPos[id] = i })

      const withBary = row.map((id, origIdx) => {
        const children = (childMap[id] || []).filter(cid => depths[cid] === d + 1)
        const bc = children.length === 0
          ? null
          : children.reduce((sum, cid) => sum + nextPos[cid], 0) / children.length
        return { id, bc, origIdx }
      })

      withBary.sort((a, b) => {
        if (a.bc === null && b.bc === null) return a.origIdx - b.origIdx
        if (a.bc === null) return 0
        if (b.bc === null) return 0
        return a.bc - b.bc
      })

      rows[d] = withBary.map(x => x.id)
    }

    // Keep the best ordering seen across sweeps
    const currentCrossings = countCrossings(rows, depths, edges, maxDepth)
    if (currentCrossings < bestCrossings) {
      bestRows = rows.map(r => [...r])
      bestCrossings = currentCrossings
    }
  }

  // Restore best ordering
  for (let d = 0; d <= maxDepth; d++) {
    rows[d] = bestRows[d]
  }
}

/** Compute the depth of every node (longest path from a root).
 *  axiomIds — set of node ids to pin at depth 0 (their inter-edges are ignored). */
function computeDepths(nodes, edges, axiomIds) {
  // Filter out axiom-to-axiom edges so all axioms collapse to depth 0
  const effectiveEdges = axiomIds && axiomIds.size > 0
    ? edges.filter(e => !(axiomIds.has(e.from) && axiomIds.has(e.to)))
    : edges

  const children = {}
  const parentMap = buildParentMap(effectiveEdges)
  for (const e of effectiveEdges) {
    if (!children[e.from]) children[e.from] = []
    children[e.from].push(e.to)
  }

  const depths = {}
  const nodeIds = new Set(nodes.map(n => n.id))

  // BFS from roots (nodes with no incoming edge)
  const roots = nodes.filter(n => !parentMap[n.id] || parentMap[n.id].length === 0)
  const queue = roots.map(n => [n.id, 0])
  while (queue.length) {
    const [id, d] = queue.shift()
    if (depths[id] !== undefined && depths[id] >= d) continue
    depths[id] = d
    for (const cid of (children[id] || [])) {
      if (nodeIds.has(cid)) queue.push([cid, d + 1])
    }
  }

  // Fallback: any unreachable node gets depth 0
  for (const n of nodes) {
    if (depths[n.id] === undefined) depths[n.id] = 0
  }
  return depths
}

/** Collect all ancestor ids (transitive parents) for a given node. */
function collectAncestors(nodeId, parentMap) {
  const visited = new Set()
  const stack = [nodeId]
  while (stack.length) {
    const cur = stack.pop()
    if (visited.has(cur)) continue
    visited.add(cur)
    for (const pid of (parentMap[cur] || [])) {
      stack.push(pid)
    }
  }
  return visited
}

/** Collect all descendant ids (transitive children) for a given node. */
function collectDescendants(nodeId, childMap) {
  const visited = new Set()
  const stack = [nodeId]
  while (stack.length) {
    const cur = stack.pop()
    if (visited.has(cur)) continue
    visited.add(cur)
    for (const cid of (childMap[cur] || [])) {
      stack.push(cid)
    }
  }
  return visited
}

/** Lay out nodes into { id -> {x,y} } positions. */
function layoutNodes(nodes, edges, width) {
  // Only the three foundational axioms belong in the "Axioms" box;
  // other pages in axioms/ (e.g. coherence-operational) are derivations about the axioms.
  const AXIOM_IDS = ['axioms/coherence-conservation', 'axioms/observer-definition', 'axioms/loop-closure']
  const axiomIds = new Set(AXIOM_IDS.filter(id => nodes.some(n => n.id === id)))
  const depths = computeDepths(nodes, edges, axiomIds)
  const maxDepth = Math.max(0, ...Object.values(depths))

  // Group node ids by depth row
  const rows = []
  for (let d = 0; d <= maxDepth; d++) rows.push([])
  for (const n of nodes) rows[depths[n.id]].push(n.id)

  // Reorder within layers to minimize edge crossings
  minimizeCrossings(rows, depths, edges, maxDepth)

  const ROW_HEIGHT = 100
  const NODE_RADIUS = 22
  const TOP_PAD = 70          // extra room for axiom box header
  const positions = {}

  const STAGGER = 18  // vertical offset for alternating nodes in a row
  const LEFT_PAD = 100  // extra left margin to clear the legend

  for (let d = 0; d <= maxDepth; d++) {
    const row = rows[d]
    const count = row.length
    const usableWidth = width - LEFT_PAD
    const spacing = usableWidth / (count + 1)
    for (let i = 0; i < count; i++) {
      // Alternate nodes up/down within each row to reduce label overlap
      // Skip staggering for axiom nodes (depth 0 axiom row)
      const isAxiom = axiomIds.has(row[i])
      const yOffset = (!isAxiom && count > 1) ? (i % 2 === 0 ? -STAGGER : STAGGER) : 0
      // Push all rows after the axiom row down by 1/3 row height for breathing room
      const postAxiomPad = (d >= 1) ? Math.round(ROW_HEIGHT / 3) : 0
      positions[row[i]] = {
        x: LEFT_PAD + spacing * (i + 1),
        y: TOP_PAD + d * ROW_HEIGHT + yOffset + postAxiomPad,
      }
    }
  }

  const POST_AXIOM_PAD = Math.round(ROW_HEIGHT / 3)
  return { positions, height: TOP_PAD + (maxDepth + 1) * ROW_HEIGHT + POST_AXIOM_PAD + TOP_PAD, nodeRadius: NODE_RADIUS, axiomIds }
}

// ---- Component -------------------------------------------------------------

function DependencyGraph({ state, props }) {
  const nodes = props.nodes || []
  const edges = props.edges || []
  const width = props.width || 1350

  const { positions, height, nodeRadius, axiomIds } = layoutNodes(nodes, edges, width)
  const parentMap = buildParentMap(edges)
  const childMap = buildChildMap(edges)
  const hoveredId = state.hoveredNode
  const hoveredGroup = state.hoveredGroup
  const ancestors = hoveredId ? collectAncestors(hoveredId, parentMap) : new Set()
  const descendants = hoveredId ? collectDescendants(hoveredId, childMap) : new Set()
  const chainNodes = hoveredId
    ? new Set([...ancestors, ...descendants])
    : null

  // Build node-id → group lookup for legend↔node interaction
  const nodeGroupMap = {}
  for (const n of nodes) nodeGroupMap[n.id] = n.group

  // When a node is hovered, determine which group it belongs to (for legend dimming)
  const activeGroupFromNode = hoveredId ? nodeGroupMap[hoveredId] : null

  // Split edges into normal and highlighted for z-order control
  const normalEdges = []
  const highlightedEdges = []
  edges.forEach((e, i) => {
    const from = positions[e.from]
    const to = positions[e.to]
    if (!from || !to) return
    const isChainEdge = (ancestors.has(e.from) && ancestors.has(e.to))
      || (descendants.has(e.from) && descendants.has(e.to))
    if (isChainEdge) {
      highlightedEdges.push({ e, i, from, to })
    } else {
      normalEdges.push({ e, i, from, to })
    }
  })

  // Compute axiom box bounds
  const axiomPositions = nodes
    .filter(n => axiomIds.has(n.id))
    .map(n => positions[n.id])
    .filter(Boolean)
  const axiomBox = axiomPositions.length > 0 ? {
    x: Math.min(...axiomPositions.map(p => p.x)) - nodeRadius - 110,
    y: Math.min(...axiomPositions.map(p => p.y)) - nodeRadius - 30,
    x2: Math.max(...axiomPositions.map(p => p.x)) + nodeRadius + 110,
    y2: Math.max(...axiomPositions.map(p => p.y)) + nodeRadius + 36,
  } : null

  return (
    <div className="dependency-graph-wrapper" style={{ position: 'relative' }}>
      <svg
        className="dependency-graph-svg"
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        style={{ display: 'block', maxWidth: '100%', height: 'auto', touchAction: 'manipulation' }}
      >
        {/* Axiom box */}
        {axiomBox && (
          <>
            <rect
              x={axiomBox.x}
              y={axiomBox.y}
              width={axiomBox.x2 - axiomBox.x}
              height={axiomBox.y2 - axiomBox.y}
              rx={12}
              ry={12}
              fill="#eff6ff"
              stroke="#93c5fd"
              style={{ strokeWidth: 1.5 }}
            />
            <text
              x={(axiomBox.x + axiomBox.x2) / 2}
              y={axiomBox.y + 18}
              fill="#3b82f6"
              style={{
                fontSize: '13px',
                fontWeight: 600,
                textAnchor: 'middle',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Axioms
            </text>
          </>
        )}

        {/* Legend — pure SVG elements (no foreignObject, avoids mobile rendering bugs) */}
        {(() => {
          const legendX = 10
          const legendY = axiomBox ? axiomBox.y : 10
          const ROW_H = 28
          const PAD_X = 14
          const PAD_Y = 14
          const SWATCH_R = 7
          const FONT_SIZE = 18
          const entries = Object.entries(GROUP_COLORS)
          const boxW = 170
          const boxH = PAD_Y * 2 + entries.length * ROW_H - (ROW_H - FONT_SIZE)

          return (
            <g className="dep-legend">
              <rect
                x={legendX}
                y={legendY}
                width={boxW}
                height={boxH}
                rx={10}
                ry={10}
                fill="rgba(255,255,255,0.92)"
                stroke="#e2e8f0"
                style={{ strokeWidth: 1.5 }}
              />
              {entries.map(([group, color], idx) => {
                const legendDimmed = (activeGroupFromNode && activeGroupFromNode !== group)
                  || (hoveredGroup && hoveredGroup !== group)
                const rowY = legendY + PAD_Y + idx * ROW_H + SWATCH_R
                return (
                  <g
                    key={group}
                    className={`dep-legend-item dep-legend--${group}`}
                    style={{ cursor: 'pointer', opacity: legendDimmed ? 0.25 : 1, transition: 'opacity 0.2s ease' }}
                  >
                    {/* Invisible hit area for easier tapping */}
                    <rect
                      x={legendX}
                      y={rowY - SWATCH_R - 2}
                      width={boxW}
                      height={ROW_H}
                      fill="transparent"
                    />
                    <circle
                      cx={legendX + PAD_X + SWATCH_R}
                      cy={rowY}
                      r={SWATCH_R}
                      fill={color}
                    />
                    <text
                      x={legendX + PAD_X + SWATCH_R * 2 + 8}
                      y={rowY}
                      fill="#444"
                      style={{
                        fontSize: `${FONT_SIZE}px`,
                        fontFamily: 'Inter, system-ui, sans-serif',
                        dominantBaseline: 'central',
                        pointerEvents: 'none',
                      }}
                    >
                      {GROUP_LABELS[group] || group}
                    </text>
                  </g>
                )
              })}
            </g>
          )
        })()}

        {/* Non-highlighted edges (bottom layer) */}
        {normalEdges.map(({ e, i, from, to }) => {
          const edgeDimmedByGroup = hoveredGroup
            && nodeGroupMap[e.from] !== hoveredGroup
            && nodeGroupMap[e.to] !== hoveredGroup
          const edgeDimmedByChain = chainNodes
            && !chainNodes.has(e.from)
            && !chainNodes.has(e.to)
          const edgeDimmed = edgeDimmedByGroup || edgeDimmedByChain
          return (
            <line
              key={`edge-${i}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="#555"
              style={{
                strokeWidth: 1,
                strokeOpacity: edgeDimmed ? 0.05 : 0.3,
                transition: 'stroke-opacity 0.2s ease',
              }}
            />
          )
        })}

        {/* Highlighted edges (rendered on top of normal edges) */}
        {highlightedEdges.map(({ i, from, to }) => (
          <line
            key={`edge-hl-${i}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="#f59e0b"
            style={{ strokeWidth: 3.5, strokeOpacity: 1 }}
          />
        ))}

        {/* Nodes */}
        {nodes.map(node => {
          const pos = positions[node.id]
          if (!pos) return null
          const color = GROUP_COLORS[node.group] || '#888'
          const opacity = STATUS_OPACITY[node.status] || 0.5
          const isStub = node.status === 'stub'
          const isNonViable = node.status === 'non-viable'
          const isHovered = hoveredId === node.id
          const isGroupHighlighted = hoveredGroup && node.group === hoveredGroup
          const inChain = chainNodes && chainNodes.has(node.id) && !isHovered
          const highlighted = isHovered || isGroupHighlighted
          const ringColor = isHovered ? '#f59e0b' : (isGroupHighlighted ? '#f59e0b' : (inChain ? '#fbbf24' : 'none'))
          const ringWidth = isHovered ? 4 : (isGroupHighlighted ? 3 : (inChain ? 2.5 : 0))

          // Dim nodes not in the hovered legend group or not in the dependency chain
          const dimmedByGroup = hoveredGroup && !isGroupHighlighted
          const dimmedByChain = chainNodes && !chainNodes.has(node.id)
          const dimmed = dimmedByGroup || dimmedByChain

          // Show full title when highlighted, truncated otherwise
          const displayTitle = highlighted
            ? node.title
            : (node.title.length > 18 ? node.title.slice(0, 16) + '...' : node.title)

          return (
              <g
                key={node.id}
                className={`dep-node dep-node--${node.id.replace(/\//g, '--')}`}
                style={{ cursor: 'pointer' }}
              >
                {/* Highlight ring */}
                {ringWidth > 0 && (
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={nodeRadius + 4}
                    fill="none"
                    stroke={ringColor}
                    style={{ strokeWidth: ringWidth }}
                  />
                )}
                {/* Main circle */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={nodeRadius}
                  fill={isNonViable ? '#888' : color}
                  stroke={isNonViable ? '#dc2626' : color}
                  style={{
                    fillOpacity: dimmed ? 0.1 : opacity,
                    strokeWidth: isStub ? 2 : (isNonViable ? 4 : 1.5),
                    strokeOpacity: dimmed ? 0.1 : 1,
                    strokeDasharray: isStub ? '4 3' : 'none',
                    transition: 'fill-opacity 0.2s ease, stroke-opacity 0.2s ease',
                  }}
                />
                {/* X overlay for non-viable */}
                {isNonViable && (
                  <>
                    <line
                      x1={pos.x - nodeRadius * 0.45}
                      y1={pos.y - nodeRadius * 0.45}
                      x2={pos.x + nodeRadius * 0.45}
                      y2={pos.y + nodeRadius * 0.45}
                      stroke="#dc2626"
                      style={{ strokeWidth: 3, strokeLinecap: 'round', pointerEvents: 'none', opacity: dimmed ? 0.1 : 1, transition: 'opacity 0.2s ease' }}
                    />
                    <line
                      x1={pos.x + nodeRadius * 0.45}
                      y1={pos.y - nodeRadius * 0.45}
                      x2={pos.x - nodeRadius * 0.45}
                      y2={pos.y + nodeRadius * 0.45}
                      stroke="#dc2626"
                      style={{ strokeWidth: 3, strokeLinecap: 'round', pointerEvents: 'none', opacity: dimmed ? 0.1 : 1, transition: 'opacity 0.2s ease' }}
                    />
                  </>
                )}
              </g>
          )
        })}

        {/* Labels — rendered as a separate layer on top of all nodes */}
        {nodes.map(node => {
          const pos = positions[node.id]
          if (!pos) return null
          const isHovered2 = hoveredId === node.id
          const isGroupHighlighted2 = hoveredGroup && node.group === hoveredGroup
          const highlighted2 = isHovered2 || isGroupHighlighted2
          const dimmedByGroup2 = hoveredGroup && !isGroupHighlighted2
          const dimmedByChain2 = chainNodes && !chainNodes.has(node.id)
          const dimmed2 = dimmedByGroup2 || dimmedByChain2
          const displayTitle2 = highlighted2
            ? node.title
            : (node.title.length > 18 ? node.title.slice(0, 16) + '...' : node.title)

          // Shift label down when highlighted to account for the highlight ring
          const labelY = pos.y + nodeRadius + (highlighted2 ? 28 : 20)

          return (
            <text
              key={`label-${node.id}`}
              x={pos.x}
              y={labelY}
              fill={highlighted2 ? '#1e293b' : '#888'}
              style={{
                fontSize: highlighted2 ? '20px' : '18px',
                pointerEvents: 'none',
                textAnchor: 'middle',
                fontWeight: highlighted2 ? 'bold' : 'normal',
                opacity: dimmed2 ? 0.1 : 1,
                transition: 'opacity 0.2s ease',
              }}
            >
              {displayTitle2}
            </text>
          )
        })}
      </svg>

    </div>
  )
}

// ---- Sygnal wiring ---------------------------------------------------------

DependencyGraph.initialState = {
  hoveredNode: null,
  hoveredGroup: null,
}

DependencyGraph.intent = ({ DOM }) => ({
  // pointerover/pointerout bubble (unlike pointerenter/pointerleave),
  // which is required for Sygnal's delegated event handling.
  // pointerType === 'mouse' filters out touch-generated events.
  HOVER_NODE:  DOM.select('.dep-node').events('pointerover')
                 .filter(ev => ev.pointerType === 'mouse'),
  LEAVE_NODE:  DOM.select('.dep-node').events('pointerout')
                 .filter(ev => ev.pointerType === 'mouse'),
  TAP_NODE:    DOM.select('.dep-node').events('click'),
  TAP_BG:      DOM.select('.dependency-graph-svg').events('click'),
  HOVER_LEGEND: DOM.select('.dep-legend-item').events('pointerover')
                  .filter(ev => ev.pointerType === 'mouse'),
  LEAVE_LEGEND: DOM.select('.dep-legend-item').events('pointerout')
                  .filter(ev => ev.pointerType === 'mouse'),
  TAP_LEGEND:  DOM.select('.dep-legend-item').events('click'),
})

DependencyGraph.model = {
  HOVER_NODE: (state, ev) => {
    const g = ev.target && ev.target.closest ? ev.target.closest('.dep-node') : null
    if (!g) return state
    const cls = Array.from(g.classList).find(c => c.startsWith('dep-node--'))
    const nodeId = cls ? cls.replace('dep-node--', '').replace(/--/g, '/') : null
    if (state.hoveredNode === nodeId) return state // still within same node group
    return { ...state, hoveredNode: nodeId }
  },
  TAP_NODE: (state, ev) => {
    const g = ev.target && ev.target.closest ? ev.target.closest('.dep-node') : null
    if (!g) return state
    const cls = Array.from(g.classList).find(c => c.startsWith('dep-node--'))
    const nodeId = cls ? cls.replace('dep-node--', '').replace(/--/g, '/') : null
    if (!nodeId) return state
    // Already hovered (second tap / desktop click-after-hover) → navigate
    if (state.hoveredNode === nodeId) {
      window.location.href = `${BASE_URL}/derivations/${nodeId}`
      return state
    }
    // First tap on un-hovered node → just show the chain
    return { ...state, hoveredNode: nodeId }
  },
  LEAVE_NODE: (state, ev) => {
    // pointerout fires for child transitions within the same <g> —
    // only clear hover when the pointer truly leaves the node group
    const leaving = ev.target && ev.target.closest ? ev.target.closest('.dep-node') : null
    const entering = ev.relatedTarget && ev.relatedTarget.closest
      ? ev.relatedTarget.closest('.dep-node') : null
    if (leaving && leaving === entering) return state
    return { ...state, hoveredNode: null }
  },
  TAP_BG: (state, ev) => {
    // Tap on empty SVG space clears hover (important on touch devices)
    // Ignore taps that landed on a node or legend item
    if (ev.target.closest && (ev.target.closest('.dep-node') || ev.target.closest('.dep-legend-item'))) return state
    return { ...state, hoveredNode: null, hoveredGroup: null }
  },
  HOVER_LEGEND: (state, ev) => {
    const item = ev.target && ev.target.closest ? ev.target.closest('.dep-legend-item') : null
    if (!item) return state
    const cls = Array.from(item.classList).find(c => c.startsWith('dep-legend--'))
    const group = cls ? cls.replace('dep-legend--', '') : null
    if (state.hoveredGroup === group) return state
    return { ...state, hoveredGroup: group }
  },
  LEAVE_LEGEND: (state, ev) => {
    const leaving = ev.target && ev.target.closest ? ev.target.closest('.dep-legend-item') : null
    const entering = ev.relatedTarget && ev.relatedTarget.closest
      ? ev.relatedTarget.closest('.dep-legend-item') : null
    if (leaving && leaving === entering) return state
    return { ...state, hoveredGroup: null }
  },
  TAP_LEGEND: (state, ev) => {
    ev.stopPropagation()  // prevent TAP_BG from also firing
    const item = ev.target && ev.target.closest ? ev.target.closest('.dep-legend-item') : null
    if (!item) return state
    const cls = Array.from(item.classList).find(c => c.startsWith('dep-legend--'))
    const group = cls ? cls.replace('dep-legend--', '') : null
    // Toggle: tap again to deselect
    if (state.hoveredGroup === group) return { ...state, hoveredGroup: null }
    return { ...state, hoveredGroup: group, hoveredNode: null }
  },
}

export default DependencyGraph
