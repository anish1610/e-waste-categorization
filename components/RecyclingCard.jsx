// components/RecyclingCard.jsx

export default function RecyclingCard({ center }) {
  const {
    name,
    address,
    city,
    contact,
    hours,
    acceptedCategories,
    website,
  } = center;

  return (
    <article className="card recycling-card">
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{address}</p>
        <p className="card-text card-city">{city}</p>

        <div className="card-meta-row">
          <span className="badge-tag">Accepts: {acceptedCategories.join(", ")}</span>
        </div>

        <div className="card-meta">
          <p className="card-meta-item">
            <span className="card-meta-label">Contact:</span> {contact}
          </p>
          <p className="card-meta-item">
            <span className="card-meta-label">Hours:</span> {hours}
          </p>
        </div>

        {website && (
          <a
            className="btn-link"
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          >
            View centre details
          </a>
        )}
      </div>
    </article>
  );
}
