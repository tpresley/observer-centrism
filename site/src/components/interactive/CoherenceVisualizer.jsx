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
  const W = 320, H = 175
  const cx1 = 95, cx2 = 205, cy = 80, r = 40
  const dotR = 5

  // The dot starts at (cx + r, cy) -- rightmost point of each circle
  // Dot 1 orbits clockwise, Dot 2 orbits counter-clockwise

  return (
    <div className={`cv-wrapper ${paused ? 'cv-paused' : ''}`}
         style={{ cursor: 'pointer', margin: '1.5rem auto' }}>
      <svg viewBox={`0 0 ${W} ${H}`}
           role="img" aria-label="Animated diagram of two coupled phase oscillators representing the minimal observer pair"
           style={{ display: 'block', margin: '0 auto', maxWidth: `${W}px`, width: '100%' }}>

        {/* Faint loop outlines */}
        <circle cx={cx1} cy={cy} r={r}
                fill="none" stroke="#2563eb" strokeWidth="1.5" strokeOpacity="0.25" />
        <circle cx={cx2} cy={cy} r={r}
                fill="none" stroke="#16a34a" strokeWidth="1.5" strokeOpacity="0.25" />

        {/* Winding number labels at center of each loop */}
        <text x={cx1} y={cy + 1} textAnchor="middle" dominantBaseline="middle"
              fontSize="11" fontWeight="600" fill="#2563eb" fillOpacity="0.35"
              fontFamily="'Inter', sans-serif">
          +1
        </text>
        <text x={cx2} y={cy + 1} textAnchor="middle" dominantBaseline="middle"
              fontSize="11" fontWeight="600" fill="#16a34a" fillOpacity="0.35"
              fontFamily="'Inter', sans-serif">
          {'\u22121'}
        </text>

        {/* Coherence exchange bridge (dashed, pulsing opacity) */}
        <line x1={cx1 + r} y1={cy} x2={cx2 - r} y2={cy}
              stroke="#78716c" strokeWidth="1.5" strokeDasharray="4,3"
              className="cv-pulse" />

        {/* Small arrows on bridge */}
        <polygon points="152,77 158,80 152,83" fill="#78716c" fillOpacity="0.5"
                 className="cv-pulse" />
        <polygon points="148,77 142,80 148,83" fill="#78716c" fillOpacity="0.5"
                 className="cv-pulse" />

        {/* Phase dot 1 -- clockwise orbit around (cx1, cy) */}
        <g className="cv-dot1" style={{ transformOrigin: `${cx1}px ${cy}px` }}>
          <circle cx={cx1 + r} cy={cy} r={dotR} fill="#2563eb" />
        </g>

        {/* Phase dot 2 -- counter-clockwise orbit around (cx2, cy) */}
        <g className="cv-dot2" style={{ transformOrigin: `${cx2}px ${cy}px` }}>
          <circle cx={cx2 + r} cy={cy} r={dotR} fill="#16a34a" />
        </g>

        {/* Subtle trail arcs to suggest direction */}
        {/* Loop 1: clockwise arrow hint */}
        <path d={`M ${cx1 + r - 3} ${cy - 8} A ${r} ${r} 0 0 1 ${cx1 + r - 3} ${cy + 8}`}
              fill="none" stroke="#2563eb" strokeWidth="0.8" strokeOpacity="0.2"
              markerEnd="" />
        {/* Loop 2: counter-clockwise arrow hint */}
        <path d={`M ${cx2 + r - 3} ${cy + 8} A ${r} ${r} 0 0 0 ${cx2 + r - 3} ${cy - 8}`}
              fill="none" stroke="#16a34a" strokeWidth="0.8" strokeOpacity="0.2" />

        {/* Labels */}
        <text x={cx1} y={cy + r + 22} textAnchor="middle"
              fontSize="9" fill="#78716c" fontFamily="'Inter', sans-serif">
          Observer 1
        </text>
        <text x={cx2} y={cy + r + 22} textAnchor="middle"
              fontSize="9" fill="#78716c" fontFamily="'Inter', sans-serif">
          Observer 2
        </text>

        {/* Total coherence bar at bottom */}
        <rect x={cx1 - r} y={H - 18} width={cx2 + r - (cx1 - r)} height="4" rx="2"
              fill="#e7e5e4" />
        <rect x={cx1 - r} y={H - 18} width={(cx2 + r - (cx1 - r)) / 2} height="4" rx="2"
              fill="#2563eb" fillOpacity="0.4" />
        <rect x={(cx1 - r + cx2 + r) / 2} y={H - 18} width={(cx2 + r - (cx1 - r)) / 2} height="4" rx="2"
              fill="#16a34a" fillOpacity="0.4" />
        <text x={W / 2} y={H - 4} textAnchor="middle"
              fontSize="8" fill="#a8a29e" fontFamily="'Inter', sans-serif">
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
