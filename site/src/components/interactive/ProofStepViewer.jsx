// ---------------------------------------------------------------------------
// ProofStepViewer -- Sygnal component
// A compact proof structure navigator for derivation pages.
// Shows numbered steps with titles and optional summaries.
// Click a step to scroll to it in the content below; toggle to expand summary.
// ---------------------------------------------------------------------------

const STEP_COLORS = [
  '#2563eb', '#7c3aed', '#059669', '#dc2626',
  '#ea580c', '#0891b2', '#4f46e5', '#be185d',
]

function ProofStepViewer({ state, props }) {
  const steps = props.steps || []
  const showSummaries = state.showSummaries
  const expandedSteps = state.expandedSteps || {}
  const allExpanded = state.allExpanded

  if (steps.length === 0) return null

  return (
    <div className="psv-wrapper" style={{
      background: '#f8fafc', border: '1px solid #e2e8f0',
      borderRadius: '8px', padding: '1rem', marginBottom: '2rem',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '0.75rem',
      }}>
        <h3 style={{
          fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase',
          letterSpacing: '0.05em', color: '#475569', margin: '0', padding: '0', border: 'none',
        }}>
          Proof Structure ({steps.length} steps)
        </h3>
        <button
          className="psv-toggle-all"
          style={{
            fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '9999px',
            border: '1px solid #cbd5e1', background: allExpanded ? '#e2e8f0' : '#fff',
            color: '#475569', cursor: 'pointer', fontWeight: '500',
          }}
        >
          {allExpanded ? 'Collapse all' : 'Expand all'}
        </button>
      </div>

      {/* Steps */}
      <ol className="psv-steps" style={{ listStyle: 'none', margin: '0', padding: '0' }}>
        {steps.map((step, i) => {
          const isExpanded = allExpanded || expandedSteps[i]
          const color = STEP_COLORS[i % STEP_COLORS.length]
          const isLast = i === steps.length - 1

          return (
            <li
              key={`step-${i}`}
              className={`psv-step psv-step--${i}`}
              style={{ position: 'relative', paddingLeft: '2.5rem', paddingBottom: isLast ? '0' : '0.5rem' }}
            >
              {/* Connecting line */}
              {!isLast && (
                <div style={{
                  position: 'absolute', left: '13px', top: '22px',
                  width: '2px', height: 'calc(100% - 10px)',
                  background: '#e2e8f0',
                }} />
              )}

              {/* Step number circle */}
              <div style={{
                position: 'absolute', left: '2px', top: '2px',
                width: '24px', height: '24px', borderRadius: '50%',
                background: color, color: '#fff',
                fontSize: '0.7rem', fontWeight: '700',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: '0', zIndex: '1',
              }}>
                {i + 1}
              </div>

              {/* Step content */}
              <div>
                <div
                  className={`psv-step-header psv-step-toggle psv-step-toggle--${i}`}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    cursor: step.summary ? 'pointer' : 'default',
                    paddingTop: '2px',
                  }}
                >
                  {step.anchor ? (
                    <a
                      href={step.anchor}
                      className="psv-step-link"
                      style={{
                        fontWeight: '600', fontSize: '0.85rem', color: '#1e293b',
                        textDecoration: 'none', lineHeight: '1.3',
                      }}
                    >
                      {step.title}
                    </a>
                  ) : (
                    <span style={{
                      fontWeight: '600', fontSize: '0.85rem', color: '#1e293b',
                      lineHeight: '1.3',
                    }}>
                      {step.title}
                    </span>
                  )}
                  {step.summary && (
                    <span style={{ color: '#94a3b8', fontSize: '0.65rem', flexShrink: '0' }}>
                      {isExpanded ? '\u25BC' : '\u25B6'}
                    </span>
                  )}
                </div>

                {/* Key result tag */}
                {step.keyResult && (
                  <div style={{
                    fontSize: '0.72rem', color: color, fontWeight: '500',
                    marginTop: '0.15rem', opacity: 0.9,
                  }}>
                    {step.keyResult}
                  </div>
                )}

                {/* Expanded summary */}
                {isExpanded && step.summary && (
                  <div style={{
                    fontSize: '0.78rem', color: '#64748b', lineHeight: '1.5',
                    marginTop: '0.35rem', paddingRight: '0.5rem',
                  }}>
                    {step.summary}
                  </div>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

// ---- Sygnal wiring ---------------------------------------------------------

ProofStepViewer.initialState = {
  expandedSteps: {},
  allExpanded: false,
}

ProofStepViewer.intent = ({ DOM }) => ({
  TOGGLE_STEP: DOM.select('.psv-step-toggle').events('click'),
  TOGGLE_ALL:  DOM.select('.psv-toggle-all').events('click'),
})

ProofStepViewer.model = {
  TOGGLE_STEP: (state, ev) => {
    // Don't toggle if user clicked the anchor link
    if (ev.target && (ev.target.tagName === 'A' || ev.target.closest('.psv-step-link'))) return state
    const el = ev.target && ev.target.closest ? ev.target.closest('.psv-step-toggle') : null
    if (!el) return state
    const cls = Array.from(el.classList).find(c => c.startsWith('psv-step-toggle--'))
    const idx = cls ? parseInt(cls.replace('psv-step-toggle--', ''), 10) : -1
    if (idx < 0) return state
    const expanded = { ...(state.expandedSteps || {}) }
    expanded[idx] = !expanded[idx]
    return { ...state, expandedSteps: expanded, allExpanded: false }
  },
  TOGGLE_ALL: (state) => {
    return { ...state, allExpanded: !state.allExpanded, expandedSteps: {} }
  },
}

export default ProofStepViewer
