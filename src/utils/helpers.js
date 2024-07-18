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

export const carModels = [
  {
    label: "Toyota",
    value: "Toyota",
    models: [
      {
        label: "Camry",
        value: "Camry",
      },
      {
        label: "Corolla",
        value: "Corolla",
      },
      {
        label: "RAV4",
        value: "RAV4",
      },
      {
        label: "Prius",
        value: "Prius",
      },
      {
        label: "Highlander",
        value: "Highlander",
      },
    ],
  },
  {
    label: "Honda",
    value: "Honda",
    models: [
      {
        label: "Accord",
        value: "Accord",
      },
      {
        label: "Civic",
        value: "Civic",
      },
      {
        label: "CR-V",
        value: "CR-V",
      },
      {
        label: "Pilot",
        value: "Pilot",
      },
      {
        label: "Odyssey",
        value: "Odyssey",
      },
    ],
  },
  {
    label: "Ford",
    value: "Ford",
    models: [
      {
        label: "F-150",
        value: "F-150",
      },
      {
        label: "Escape",
        value: "Escape",
      },
      {
        label: "Explorer",
        value: "Explorer",
      },
      {
        label: "Focus",
        value: "Focus",
      },
      {
        label: "Mustang",
        value: "Mustang",
      },
    ],
  },
  {
    label: "Chevrolet",
    value: "chevrolet",
    models: [
      {
        label: "Silverado",
        value: "Silverado",
      },
      {
        label: "Malibu",
        value: "Malibu",
      },
      {
        label: "Equinox",
        value: "Equinox",
      },
      {
        label: "Tahoe",
        value: "Тahoe",
      },
      {
        label: "Camaro",
        value: "Camaro",
      },
    ],
  },
  {
    label: "Nissan",
    value: "Nissan",
    models: [
      {
        label: "Altima",
        value: "Altima",
      },
      {
        label: "Sentra",
        value: "Sentra",
      },
      {
        label: "Rogue",
        value: "Rogue",
      },
      {
        label: "Murano",
        value: "Murano",
      },
      {
        label: "Frontier",
        value: "Frontier",
      },
    ],
  },
];

export const carConditions = [
  {
    label: "All",
    value: "All",
  },
  {
    label: "New",
    value: "New",
  },
  {
    label: "Used",
    value: "Used",
  },
  {
    label: "Damaged",
    value: "Damaged",
  },
];

export const carPopularMakes = [
  {
    label: "Mercedes",
    value: "mercedes",
  },
  {
    label: "BMW",
    value: "bmw",
  },
  {
    label: "Audi",
    value: "audi",
  },
  {
    label: "Honda",
    value: "honda",
  },
];

export const labels = [
  { label: "Great Price", value: "greatPrice" },
  { label: "Low Mileage", value: "lowMileage" },
  { label: "One Owner", value: "oneOwner" },
  { label: "Certified Pre Owner", value: "certifiedPreOwner" },
  { label: "Excellent Condition", value: "excellentCondition" },
  { label: "Fuel Efficient", value: "fuelEfficient" },
];

export const types = [
  { label: "Sedan", value: "sedan" },
  { label: "Suv", value: "suv" },
  { label: "Truck", value: "truck" },
  { label: "Coupe", value: "coupe" },
  { label: "Convertible", value: "convertible" },
  { label: "Hatchback", value: "hatchback" },
  { label: "Minivan", value: "minivan" },
  { label: "Station Wagon", value: "stationWagon" },
  { label: "Crossover", value: "crossover" },
  { label: "Hybrid", value: "hybrid" },
];

export const transmissions = [
  { label: "Automatic", value: "Automatic" },
  { label: "Manual", value: "Manual" },
  { label: "CVT", value: "CVT" },
  { label: "DCT", value: "DCT" },
  { label: "AWT", value: "AWT" },
];

export const colors = [
  { label: "Black", value: "Black" },
  { label: "White", value: "White" },
  { label: "Silver", value: "Silver" },
  { label: "Gray", value: "Gray" },
  { label: "Blue", value: "Blue" },
  { label: "Red", value: "Red" },
  { label: "Metallic", value: "Metallic" },
];

export const fuels = [
  { label: "Gasoline", value: "Gasoline" },
  { label: "Diesel", value: "Diesel" },
  { label: "LPG", value: "LPG" },
  { label: "Electric", value: "Electric" },
  { label: "Hybrid", value: "Hybrid" },
];
