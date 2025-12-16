// components/ProductCard.jsx
/* eslint-disable @next/next/no-img-element */

export default function ProductCard({ product, recyclingCenter }) {
  const {
    name,
    category,
    image,
    recyclable,
    description,
    hazardLevel,
    tags,
  } = product;

  const categoryLabel =
    category === "household"
      ? "Household"
      : category === "office"
      ? "Office"
      : "Industrial";

  const hazardLabel =
    hazardLevel >= 4 ? "High hazard" : hazardLevel >= 2 ? "Moderate hazard" : "Low hazard";

  return (
    <article className="card product-card">
      {image && (
        <div className="card-image-wrapper">
          <img src={image} alt={name} className="card-image" />
        </div>
      )}

      <div className="card-body">
        <div className="card-heading">
          <h4 className="card-title">{name}</h4>
          <span
            className={`badge-recycle ${
              recyclable ? "badge-recycle-yes" : "badge-recycle-no"
            }`}
          >
            {recyclable ? "Recyclable" : "Non‑recyclable"}
          </span>
        </div>

        <p className="card-text">{description}</p>

        <div className="card-meta-row">
          <span className="badge-tag badge-category">{categoryLabel}</span>
          <span
            className={`badge-tag ${
              hazardLevel >= 4
                ? "badge-hazard-high"
                : hazardLevel >= 2
                ? "badge-hazard-medium"
                : "badge-hazard-low"
            }`}
          >
            {hazardLabel}
          </span>
        </div>

        {tags?.length > 0 && (
          <div className="card-tags">
            {tags.map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>
        )}

        {recyclingCenter && (
          <div className="card-footer">
            <p className="recycling-hint">
              Recommended recycling centre:
              <span className="recycling-hint-name"> {recyclingCenter.name}</span>
            </p>
            <p className="recycling-hint-sub">
              {recyclingCenter.city} • Accepts: {recyclingCenter.acceptedCategories.join(", ")}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
