export default function FilterBar({
  search,
  setSearch,
  category,
  setCategory,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Search product..."
        className="border p-2 rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="border p-2 rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Household">Household</option>
        <option value="Office">Office</option>
        <option value="Industrial">Industrial</option>
      </select>
    </div>
  );
}
