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

  return featuresmockdata;
}
