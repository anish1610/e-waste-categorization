import RecyclingCard from "./RecyclingCard";
import recyclingCenters from "../data/recyclingCenters";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded"
      />

      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.category}</p>

      <span
        className={`inline-block mt-2 px-2 py-1 text-sm rounded ${
          product.recyclable ? "bg-green-200" : "bg-red-200"
        }`}
      >
        {product.recyclable ? "Recyclable" : "Non-Recyclable"}
      </span>

      <h3 className="mt-3 font-semibold">Nearby Recycling Centers</h3>

      {product.centers.map((id) => {
        const center = recyclingCenters.find((c) => c.id === id);
        return <RecyclingCard key={id} center={center} />;
      })}
    </div>
  );
}
