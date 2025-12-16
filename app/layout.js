// app/layout.js
import "./globals.css";

export const metadata = {
  title: "E-Waste Product Categorization",
  description:
    "A modern e-waste categorization platform with product filtering and nearby recycling locations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-root">
          <header className="app-header">
            <div className="container header-inner">
              <div>
                <h1 className="app-title">E-Waste Product Categorization</h1>
                <p className="app-subtitle">
                  Explore e-waste items, check recyclability, and find responsible recycling centres.
                </p>
              </div>
              <div className="header-badge">
                <span className="badge-pill">Final Year Project</span>
                <span className="badge-pill badge-pill-secondary">Sustainable Tech</span>
              </div>
            </div>
          </header>
          <main className="container main-content">{children}</main>
          <footer className="app-footer">
            <div className="container footer-inner">
              <p className="footer-text">
                Built with Next.js • Promoting responsible e‑waste management.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
