// ---------------------------------------------------------------------------
// PredictionTracker -- Sygnal component
// Interactive dashboard of all predictions with filtering, sorting, and
// visual indicators for status, testability, and distinctiveness.
// ---------------------------------------------------------------------------

const STATUS_LEVELS = ['qualitative', 'semi-quantitative', 'quantitative']
const TESTABILITY_ORDER = ['currently-tested', 'near-future', 'far-future', 'in-principle']
const DISTINCTIVENESS_ORDER = ['unique', 'shared', 'generic']

const STATUS_COLORS = {
  qualitative:        { bg: '#fef3c7', fg: '#92400e', bar: '#f59e0b' },
  'semi-quantitative': { bg: '#dbeafe', fg: '#1e40af', bar: '#3b82f6' },
  quantitative:       { bg: '#dcfce7', fg: '#166534', bar: '#22c55e' },
}

const DISTINCTIVENESS_COLORS = {
  unique:  { bg: '#dcfce7', fg: '#166534', ring: '#22c55e' },
  shared:  { bg: '#fef9c3', fg: '#854d0e', ring: '#eab308' },
  generic: { bg: '#f5f5f4', fg: '#57534e', ring: '#a8a29e' },
}

const TESTABILITY_ICONS = {
  'currently-tested': { symbol: '\u2713', label: 'Currently tested', color: '#22c55e' },
  'near-future':      { symbol: '\u25cb', label: 'Near-future',      color: '#3b82f6' },
  'far-future':       { symbol: '\u25ef', label: 'Far-future',       color: '#f59e0b' },
  'in-principle':     { symbol: '\u2026', label: 'In-principle',      color: '#a8a29e' },
}

function statusProgress(status) {
  const idx = STATUS_LEVELS.indexOf(status)
  return idx >= 0 ? (idx + 1) / STATUS_LEVELS.length : 0
}

function sortPredictions(predictions, sortBy) {
  const copy = [...predictions]
  switch (sortBy) {
    case 'distinctiveness':
      return copy.sort((a, b) =>
        DISTINCTIVENESS_ORDER.indexOf(a.distinctiveness) - DISTINCTIVENESS_ORDER.indexOf(b.distinctiveness)
      )
    case 'testability':
      return copy.sort((a, b) =>
        TESTABILITY_ORDER.indexOf(a.testability) - TESTABILITY_ORDER.indexOf(b.testability)
      )
    case 'status':
      return copy.sort((a, b) =>
        STATUS_LEVELS.indexOf(b.status) - STATUS_LEVELS.indexOf(a.status)
      )
    default:
      return copy
  }
}

// ---- Component -------------------------------------------------------------

function PredictionTracker({ state, props }) {
  const predictions = props.predictions || []
  const activeFilter = state.activeFilter
  const sortBy = state.sortBy

  // Filter
  const filtered = activeFilter === 'all'
    ? predictions
    : predictions.filter(p => p.distinctiveness === activeFilter)

  // Sort
  const sorted = sortPredictions(filtered, sortBy)

  // Stats
  const countByDistinctiveness = {
    unique: predictions.filter(p => p.distinctiveness === 'unique').length,
    shared: predictions.filter(p => p.distinctiveness === 'shared').length,
    generic: predictions.filter(p => p.distinctiveness === 'generic').length,
  }
  const countByStatus = {
    quantitative: predictions.filter(p => p.status === 'quantitative').length,
    'semi-quantitative': predictions.filter(p => p.status === 'semi-quantitative').length,
    qualitative: predictions.filter(p => p.status === 'qualitative').length,
  }

  return (
    <div className="pt-wrapper">
      {/* Summary stats */}
      <div className="pt-stats" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <div className="pt-stat-card" style={{
          flex: '1', minWidth: '140px', padding: '0.75rem 1rem',
          background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0'
        }}>
          <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.04em' }}>Total</div>
          <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e293b' }}>{predictions.length}</div>
        </div>
        {DISTINCTIVENESS_ORDER.map(d => (
          <div key={d} className="pt-stat-card" style={{
            flex: '1', minWidth: '140px', padding: '0.75rem 1rem',
            background: DISTINCTIVENESS_COLORS[d].bg, borderRadius: '8px',
            border: `1px solid ${DISTINCTIVENESS_COLORS[d].ring}`
          }}>
            <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: DISTINCTIVENESS_COLORS[d].fg, letterSpacing: '0.04em' }}>{d}</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: DISTINCTIVENESS_COLORS[d].fg }}>{countByDistinctiveness[d]}</div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="pt-controls" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', color: '#64748b', marginRight: '0.5rem' }}>Filter:</span>
          {['all', ...DISTINCTIVENESS_ORDER].map(f => {
            const isActive = activeFilter === f
            return (
              <button
                key={f}
                className={`pt-filter-btn pt-filter-btn--${f}`}
                style={{
                  padding: '0.3rem 0.75rem', fontSize: '0.75rem', fontWeight: '500',
                  border: `1px solid ${isActive ? '#2563eb' : '#d1d5db'}`,
                  borderRadius: '9999px', cursor: 'pointer',
                  background: isActive ? '#2563eb' : '#fff',
                  color: isActive ? '#fff' : '#374151',
                }}
              >
                {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            )
          })}
        </div>
        <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', color: '#64748b', marginRight: '0.5rem' }}>Sort:</span>
          {['distinctiveness', 'status', 'testability'].map(s => {
            const isActive = sortBy === s
            return (
              <button
                key={s}
                className={`pt-sort-btn pt-sort-btn--${s}`}
                style={{
                  padding: '0.3rem 0.75rem', fontSize: '0.75rem', fontWeight: '500',
                  border: `1px solid ${isActive ? '#7c3aed' : '#d1d5db'}`,
                  borderRadius: '9999px', cursor: 'pointer',
                  background: isActive ? '#7c3aed' : '#fff',
                  color: isActive ? '#fff' : '#374151',
                }}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            )
          })}
        </div>
      </div>

      {/* Prediction cards */}
      <div className="pt-cards" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {sorted.map((pred, i) => {
          const sc = STATUS_COLORS[pred.status] || STATUS_COLORS.qualitative
          const dc = DISTINCTIVENESS_COLORS[pred.distinctiveness] || DISTINCTIVENESS_COLORS.generic
          const tc = TESTABILITY_ICONS[pred.testability] || TESTABILITY_ICONS['in-principle']
          const progress = statusProgress(pred.status)
          const isExpanded = (state.expandedCards || {})[pred.slug]

          return (
            <div
              key={pred.slug}
              className={`pt-card pt-card--${pred.slug}`}
              style={{
                background: '#fff', borderRadius: '8px',
                border: `1px solid #e2e8f0`, overflow: 'hidden',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
              }}
            >
              {/* Card header */}
              <div
                className={`pt-card-header pt-card-toggle pt-card-toggle--${pred.slug}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.875rem 1rem', cursor: 'pointer',
                }}
              >
                {/* Distinctiveness ring */}
                <div style={{
                  width: '12px', height: '12px', borderRadius: '50%',
                  background: dc.ring, flexShrink: '0',
                }} />

                {/* Title */}
                <a
                  href={`/predictions/${pred.slug}`}
                  style={{
                    flex: '1', fontWeight: '600', fontSize: '0.95rem',
                    color: '#1e293b', textDecoration: 'none',
                  }}
                >
                  {pred.title}
                </a>

                {/* Badges */}
                <span style={{
                  fontSize: '0.65rem', fontWeight: '600', textTransform: 'uppercase',
                  padding: '0.15rem 0.5rem', borderRadius: '9999px',
                  background: sc.bg, color: sc.fg, letterSpacing: '0.03em', flexShrink: '0',
                }}>
                  {pred.status}
                </span>
                <span style={{
                  fontSize: '0.65rem', fontWeight: '600', textTransform: 'uppercase',
                  padding: '0.15rem 0.5rem', borderRadius: '9999px',
                  background: dc.bg, color: dc.fg, letterSpacing: '0.03em', flexShrink: '0',
                }}>
                  {pred.distinctiveness}
                </span>

                {/* Testability */}
                <span style={{
                  fontSize: '0.75rem', color: tc.color, flexShrink: '0',
                  display: 'flex', alignItems: 'center', gap: '0.25rem',
                }} title={tc.label}>
                  <span style={{ fontSize: '0.85rem' }}>{tc.symbol}</span>
                  <span style={{ fontSize: '0.65rem' }}>{tc.label}</span>
                </span>

                {/* Expand arrow */}
                <span style={{ color: '#94a3b8', fontSize: '0.7rem', flexShrink: '0' }}>
                  {isExpanded ? '\u25BC' : '\u25B6'}
                </span>
              </div>

              {/* Progress bar */}
              <div style={{ height: '3px', background: '#f1f5f9' }}>
                <div style={{
                  height: '100%', width: `${progress * 100}%`,
                  background: sc.bar, transition: 'width 0.3s',
                }} />
              </div>

              {/* Expanded details */}
              {isExpanded && (
                <div style={{ padding: '0.75rem 1rem', background: '#f8fafc', fontSize: '0.85rem', lineHeight: '1.6' }}>
                  {pred.currentEvidence && (
                    <div style={{ marginBottom: '0.5rem' }}>
                      <strong style={{ color: '#475569' }}>Current evidence: </strong>
                      <span style={{ color: '#64748b' }}>{pred.currentEvidence}</span>
                    </div>
                  )}
                  {pred.dependsOn && pred.dependsOn.length > 0 && (
                    <div>
                      <strong style={{ color: '#475569' }}>Derivation chain: </strong>
                      <span style={{ color: '#64748b' }}>
                        {pred.dependsOn.join(' \u2192 ')}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div className="pt-legend" style={{
        marginTop: '1.5rem', padding: '1rem', background: '#f8fafc',
        borderRadius: '8px', fontSize: '0.75rem', color: '#64748b',
        display: 'flex', gap: '2rem', flexWrap: 'wrap',
      }}>
        <div>
          <strong style={{ color: '#475569' }}>Status: </strong>
          {STATUS_LEVELS.map((s, i) => (
            <span key={s} style={{ marginLeft: i > 0 ? '0.75rem' : '0.25rem' }}>
              <span style={{
                display: 'inline-block', width: '8px', height: '8px',
                borderRadius: '2px', background: STATUS_COLORS[s].bar,
                marginRight: '0.25rem', verticalAlign: 'middle',
              }} />
              {s}
            </span>
          ))}
        </div>
        <div>
          <strong style={{ color: '#475569' }}>Testability: </strong>
          {TESTABILITY_ORDER.map((t, i) => (
            <span key={t} style={{ marginLeft: i > 0 ? '0.75rem' : '0.25rem' }}>
              <span style={{ color: TESTABILITY_ICONS[t].color, marginRight: '0.15rem' }}>
                {TESTABILITY_ICONS[t].symbol}
              </span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ---- Sygnal wiring ---------------------------------------------------------

PredictionTracker.initialState = {
  activeFilter: 'all',
  sortBy: 'distinctiveness',
  expandedCards: {},
}

PredictionTracker.intent = ({ DOM }) => ({
  SET_FILTER:   DOM.select('.pt-filter-btn').events('click'),
  SET_SORT:     DOM.select('.pt-sort-btn').events('click'),
  TOGGLE_CARD:  DOM.select('.pt-card-toggle').events('click'),
})

PredictionTracker.model = {
  SET_FILTER: (state, ev) => {
    // Prevent navigation if the click was on a link inside the card
    if (ev.target && ev.target.tagName === 'A') return state
    const target = ev.currentTarget || ev.target
    const btn = target.closest ? target.closest('.pt-filter-btn') : target
    if (!btn) return state
    const cls = Array.from(btn.classList).find(c => c.startsWith('pt-filter-btn--'))
    const filter = cls ? cls.replace('pt-filter-btn--', '') : 'all'
    return { ...state, activeFilter: filter }
  },
  SET_SORT: (state, ev) => {
    const target = ev.currentTarget || ev.target
    const btn = target.closest ? target.closest('.pt-sort-btn') : target
    if (!btn) return state
    const cls = Array.from(btn.classList).find(c => c.startsWith('pt-sort-btn--'))
    const sortBy = cls ? cls.replace('pt-sort-btn--', '') : 'distinctiveness'
    return { ...state, sortBy }
  },
  TOGGLE_CARD: (state, ev) => {
    // Don't toggle if the user clicked a link
    if (ev.target && ev.target.tagName === 'A') return state
    const target = ev.currentTarget || ev.target
    const el = target.closest ? target.closest('.pt-card-toggle') : target
    if (!el) return state
    const cls = Array.from(el.classList).find(c => c.startsWith('pt-card-toggle--'))
    const slug = cls ? cls.replace('pt-card-toggle--', '') : null
    if (!slug) return state
    const expanded = { ...(state.expandedCards || {}) }
    expanded[slug] = !expanded[slug]
    return { ...state, expandedCards: expanded }
  },
}

export default PredictionTracker
