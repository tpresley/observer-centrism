// ---------------------------------------------------------------------------
// CoherenceVisualizer -- Sygnal component
// Animated dual-loop diagram showing two coupled U(1) phase oscillators
// (the minimal observer pair). Visually embodies all three axioms:
//   Coherence Conservation -- total coherence is constant
//   Observer Definition    -- each loop maintains an invariant (charge)
//   Loop Closure           -- each loop completes a full cycle
// ---------------------------------------------------------------------------

function CoherenceVisualizer({ state }) {
  const paused = state.paused

  // Layout constants
  const W = 320, H = 160
  const cx1 = 100, cx2 = 220, cy = 62, r = 40
  const dotR = 5
  const midX = (cx1 + cx2) / 2
  const barLeft = cx1 - r
  const barRight = cx2 + r
  const barW = barRight - barLeft

  // Note: Snabbdom sets JSX attributes as-is on SVG elements.
  // SVG uses kebab-case (text-anchor), not camelCase (textAnchor).
  // We must use style={{ textAnchor: 'middle' }} for correct centering.
  const centered = { textAnchor: 'middle' }
  const endAligned = { textAnchor: 'end' }

  return (
    <div className={`cv-wrapper ${paused ? 'cv-paused' : ''}`}
         style={{ cursor: 'pointer', margin: '1.5rem auto' }}>
      <svg viewBox={`0 0 ${W} ${H}`}
           role="img" aria-label="Animated diagram of two coupled phase oscillators representing the minimal observer pair"
           style={{ display: 'block', margin: '0 auto', maxWidth: `${W}px`, width: '100%' }}>

        {/* Faint loop outlines */}
        <circle cx={cx1} cy={cy} r={r}
                fill="none" stroke="#2563eb" stroke-width="1.5" stroke-opacity="0.25" />
        <circle cx={cx2} cy={cy} r={r}
                fill="none" stroke="#16a34a" stroke-width="1.5" stroke-opacity="0.25" />

        {/* Winding number labels at center of each loop */}
        <text x={cx1} y={cy} dy="0.35em" style={centered}
              font-size="12" font-weight="600" fill="#2563eb" fill-opacity="0.35"
              font-family="'Inter', sans-serif">
          +1
        </text>
        <text x={cx2} y={cy} dy="0.35em" style={centered}
              font-size="12" font-weight="600" fill="#16a34a" fill-opacity="0.35"
              font-family="'Inter', sans-serif">
          {'\u22121'}
        </text>

        {/* Coherence exchange bridge (dashed, pulsing opacity) */}
        <line x1={cx1 + r} y1={cy} x2={cx2 - r} y2={cy}
              stroke="#78716c" stroke-width="1.5" stroke-dasharray="4,3"
              className="cv-pulse" />

        {/* Small arrows on bridge */}
        <polygon points={`${midX + 2},${cy - 3} ${midX + 8},${cy} ${midX + 2},${cy + 3}`}
                 fill="#78716c" fill-opacity="0.5" className="cv-pulse" />
        <polygon points={`${midX - 2},${cy - 3} ${midX - 8},${cy} ${midX - 2},${cy + 3}`}
                 fill="#78716c" fill-opacity="0.5" className="cv-pulse" />

        {/* Phase dot 1 -- clockwise orbit around (cx1, cy)
            Outer <g> translates to loop center; inner <g> rotates around (0,0) = center */}
        <g transform={`translate(${cx1}, ${cy})`}>
          <g className="cv-dot1">
            <circle cx={r} cy={0} r={dotR} fill="#2563eb" />
          </g>
        </g>

        {/* Phase dot 2 -- counter-clockwise orbit around (cx2, cy) */}
        <g transform={`translate(${cx2}, ${cy})`}>
          <g className="cv-dot2">
            <circle cx={r} cy={0} r={dotR} fill="#16a34a" />
          </g>
        </g>

        {/* Observer labels -- centered under each loop */}
        <text x={cx1} y={cy + r + 18} style={centered}
              font-size="9" fill="#78716c" font-family="'Inter', sans-serif">
          Observer 1
        </text>
        <text x={cx2} y={cy + r + 18} style={centered}
              font-size="9" fill="#78716c" font-family="'Inter', sans-serif">
          Observer 2
        </text>

        {/* Total coherence bar */}
        <rect x={barLeft} y={H - 28} width={barW} height="4" rx="2"
              fill="#e7e5e4" />
        <rect x={barLeft} y={H - 28} width={barW / 2} height="4" rx="2"
              fill="#2563eb" fill-opacity="0.4" />
        <rect x={midX} y={H - 28} width={barW / 2} height="4" rx="2"
              fill="#16a34a" fill-opacity="0.4" />
        <text x={barRight} y={H - 6} style={endAligned}
              font-size="8" fill="#a8a29e" font-family="'Inter', sans-serif"
              font-style="italic">
          C = const
        </text>
      </svg>

      {paused && (
        <div style={{
          textAlign: 'center', fontSize: '0.7rem',
          color: '#78716c', marginTop: '0.25rem',
        }}>
          click to resume
        </div>
      )}
    </div>
  )
}

// ---- Sygnal wiring ---------------------------------------------------------

CoherenceVisualizer.initialState = {
  paused: false,
}

CoherenceVisualizer.intent = ({ DOM }) => ({
  TOGGLE_PAUSE: DOM.select('.cv-wrapper').events('click'),
})

CoherenceVisualizer.model = {
  TOGGLE_PAUSE: (state) => ({ ...state, paused: !state.paused }),
}

export default CoherenceVisualizer
