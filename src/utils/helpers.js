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
    value: "toyota",
    models: [
      {
        label: "Camry",
        value: "camry",
        modifications: [
          { label: "LE", value: "le" },
          { label: "SE", value: "se" },
          { label: "XLE", value: "xle" },
          { label: "XSE", value: "xse" },
          { label: "TRD", value: "trd" },
        ],
      },
      {
        label: "Corolla",
        value: "corolla",
        modifications: [
          { label: "L", value: "l" },
          { label: "LE", value: "le" },
          { label: "SE", value: "se" },
          { label: "XLE", value: "xle" },
          { label: "XSE", value: "xse" },
        ],
      },
      {
        label: "RAV4",
        value: "rav4",
        modifications: [
          { label: "LE", value: "le" },
          { label: "XLE", value: "xle" },
          { label: "XLE Premium", value: "xle_premium" },
          { label: "Adventure", value: "adventure" },
          { label: "Limited", value: "limited" },
        ],
      },
      {
        label: "Prius",
        value: "prius",
        modifications: [
          { label: "L Eco", value: "l_eco" },
          { label: "LE", value: "le" },
          { label: "XLE", value: "xle" },
          { label: "Limited", value: "limited" },
          { label: "Prime", value: "prime" },
        ],
      },
      {
        label: "Highlander",
        value: "highlander",
        modifications: [
          { label: "L", value: "l" },
          { label: "LE", value: "le" },
          { label: "XLE", value: "xle" },
          { label: "Limited", value: "limited" },
          { label: "Platinum", value: "platinum" },
        ],
      },
    ],
  },
  {
    label: "Honda",
    value: "honda",
    models: [
      {
        label: "Accord",
        value: "accord",
        modifications: [
          { label: "LX", value: "lx" },
          { label: "Sport", value: "sport" },
          { label: "EX-L", value: "ex-l" },
          { label: "Touring", value: "touring" },
          { label: "Hybrid", value: "hybrid" },
        ],
      },
      {
        label: "Civic",
        value: "civic",
        modifications: [
          { label: "LX", value: "lx" },
          { label: "Sport", value: "sport" },
          { label: "EX", value: "ex" },
          { label: "EX-L", value: "ex-l" },
          { label: "Touring", value: "touring" },
        ],
      },
      {
        label: "CR-V",
        value: "cr-v",
        modifications: [
          { label: "LX", value: "lx" },
          { label: "EX", value: "ex" },
          { label: "EX-L", value: "ex-l" },
          { label: "Touring", value: "touring" },
          { label: "Hybrid", value: "hybrid" },
        ],
      },
      {
        label: "Pilot",
        value: "pilot",
        modifications: [
          { label: "LX", value: "lx" },
          { label: "EX", value: "ex" },
          { label: "EX-L", value: "ex-l" },
          { label: "Touring", value: "touring" },
          { label: "Elite", value: "elite" },
        ],
      },
      {
        label: "Odyssey",
        value: "odyssey",
        modifications: [
          { label: "LX", value: "lx" },
          { label: "EX", value: "ex" },
          { label: "EX-L", value: "ex-l" },
          { label: "Touring", value: "touring" },
          { label: "Elite", value: "elite" },
        ],
      },
    ],
  },
  {
    label: "Ford",
    value: "ford",
    models: [
      {
        label: "F-150",
        value: "f-150",
        modifications: [
          { label: "XL", value: "xl" },
          { label: "XLT", value: "xlt" },
          { label: "Lariat", value: "lariat" },
          { label: "King Ranch", value: "king_ranch" },
          { label: "Platinum", value: "platinum" },
        ],
      },
      {
        label: "Escape",
        value: "escape",
        modifications: [
          { label: "S", value: "s" },
          { label: "SE", value: "se" },
          { label: "SEL", value: "sel" },
          { label: "Titanium", value: "titanium" },
          { label: "Plug-In Hybrid", value: "plug_in_hybrid" },
        ],
      },
      {
        label: "Explorer",
        value: "explorer",
        modifications: [
          { label: "Base", value: "base" },
          { label: "XLT", value: "xlt" },
          { label: "Limited", value: "limited" },
          { label: "ST", value: "st" },
          { label: "Platinum", value: "platinum" },
        ],
      },
      {
        label: "Focus",
        value: "focus",
        modifications: [
          { label: "S", value: "s" },
          { label: "SE", value: "se" },
          { label: "SEL", value: "sel" },
          { label: "Titanium", value: "titanium" },
          { label: "ST", value: "st" },
        ],
      },
      {
        label: "Mustang",
        value: "mustang",
        modifications: [
          { label: "EcoBoost", value: "ecoboost" },
          { label: "GT", value: "gt" },
          { label: "Mach 1", value: "mach_1" },
          { label: "Bullitt", value: "bullitt" },
          { label: "Shelby GT500", value: "shelby_gt500" },
        ],
      },
    ],
  },
  {
    label: "Chevrolet",
    value: "chevrolet",
    models: [
      {
        label: "Silverado",
        value: "silverado",
        modifications: [
          { label: "WT", value: "wt" },
          { label: "LT", value: "lt" },
          { label: "RST", value: "rst" },
          { label: "LTZ", value: "ltz" },
          { label: "High Country", value: "high_country" },
        ],
      },
      {
        label: "Malibu",
        value: "malibu",
        modifications: [
          { label: "L", value: "l" },
          { label: "LS", value: "ls" },
          { label: "RS", value: "rs" },
          { label: "LT", value: "lt" },
          { label: "Premier", value: "premier" },
        ],
      },
      {
        label: "Equinox",
        value: "equinox",
        modifications: [
          { label: "L", value: "l" },
          { label: "LS", value: "ls" },
          { label: "LT", value: "lt" },
          { label: "Premier", value: "premier" },
          { label: "RS", value: "rs" },
        ],
      },
      {
        label: "Tahoe",
        value: "tahoe",
        modifications: [
          { label: "LS", value: "ls" },
          { label: "LT", value: "lt" },
          { label: "RST", value: "rst" },
          { label: "Z71", value: "z71" },
          { label: "High Country", value: "high_country" },
        ],
      },
      {
        label: "Camaro",
        value: "camaro",
        modifications: [
          { label: "LS", value: "ls" },
          { label: "LT", value: "lt" },
          { label: "SS", value: "ss" },
          { label: "ZL1", value: "zl1" },
          { label: "RS", value: "rs" },
        ],
      },
    ],
  },
  {
    label: "Nissan",
    value: "nissan",
    models: [
      {
        label: "Altima",
        value: "altima",
        modifications: [
          { label: "S", value: "s" },
          { label: "SV", value: "sv" },
          { label: "SR", value: "sr" },
          { label: "SL", value: "sl" },
          { label: "Platinum", value: "platinum" },
        ],
      },
      {
        label: "Sentra",
        value: "sentra",
        modifications: [
          { label: "S", value: "s" },
          { label: "SV", value: "sv" },
          { label: "SR", value: "sr" },
          { label: "SL", value: "sl" },
          { label: "NISMO", value: "nismo" },
        ],
      },
      {
        label: "Rogue",
        value: "rogue",
        modifications: [
          { label: "S", value: "s" },
          { label: "SV", value: "sv" },
          { label: "SL", value: "sl" },
          { label: "Platinum", value: "platinum" },
          { label: "Midnight Edition", value: "midnight_edition" },
        ],
      },
      {
        label: "Murano",
        value: "murano",
        modifications: [
          { label: "S", value: "s" },
          { label: "SV", value: "sv" },
          { label: "SL", value: "sl" },
          { label: "Platinum", value: "platinum" },
          { label: "Midnight Edition", value: "midnight_edition" },
        ],
      },
      {
        label: "Frontier",
        value: "frontier",
        modifications: [
          { label: "S", value: "s" },
          { label: "SV", value: "sv" },
          { label: "Pro-4X", value: "pro_4x" },
          { label: "Desert Runner", value: "desert_runner" },
          { label: "Midnight Edition", value: "midnight_edition" },
        ],
      },
    ],
  },
];


export const carConditions = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "New",
    value: "new",
  },
  {
    label: "Used",
    value: "used",
  },
  {
    label: "Damaged",
    value: "damaged",
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
  { label: "Automatic", value: "automatic" },
  { label: "Manual", value: "manual" },
  { label: "CVT", value: "cvt" },
  { label: "DCT", value: "dct" },
  { label: "AWT", value: "awt" },
];

export const colors = [
  { label: "Black", value: "black" },
  { label: "White", value: "white" },
  { label: "Silver", value: "silver" },
  { label: "Gray", value: "gray" },
  { label: "Blue", value: "blue" },
  { label: "Red", value: "red" },
  { label: "Metallic", value: "metallic" },
];

export const fuels = [
  { label: "Gasoline", value: "gasoline" },
  { label: "Diesel", value: "diesel" },
  { label: "LPG", value: "lpg" },
  { label: "Electric", value: "electric" },
  { label: "Hybrid", value: "hybrid" },
];
