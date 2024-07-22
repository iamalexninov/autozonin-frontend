export function isDashboardPath(path) {
  const paths = [
    "/dashboard",
    "/dashboard/profile",
    "/dashboard/my-listings",
    "/dashboard/favorite-listings",
    "/dashboard/submit-listing",
    "/dashboard/change-password",
    "/dashboard/logout",
  ];

  return paths.includes(path);
}

export const carMakesAndModels = [
  {
    name: "Nissan",
    models: ["Altima", "Sentra", "Rogue", "Murano", "Frontier"],
  },
  {
    name: "Toyota",
    models: ["Camry", "Corolla", "RAV4", "Highlander", "Tacoma"],
  },
  {
    name: "Honda",
    models: ["Civic", "Accord", "CR-V", "Pilot", "Ridgeline"],
  },
  {
    name: "Ford",
    models: ["F-150", "Mustang", "Explorer", "Escape", "Edge"],
  },
  {
    name: "Chevrolet",
    models: ["Silverado", "Malibu", "Equinox", "Tahoe", "Colorado"],
  },
  {
    name: "BMW",
    models: ["3 Series", "5 Series", "X3", "X5", "X7"],
  },
  {
    name: "Mercedes-Benz",
    models: ["C-Class", "E-Class", "GLC", "GLE", "S-Class"],
  },
  {
    name: "Audi",
    models: ["A3", "A4", "A6", "Q5", "Q7"],
  },
  {
    name: "Tesla",
    models: ["Model S", "Model 3", "Model X", "Model Y", "Roadster"],
  },
  {
    name: "Volkswagen",
    models: ["Golf", "Passat", "Tiguan", "Atlas", "Jetta"],
  },
  {
    name: "Hyundai",
    models: ["Elantra", "Sonata", "Tucson", "Santa Fe", "Kona"],
  },
  {
    name: "Kia",
    models: ["Soul", "Optima", "Sorento", "Sportage", "Telluride"],
  },
  {
    name: "Mazda",
    models: ["Mazda3", "Mazda6", "CX-5", "CX-9", "MX-5 Miata"],
  },
  {
    name: "Subaru",
    models: ["Impreza", "Outback", "Forester", "Crosstrek", "Ascent"],
  },
  {
    name: "Volvo",
    models: ["S60", "S90", "XC40", "XC60", "XC90"],
  },
  {
    name: "Jaguar",
    models: ["XE", "XF", "F-PACE", "E-PACE", "F-TYPE"],
  },
  {
    name: "Lexus",
    models: ["IS", "ES", "NX", "RX", "GX"],
  },
  {
    name: "Acura",
    models: ["ILX", "TLX", "RDX", "MDX", "NSX"],
  },
  {
    name: "Infiniti",
    models: ["Q50", "Q60", "QX50", "QX60", "QX80"],
  },
  {
    name: "Porsche",
    models: ["911", "Cayman", "Boxster", "Cayenne", "Macan"],
  },
];
export const categories = ["Bus", "Car", "Truck", "Motorcycle"];
export const labels = ["Great Price", "Sale", "Low Mileage"];
export const conditions = ["New", "Used", "Damaged"];
export const types = [
  "Convertible",
  "Coupe",
  "Hatchback",
  "Sedan",
  "Station Wagon",
  "SUV",
  "Sedan",
  "Truck",
  "Van",
];
export const driveTypes = [
  "All-Wheel Drive",
  "Front-Wheel Drive",
  "Rear-Wheel Drive",
];
export const transmissions = ["Automatic", "Manual", "CVT", "DCT"];
export const fuelTypes = ["Diesel", "Gasoline", "LPG", "Hybrid", "Electric"];
export const cylinders = [12, 10, 8, 6, 4];
export const colors = [
  "Black",
  "White",
  "Silver",
  "Metallic",
  "Blue",
  "Red",
  "Gold",
];
export const doors = [2, 4, 6];
export const features = {
  interior: [
    "Advanced Infotainment System",
    "Ambient Lighting",
    "Digital Instrument Cluster",
    "Wireless Charging Pad",
    "Premium Upholstery and Materials",
  ],
  exterior: [
    "LED Headlights and Taillights",
    "Aerodynamic Design",
    "Panoramic Sunroof",
    "Alloy Wheels",
    "Power Liftgate",
  ],
  safety: [
    "Advanced Driver Assistance Systems (ADAS)",
    "360-Degree Camera System",
    "Automatic Emergency Braking",
    "Blind-Spot Monitoring",
    "Rear Cross-Traffic Alert",
  ],
  comfort: [
    "Heated and Ventilated Seats",
    "Dual-Zone Climate Control",
    "Noise-Canceling Technology",
    "Power-Adjustable Seats with Memory",
    "Adaptive Suspension System",
  ],
};
