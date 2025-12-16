export default function RecyclingCard({ center }) {
  return (
    <div className="border rounded p-2 mt-2 bg-gray-50">
      <p className="font-semibold">{center.name}</p>
      <p>📍 {center.location}</p>
      <p>📞 {center.contact}</p>
    </div>
  );
}
