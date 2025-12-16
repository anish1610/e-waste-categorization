// components/FilterBar.jsx
"use client";

export default function FilterBar({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedRecyclable,
  setSelectedRecyclable,
  sortBy,
  setSortBy,
}) {
  return (
    <section className="filter-bar">
      <div className="filter-group filter-group-main">
        <div className="filter-field">
          <label className="filter-label">Search products</label>
          <input
            type="text"
            className="filter-input"
            placeholder="Search by name, type, or keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-field">
          <label className="filter-label">Category</label>
          <select
            className="filter-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All categories</option>
            <option value="household">Household</option>
            <option value="office">Office</option>
            <option value="industrial">Industrial</option>
          </select>
        </div>

        <div className="filter-field">
          <label className="filter-label">Recyclability</label>
          <select
            className="filter-select"
            value={selectedRecyclable}
            onChange={(e) => setSelectedRecyclable(e.target.value)}
          >
            <option value="all">Recyclable + Non‑recyclable</option>
            <option value="recyclable">Recyclable only</option>
            <option value="non-recyclable">Non‑recyclable only</option>
          </select>
        </div>
      </div>

      <div className="filter-group filter-group-secondary">
        <div className="filter-field">
          <label className="filter-label">Sort by</label>
          <select
            className="filter-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name-asc">Name (A → Z)</option>
            <option value="name-desc">Name (Z → A)</option>
            <option value="hazard-desc">Hazard level (High → Low)</option>
          </select>
        </div>
        <button
          type="button"
          className="btn-reset"
          onClick={() => {
            setSearchTerm("");
            setSelectedCategory("all");
            setSelectedRecyclable("all");
            setSortBy("name-asc");
          }}
        >
          Reset all filters
        </button>
      </div>
    </section>
  );
}
