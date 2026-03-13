function FeatureList({ items }) {
  return (
    <ul className="feature-list">
      {items.map((item) => (
        <li key={item} className="feature-item">
          {item}
        </li>
      ))}
    </ul>
  )
}

export default FeatureList
