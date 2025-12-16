// data/products.js

export const products = [
  {
    id: 1,
    name: "Old Smartphone",
    category: "household",
    image: "/images/smartphone.jpg",
    recyclable: true,
    description:
      "A used smartphone containing valuable metals and recyclable plastic components. Should be processed by an authorized e‑waste recycler.",
    hazardLevel: 3,
    recyclingCenterId: 1,
    tags: ["mobile", "battery", "electronics", "consumer"],
  },
  {
    id: 2,
    name: "CRT Television",
    category: "household",
    image: "/images/crt-tv.jpg",
    recyclable: true,
    description:
      "Cathode-ray tube television with high lead content in the glass. Requires specialized handling due to hazardous materials.",
    hazardLevel: 5,
    recyclingCenterId: 2,
    tags: ["display", "glass", "lead", "legacy device"],
  },
  {
    id: 3,
    name: "Office Desktop Computer",
    category: "office",
    image: "/images/desktop-pc.jpg",
    recyclable: true,
    description:
      "Standard office desktop computer including CPU, RAM, and storage. Contains recoverable metals and electronic components.",
    hazardLevel: 3,
    recyclingCenterId: 1,
    tags: ["computer", "office", "IT asset"],
  },
  {
    id: 4,
    name: "Laser Printer Cartridge",
    category: "office",
    image: "/images/printer-cartridge.jpg",
    recyclable: true,
    description:
      "Used toner cartridge from laser printers. Typically recyclable through take‑back programs or specialized centres.",
    hazardLevel: 2,
    recyclingCenterId: 3,
    tags: ["printer", "plastic", "toner"],
  },
  {
    id: 5,
    name: "Industrial Control Panel",
    category: "industrial",
    image: "/images/control-panel.jpg",
    recyclable: true,
    description:
      "Industrial control panel with multiple circuit boards and wiring. Requires dismantling and safe material recovery.",
    hazardLevel: 4,
    recyclingCenterId: 2,
    tags: ["industrial", "pcb", "automation"],
  },
  {
    id: 6,
    name: "Damaged Power Adapter",
    category: "household",
    image: "/images/power-adapter.jpg",
    recyclable: true,
    description:
      "AC power adapter with damaged cable insulation. Should not be used and must be recycled with electronic waste.",
    hazardLevel: 2,
    recyclingCenterId: 1,
    tags: ["charger", "cable", "electronics"],
  },
  {
    id: 7,
    name: "Fluorescent Tube Light",
    category: "industrial",
    image: "/images/tube-light.jpg",
    recyclable: false,
    description:
      "Fluorescent tube containing mercury vapour. Requires hazardous waste treatment and should not be mixed with regular e‑waste.",
    hazardLevel: 5,
    recyclingCenterId: 3,
    tags: ["lighting", "mercury", "hazardous"],
  },
  {
    id: 8,
    name: "Broken Laptop Battery",
    category: "office",
    image: "/images/laptop-battery.jpg",
    recyclable: true,
    description:
      "Lithium‑ion laptop battery. Must be handled carefully to avoid leakage or fire risk and recycled through certified channels.",
    hazardLevel: 4,
    recyclingCenterId: 3,
    tags: ["battery", "lithium-ion", "power"],
  },
];
