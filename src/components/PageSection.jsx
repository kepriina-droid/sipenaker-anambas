function PageSection({ title, description, stats = [], children }) {
  return (
    <section className="page-section">
      <div className="section-head">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      {stats.length > 0 && (
        <div className="stats-grid">
          {stats.map((item) => (
            <article key={item.label} className="stat-card">
              <p className="stat-label">{item.label}</p>
              <p className="stat-value">{item.value}</p>
            </article>
          ))}
        </div>
      )}

      {children}
    </section>
  )
}

export default PageSection
