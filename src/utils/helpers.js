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

export const carsFeatures = {
  interior: [
    {
      label: "Leather Seats",
      name: "leatherSeats",
    },
    {
      label: "Heated Seats",
      name: "heatedSeats",
    },
    {
      label: "Ventilated Seats",
      name: "ventilatedSeats",
    },
    {
      label: "Power Seats",
      name: "powerSeats",
    },
    {
      label: "Sunroof",
      name: "sunroof",
    },
    {
      label: "Ambient Lighting",
      name: "ambientLighting",
    },
    {
      label: "Premium Sound System",
      name: "premiumSoundSystem",
    },
    {
      label: "Touchscreen Display",
      name: "touchscreenDisplay",
    },
    {
      label: "Navigation System",
      name: "navigationSystem",
    },
    {
      label: "Rear Seat Entertainment",
      name: "rearSeatEntertainment",
    },
    {
      label: "Wireless Charging",
      name: "wirelessCharging",
    },
    {
      label: "Smartphone Integration",
      name: "smartphoneIntegration",
    },
    {
      label: "Memory Seats",
      name: "memorySeats",
    },
    {
      label: "Heated Steering Wheel",
      name: "heatedSteeringWheel",
    },
    {
      label: "Panoramic Roof",
      name: "panoramicRoof",
    },
  ],
  exterior: [
    { label: "Alloy Wheels", name: "alloyWheels" },
    { label: "Panoramic Roof", name: "panoramicRoof" },
    { label: "Fog Lights", name: "fogLights" },
    { label: "LEDHeadlights", name: "ledHeadlights" },
    { label: "Power Tailgate", name: "powerTailgate" },
    { label: "Roof Rails", name: "roofRails" },
    { label: "Chrome Accents", name: "chromeAccents" },
    { label: "Rear Spoiler", name: "rearSpoiler" },
    { label: "Power Folding Mirrors", name: "powerFoldingMirrors" },
    { label: "Rain-Sensing Wipers", name: "rainSensingWipers" },
    { label: "Headlight Washers", name: "headlightWashers" },
    { label: "Automatic High Beams", name: "automaticHighBeams" },
    { label: "Daytime Running Lights", name: "daytimeRunningLights" },
    { label: "Adaptive Headlights", name: "adaptiveHeadlights" },
    { label: "Power Sliding Doors", name: "powerSlidingDoors" },
  ],
  comfort: [
    { label: "Dual Zone AC", name: "dualZoneAC" },
    { label: "Rear AC Vents", name: "rearACVents" },
    { label: "Heated Steering Wheel", name: "heatedSteeringWheel" },
    { label: "Keyless Entry", name: "keylessEntry" },
    { label: "Push Button Start", name: "pushButtonStart" },
    { label: "Adaptive Cruise Control", name: "adaptiveCruiseControl" },
    {
      label: "Power Adjustable Steering Wheel",
      name: "powerAdjustableSteeringWheel",
    },
    { label: "Memory Mirrors", name: "memoryMirrors" },
    { label: "Remote Engine Start", name: "remoteEngineStart" },
    { label: "Massage Seats", name: "massageSeats" },
    { label: "Ambient Interior Lighting", name: "ambientInteriorLighting" },
    { label: "Sunshades", name: "sunshades" },
    { label: "Automatic Climate Control", name: "automaticClimateControl" },
    { label: "Powered Liftgate", name: "poweredLiftgate" },
    { label: "Air Quality System", name: "airQualitySystem" },
  ],
  safety: [
    { label: "Adaptive Cruise Control", name: "adaptiveCruiseControl" },
    { label: "Lane Departure Warning", name: "laneDepartureWarning" },
    { label: "Blind Spot Monitoring", name: "blindSpotMonitoring" },
    { label: "Parking Assist", name: "parkingAssist" },
    { label: "Surround View Camera", name: "surroundViewCamera" },
    { label: "Forward Collision Warning", name: "forwardCollisionWarning" },
    {
      label: "Automatic Emergency Braking",
      name: "automaticEmergencyBraking",
    },
    { label: "Pedestrian Detection", name: "pedestrianDetection" },
    { label: "Rear Cross Traffic Alert", name: "rearCrossTrafficAlert" },
    { label: "Lane Keep Assist", name: "laneKeepAssist" },
    { label: "Traffic Sign Recognition", name: "trafficSignRecognition" },
    {
      label: "Driver Attention Monitoring",
      name: "driverAttentionMonitoring",
    },
    { label: "Night Vision", name: "nightVision" },
    { label: "Tire Pressure Monitoring", name: "tirePressureMonitoring" },
    { label: "Anti-Theft System", name: "antiTheftSystem" },
  ],
};

export const carModels = [
  {
    make: "Toyota",
    models: [
      { name: "Camry", modifications: ["LE", "SE", "XLE", "XSE", "TRD"] },
      { name: "Corolla", modifications: ["L", "LE", "SE", "XLE", "XSE"] },
      {
        name: "RAV4",
        modifications: ["LE", "XLE", "XLE Premium", "Adventure", "Limited"],
      },
      {
        name: "Prius",
        modifications: ["L Eco", "LE", "XLE", "Limited", "Prime"],
      },
      {
        name: "Highlander",
        modifications: ["L", "LE", "XLE", "Limited", "Platinum"],
      },
    ],
  },
  {
    make: "Honda",
    models: [
      {
        name: "Accord",
        modifications: ["LX", "Sport", "EX-L", "Touring", "Hybrid"],
      },
      {
        name: "Civic",
        modifications: ["LX", "Sport", "EX", "EX-L", "Touring"],
      },
      {
        name: "CR-V",
        modifications: ["LX", "EX", "EX-L", "Touring", "Hybrid"],
      },
      {
        name: "Pilot",
        modifications: ["LX", "EX", "EX-L", "Touring", "Elite"],
      },
      {
        name: "Odyssey",
        modifications: ["LX", "EX", "EX-L", "Touring", "Elite"],
      },
    ],
  },
  {
    make: "Ford",
    models: [
      {
        name: "F-150",
        modifications: ["XL", "XLT", "Lariat", "King Ranch", "Platinum"],
      },
      {
        name: "Escape",
        modifications: ["S", "SE", "SEL", "Titanium", "Plug-In Hybrid"],
      },
      {
        name: "Explorer",
        modifications: ["Base", "XLT", "Limited", "ST", "Platinum"],
      },
      { name: "Focus", modifications: ["S", "SE", "SEL", "Titanium", "ST"] },
      {
        name: "Mustang",
        modifications: ["EcoBoost", "GT", "Mach 1", "Bullitt", "Shelby GT500"],
      },
    ],
  },
  {
    make: "Chevrolet",
    models: [
      {
        name: "Silverado",
        modifications: ["WT", "LT", "RST", "LTZ", "High Country"],
      },
      { name: "Malibu", modifications: ["L", "LS", "RS", "LT", "Premier"] },
      { name: "Equinox", modifications: ["L", "LS", "LT", "Premier", "RS"] },
      {
        name: "Tahoe",
        modifications: ["LS", "LT", "RST", "Z71", "High Country"],
      },
      { name: "Camaro", modifications: ["LS", "LT", "SS", "ZL1", "RS"] },
    ],
  },
  {
    make: "Nissan",
    models: [
      { name: "Altima", modifications: ["S", "SV", "SR", "SL", "Platinum"] },
      { name: "Rogue", modifications: ["S", "SV", "SL", "Platinum", "Sport"] },
      { name: "Sentra", modifications: ["S", "SV", "SR", "SR Turbo", "NISMO"] },
      {
        name: "Pathfinder",
        modifications: ["S", "SV", "SL", "Platinum", "Rock Creek"],
      },
      {
        name: "Frontier",
        modifications: [
          "S",
          "SV",
          "Pro-4X",
          "Desert Runner",
          "Midnight Edition",
        ],
      },
    ],
  },
  {
    make: "Hyundai",
    models: [
      {
        name: "Sonata",
        modifications: ["SE", "SEL", "SEL Plus", "Limited", "N Line"],
      },
      {
        name: "Elantra",
        modifications: ["SE", "SEL", "Value Edition", "Limited", "Sport"],
      },
      {
        name: "Santa Fe",
        modifications: ["SE", "SEL", "SEL Plus", "Limited", "Ultimate"],
      },
      {
        name: "Tucson",
        modifications: ["SE", "SEL", "Sport", "Limited", "Ultimate"],
      },
      {
        name: "Kona",
        modifications: ["SE", "SEL", "SEL Plus", "Limited", "Ultimate"],
      },
    ],
  },
  {
    make: "BMW",
    models: [
      {
        name: "3 Series",
        modifications: ["320i", "330i", "340i", "M340i", "330e"],
      },
      {
        name: "5 Series",
        modifications: ["530i", "540i", "550i", "M550i", "530e"],
      },
      {
        name: "X3",
        modifications: [
          "sDrive30i",
          "xDrive30i",
          "M40i",
          "xDrive30e",
          "xDrive28i",
        ],
      },
      {
        name: "X5",
        modifications: [
          "sDrive40i",
          "xDrive40i",
          "xDrive50i",
          "M50i",
          "xDrive45e",
        ],
      },
      {
        name: "7 Series",
        modifications: ["740i", "750i", "745e", "760i", "ALPINA B7"],
      },
    ],
  },
  {
    make: "Mercedes-Benz",
    models: [
      {
        name: "C-Class",
        modifications: [
          "C300",
          "C300 4MATIC",
          "AMG C43",
          "AMG C63",
          "AMG C63 S",
        ],
      },
      {
        name: "E-Class",
        modifications: ["E350", "E450", "E450 4MATIC", "AMG E53", "AMG E63"],
      },
      {
        name: "GLC",
        modifications: [
          "GLC300",
          "GLC300 4MATIC",
          "AMG GLC43",
          "AMG GLC63",
          "GLC350e",
        ],
      },
      {
        name: "GLE",
        modifications: ["GLE350", "GLE450", "GLE580", "AMG GLE53", "AMG GLE63"],
      },
      {
        name: "S-Class",
        modifications: [
          "S500",
          "S580",
          "Maybach S580",
          "Maybach S680",
          "AMG S63",
        ],
      },
    ],
  },
  {
    make: "Audi",
    models: [
      {
        name: "A4",
        modifications: ["Premium", "Premium Plus", "Prestige", "S4", "RS4"],
      },
      {
        name: "A6",
        modifications: ["Premium", "Premium Plus", "Prestige", "S6", "RS6"],
      },
      {
        name: "Q5",
        modifications: [
          "Premium",
          "Premium Plus",
          "Prestige",
          "SQ5",
          "Q5 TFSI e",
        ],
      },
      {
        name: "Q7",
        modifications: [
          "Premium",
          "Premium Plus",
          "Prestige",
          "SQ7",
          "Q7 TFSI e",
        ],
      },
      {
        name: "A3",
        modifications: ["Premium", "Premium Plus", "Prestige", "S3", "RS3"],
      },
    ],
  },
  {
    make: "Kia",
    models: [
      { name: "Optima", modifications: ["LX", "S", "EX", "SX", "Hybrid"] },
      { name: "Forte", modifications: ["FE", "LXS", "GT-Line", "EX", "GT"] },
      {
        name: "Sportage",
        modifications: ["LX", "S", "EX", "SX Turbo", "Nightfall Edition"],
      },
      {
        name: "Sorento",
        modifications: ["LX", "S", "EX", "SX", "SX Prestige"],
      },
      { name: "Soul", modifications: ["LX", "S", "EX", "GT-Line", "Turbo"] },
    ],
  },
  {
    make: "Subaru",
    models: [
      {
        name: "Outback",
        modifications: [
          "Base",
          "Premium",
          "Limited",
          "Touring",
          "Onyx Edition XT",
        ],
      },
      {
        name: "Forester",
        modifications: ["Base", "Premium", "Sport", "Limited", "Touring"],
      },
      {
        name: "Impreza",
        modifications: ["Base", "Premium", "Sport", "Limited", "STI"],
      },
      {
        name: "Legacy",
        modifications: ["Base", "Premium", "Sport", "Limited", "Touring XT"],
      },
      {
        name: "Crosstrek",
        modifications: ["Base", "Premium", "Sport", "Limited", "Hybrid"],
      },
    ],
  },
  {
    make: "Mazda",
    models: [
      {
        name: "Mazda3",
        modifications: ["Base", "Select", "Preferred", "Premium", "Turbo"],
      },
      {
        name: "CX-5",
        modifications: [
          "Sport",
          "Touring",
          "Grand Touring",
          "Signature",
          "Carbon Edition",
        ],
      },
      {
        name: "CX-9",
        modifications: [
          "Sport",
          "Touring",
          "Grand Touring",
          "Signature",
          "Carbon Edition",
        ],
      },
      {
        name: "MX-5 Miata",
        modifications: [
          "Sport",
          "Club",
          "Grand Touring",
          "RF Club",
          "RF Grand Touring",
        ],
      },
      {
        name: "CX-30",
        modifications: ["Base", "Select", "Preferred", "Premium", "Turbo"],
      },
    ],
  },
  {
    make: "Volkswagen",
    models: [
      { name: "Golf", modifications: ["S", "SE", "SEL", "GTI", "R"] },
      { name: "Jetta", modifications: ["S", "SE", "R-Line", "SEL", "GLI"] },
      { name: "Passat", modifications: ["S", "SE", "R-Line", "SEL", "GT"] },
      {
        name: "Tiguan",
        modifications: ["S", "SE", "SE R-Line", "SEL", "SEL Premium R-Line"],
      },
      {
        name: "Atlas",
        modifications: ["S", "SE", "SEL", "SEL R-Line", "SEL Premium"],
      },
    ],
  },
  {
    make: "Tesla",
    models: [
      { name: "Model S", modifications: ["Long Range", "Plaid", "Plaid+"] },
      {
        name: "Model 3",
        modifications: ["Standard Range Plus", "Long Range", "Performance"],
      },
      { name: "Model X", modifications: ["Long Range", "Plaid"] },
      { name: "Model Y", modifications: ["Long Range", "Performance"] },
      {
        name: "Cybertruck",
        modifications: ["Single Motor", "Dual Motor", "Tri Motor"],
      },
    ],
  },
  {
    make: "Porsche",
    models: [
      {
        name: "911",
        modifications: ["Carrera", "Carrera S", "Turbo", "Turbo S", "GT3"],
      },
      {
        name: "Cayenne",
        modifications: ["Base", "S", "GTS", "Turbo", "Turbo S E-Hybrid"],
      },
      { name: "Macan", modifications: ["Base", "S", "GTS", "Turbo", "T"] },
      {
        name: "Panamera",
        modifications: ["Base", "4S", "GTS", "Turbo S", "Turbo S E-Hybrid"],
      },
      {
        name: "Taycan",
        modifications: ["Base", "4S", "Turbo", "Turbo S", "Cross Turismo"],
      },
    ],
  },
  {
    make: "Lexus",
    models: [
      {
        name: "ES",
        modifications: [
          "ES 250",
          "ES 350",
          "ES 300h",
          "ES 250 F Sport",
          "ES 350 F Sport",
        ],
      },
      {
        name: "RX",
        modifications: [
          "RX 350",
          "RX 450h",
          "RX 350L",
          "RX 450hL",
          "RX 350 F Sport",
        ],
      },
      {
        name: "NX",
        modifications: ["NX 250", "NX 350", "NX 350h", "NX 450h+", "NX 300"],
      },
      {
        name: "IS",
        modifications: [
          "IS 300",
          "IS 350",
          "IS 500",
          "IS 300 F Sport",
          "IS 350 F Sport",
        ],
      },
      {
        name: "GX",
        modifications: [
          "GX 460",
          "GX 460 Premium",
          "GX 460 Luxury",
          "GX 460 Black Line",
          "GX 460 Off-Road",
        ],
      },
    ],
  },
  {
    make: "Jaguar",
    models: [
      { name: "XE", modifications: ["Base", "S", "SE", "HSE", "R-Dynamic"] },
      { name: "XF", modifications: ["Base", "S", "SE", "HSE", "R-Dynamic"] },
      { name: "F-PACE", modifications: ["Base", "S", "SE", "HSE", "SVR"] },
      {
        name: "E-PACE",
        modifications: ["Base", "S", "SE", "HSE", "R-Dynamic"],
      },
      {
        name: "F-TYPE",
        modifications: ["Base", "S", "R", "SVR", "First Edition"],
      },
    ],
  },
  {
    make: "Land Rover",
    models: [
      {
        name: "Range Rover",
        modifications: [
          "Base",
          "HSE",
          "Autobiography",
          "SVAutobiography",
          "SVAutobiography Dynamic",
        ],
      },
      {
        name: "Discovery",
        modifications: ["Base", "S", "SE", "HSE", "HSE Luxury"],
      },
      { name: "Defender", modifications: ["Base", "S", "SE", "HSE", "X"] },
      {
        name: "Range Rover Sport",
        modifications: ["Base", "HSE", "Autobiography", "SVR", "HST"],
      },
      {
        name: "Range Rover Velar",
        modifications: ["Base", "S", "SE", "HSE", "R-Dynamic"],
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
