// app/page.js
"use client";

import { useMemo, useState } from "react";
import { products } from "../data/products";
import { recyclingCenters } from "../data/recyclingCenters";
import FilterBar from "../components/FilterBar";
import ProductCard from "../components/ProductCard";
import RecyclingCard from "../components/RecyclingCard";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRecyclable, setSelectedRecyclable] = useState("all");
  const [sortBy, setSortBy] = useState("name-asc");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchTerm.trim()) {
      const query = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedRecyclable !== "all") {
      const isRecyclable = selectedRecyclable === "recyclable";
      result = result.filter((p) => p.recyclable === isRecyclable);
    }

    if (sortBy === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "hazard-desc") {
      result.sort((a, b) => b.hazardLevel - a.hazardLevel);
    }

    return result;
  }, [searchTerm, selectedCategory, selectedRecyclable, sortBy]);

  const centersById = useMemo(() => {
    const map = new Map();
    recyclingCenters.forEach((c) => map.set(c.id, c));
    return map;
  }, []);

  return (
    <div className="page-layout">
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">Smart categorization for smarter recycling.</h2>
          <p className="hero-text">
            Filter by category, recyclability, and hazard level. Each product is mapped to a verified
            recycling centre with clear disposal guidance.
          </p>
        </div>
        <div className="hero-highlight">
          <p className="hero-metric-title">Why this matters:</p>
          <ul className="hero-metric-list">
            <li>Reduces hazardous waste entering landfills.</li>
            <li>Encourages responsible consumer behaviour.</li>
            <li>Connects users to nearby recycling infrastructure.</li>
          </ul>
        </div>
      </section>

      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedRecyclable={selectedRecyclable}
        setSelectedRecyclable={setSelectedRecyclable}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <section className="content-grid">
        <div className="products-section">
          <div className="section-header">
            <h3 className="section-title">E-waste products</h3>
            <p className="section-subtitle">
              Showing <strong>{filteredProducts.length}</strong> of {products.length} items
              based on your filters.
            </p>
          </div>
          {filteredProducts.length === 0 ? (
            <div className="empty-state">
              <p>No products match your filters yet.</p>
              <p className="empty-state-hint">Try clearing the search or selecting a different category.</p>
            </div>
          ) : (
            <div className="card-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  recyclingCenter={centersById.get(product.recyclingCenterId)}
                />
              ))}
            </div>
          )}
        </div>

        <aside className="sidebar-section">
          <div className="section-header">
            <h3 className="section-title">Recycling centres</h3>
            <p className="section-subtitle">
              Verified locations that accept categorized e‑waste items.
            </p>
          </div>
          <div className="sidebar-cards">
            {recyclingCenters.map((center) => (
              <RecyclingCard key={center.id} center={center} />
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}
