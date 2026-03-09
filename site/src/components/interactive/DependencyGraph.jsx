// ---------------------------------------------------------------------------
// DependencyGraph -- Sygnal component
// Renders the derivation dependency DAG as an interactive SVG.
// Axioms sit at the top; predictions at the bottom.
// Hover highlights the ancestor chain; click navigates to the derivation page.
// ---------------------------------------------------------------------------

const GROUP_COLORS = {
  foundation: '#2563eb',
  dynamics:   '#7c3aed',
  geometry:   '#059669',
  quantum:    '#dc2626',
  particles:  '#ea580c',
  holography: '#0891b2',
}

const STATUS_OPACITY = {
  stub:        0.3,
  draft:       0.6,
  provisional: 0.8,
  rigorous:    1.0,
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

/** Compute the depth of every node (longest path from a root). */
function computeDepths(nodes, edges) {
  const children = {}
  const parentMap = buildParentMap(edges)
  for (const e of edges) {
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

/** Lay out nodes into { id -> {x,y} } positions. */
function layoutNodes(nodes, edges, width) {
  const depths = computeDepths(nodes, edges)
  const maxDepth = Math.max(0, ...Object.values(depths))

  // Group node ids by depth row
  const rows = []
  for (let d = 0; d <= maxDepth; d++) rows.push([])
  for (const n of nodes) rows[depths[n.id]].push(n.id)

  const ROW_HEIGHT = 100
  const NODE_RADIUS = 22
  const TOP_PAD = 50
  const positions = {}

  for (let d = 0; d <= maxDepth; d++) {
    const row = rows[d]
    const count = row.length
    const spacing = width / (count + 1)
    for (let i = 0; i < count; i++) {
      positions[row[i]] = {
        x: spacing * (i + 1),
        y: TOP_PAD + d * ROW_HEIGHT,
      }
    }
  }

  return { positions, height: TOP_PAD + (maxDepth + 1) * ROW_HEIGHT + TOP_PAD, nodeRadius: NODE_RADIUS }
}

// ---- Component -------------------------------------------------------------

function DependencyGraph({ state, props }) {
  const nodes = props.nodes || []
  const edges = props.edges || []
  const width = props.width || 900

  const { positions, height, nodeRadius } = layoutNodes(nodes, edges, width)
  const parentMap = buildParentMap(edges)
  const hoveredId = state.hoveredNode
  const highlighted = hoveredId ? collectAncestors(hoveredId, parentMap) : new Set()

  return (
    <div className="dependency-graph-wrapper" style={{ position: 'relative' }}>
      <svg
        className="dependency-graph-svg"
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
      >
        {/* Edges */}
        {edges.map((e, i) => {
          const from = positions[e.from]
          const to = positions[e.to]
          if (!from || !to) return null
          const isHighlighted = highlighted.has(e.from) && highlighted.has(e.to)
          return (
            <line
              key={`edge-${i}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={isHighlighted ? '#f59e0b' : '#555'}
              strokeWidth={isHighlighted ? 2.5 : 1}
              strokeOpacity={isHighlighted ? 1 : 0.3}
            />
          )
        })}

        {/* Nodes */}
        {nodes.map(node => {
          const pos = positions[node.id]
          if (!pos) return null
          const color = GROUP_COLORS[node.group] || '#888'
          const opacity = STATUS_OPACITY[node.status] || 0.5
          const isHovered = hoveredId === node.id
          const isAncestor = highlighted.has(node.id)
          const ringColor = isHovered ? '#f59e0b' : (isAncestor ? '#fbbf24' : 'none')
          const ringWidth = isHovered ? 3 : (isAncestor ? 2 : 0)

          return (
            <a
              key={node.id}
              href={`/derivations/${node.id}`}
              className="dep-node-link"
            >
              <g
                className={`dep-node dep-node--${node.id.replace(/\//g, '--')}`}
              >
                {/* Highlight ring */}
                {ringWidth > 0 && (
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={nodeRadius + 4}
                    fill="none"
                    stroke={ringColor}
                    strokeWidth={ringWidth}
                  />
                )}
                {/* Main circle */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={nodeRadius}
                  fill={color}
                  fillOpacity={opacity}
                  stroke={color}
                  strokeWidth={1.5}
                />
                {/* Label below */}
                <text
                  x={pos.x}
                  y={pos.y + nodeRadius + 14}
                  textAnchor="middle"
                  fontSize="9"
                  fill="#ccc"
                  style={{ pointerEvents: 'none' }}
                >
                  {node.title.length > 18 ? node.title.slice(0, 16) + '...' : node.title}
                </text>
              </g>
            </a>
          )
        })}
      </svg>

      {/* Tooltip */}
      {hoveredId && positions[hoveredId] && (
        <div
          className="dep-tooltip"
          style={{
            position: 'absolute',
            left: `${positions[hoveredId].x}px`,
            top: `${positions[hoveredId].y - nodeRadius - 28}px`,
            transform: 'translateX(-50%)',
            background: '#1e293b',
            color: '#f1f5f9',
            padding: '4px 10px',
            borderRadius: '4px',
            fontSize: '12px',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            zIndex: 10,
            border: '1px solid #334155',
          }}
        >
          {(nodes.find(n => n.id === hoveredId) || {}).title || hoveredId}
        </div>
      )}
    </div>
  )
}

// ---- Sygnal wiring ---------------------------------------------------------

DependencyGraph.initialState = {
  hoveredNode: null,
}

DependencyGraph.intent = ({ DOM }) => ({
  HOVER_NODE:  DOM.select('.dep-node').events('mouseenter'),
  LEAVE_NODE:  DOM.select('.dep-node').events('mouseleave'),
})

DependencyGraph.model = {
  HOVER_NODE: (state, ev) => {
    const target = ev.currentTarget || ev.target
    const g = target.closest ? target.closest('.dep-node') : null
    if (!g) return { ...state, hoveredNode: null }
    const cls = Array.from(g.classList).find(c => c.startsWith('dep-node--'))
    const nodeId = cls ? cls.replace('dep-node--', '').replace(/--/g, '/') : null
    return { ...state, hoveredNode: nodeId }
  },
  LEAVE_NODE: (state) => {
    return { ...state, hoveredNode: null }
  },
}

export default DependencyGraph
