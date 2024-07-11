export function isDashboardPath(path) {
  const paths = [
    "/dashboard",
    "/dashboard/profile",
    "/dashboard/my-listings",
    "/dashboard/favorite-listings",
    "/dashboard/submit-listing",
    "/dashboard/change-password",
  ];

  return paths.includes(path);
}

export function renderVehicleFeatures() {
  const featuresmockdata = {
    interior: [
      "Leather Seats",
      "Heated Seats",
      "Ventilated Seats",
      "Power Seats",
      "Sunroof",
      "Ambient Lighting",
      "Premium Sound System",
      "Touchscreen Display",
      "Navigation System",
      "Rear Seat Entertainment",
      "Wireless Charging",
      "Smartphone Integration",
      "Memory Seats",
      "Heated Steering Wheel",
      "Panoramic Roof",
    ],
    exterior: [
      "Alloy Wheels",
      "Panoramic Roof",
      "Fog Lights",
      "LEDHeadlights",
      "Power Tailgate",
      "Roof Rails",
      "Chrome Accents",
      "Rear Spoiler",
      "Power Folding Mirrors",
      "Rain-Sensing Wipers",
      "Headlight Washers",
      "Automatic High Beams",
      "Daytime Running Lights",
      "Adaptive Headlights",
      "Power Sliding Doors",
    ],
    comfort: [
      "Dual Zone AC",
      "Rear AC Vents",
      "Heated Steering Wheel",
      "Keyless Entry",
      "Push Button Start",
      "Adaptive Cruise Control",
      "Power Adjustable Steering Wheel",
      "Memory Mirrors",
      "Remote Engine Start",
      "Massage Seats",
      "Ambient Interior Lighting",
      "Sunshades",
      "Automatic Climate Control",
      "Powered Liftgate",
      "Air Quality System",
    ],
    safety: [
      "Adaptive Cruise Control",
      "Lane Departure Warning",
      "Blind Spot Monitoring",
      "Parking Assist",
      "Surround View Camera",
      "Forward Collision Warning",
      "Automatic Emergency Braking",
      "Pedestrian Detection",
      "Rear Cross Traffic Alert",
      "Lane Keep Assist",
      "Traffic Sign Recognition",
      "Driver Attention Monitoring",
      "Night Vision",
      "Tire Pressure Monitoring",
      "Anti-Theft System",
    ],
  };

  return featuresmockdata;
}
