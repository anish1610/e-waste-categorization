// components/Logo.jsx

export default function Logo({ size = 42 }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="90" stroke="#4ADE80" strokeWidth="10" />
        <path
          d="M70 110 L100 60 L130 110 Z"
          fill="#4ADE80"
          opacity="0.85"
        />
        <circle cx="100" cy="130" r="22" fill="#60A5FA" opacity="0.9" />
      </svg>

      <span
        style={{
          fontSize: "1.35rem",
          fontWeight: 700,
          letterSpacing: "0.5px",
          color: "#E2E8F0",
        }}
      >
        E‑Waste Hub
      </span>
    </div>
  );
}
