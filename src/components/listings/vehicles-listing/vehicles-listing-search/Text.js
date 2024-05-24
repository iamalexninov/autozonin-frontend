const conditions = [
  { value: "all", label: "All Conditions" },
  { value: "damaged", label: "Damaged" },
  { value: "used", label: "Used" },
  { value: "new", label: "New" },
];

const categories = [
  { value: "all", label: "All Categories" },
  { value: "car", label: "Car" },
  { value: "bus", label: "Bus" },
  { value: "truck", label: "Truck" },
  { value: "motorcycle", label: "Motorcycle" },
];

const types = [
  { value: "all", label: "All Types" },
  { value: "convertible", label: "Convertible" },
  { value: "coupe", label: "Coupe" },
  { value: "hatchback", label: "Hatchback" },
  { value: "sedan", label: "Sedan" },
  { value: "suv", label: "SUV" },
  { value: "station wagon", label: "Station Wagon" },
  { value: "electric", label: "Electric" },
  { value: "Hybrid", label: "Hybrid" },
];

// TODO: Use external API for info
const makes = [
  { value: "all", label: "All Makes" },
  { value: "audi", label: "Audi" },
  { value: "seat", label: "Seat" },
  { value: "skoda", label: "Skoda" },
  { value: "vw", label: "Volkswagen" },
  { value: "bmw", label: "BMW" },
  { value: "mini", label: "Mini" },
  { value: "rollsroyce", label: "Rolls-Royce" },
  { value: "mercedes", label: "Mercedes" },
  { value: "smart", label: "Smart" },
  { value: "renault", label: "Renault" },
  { value: "dacia", label: "Dacia" },
  { value: "ford", label: "Ford" },
  { value: "peugeot", label: "Peugeot" },
  { value: "citroen", label: "Citroen" },
  { value: "volvo", label: "Volvo" },
  { value: "jaguar", label: "Jaguar" },
  { value: "infiniti", label: "Infiniti" },
  { value: "nissan", label: "Nissan" },
  { value: "lexus", label: "Lexus" },
  { value: "honda", label: "Honda" },
  { value: "suziki", label: "suziki" },
  { value: "mazda", label: "Mazda" },
  { value: "Mitubishi", label: "Mitsubishi" },
  { value: "mitsubishi", label: "Mitsubishi" },
  { value: "subaru", label: "Subaru" },
];

export const options = {
  condition: conditions,
  category: categories,
  type: types,
  make: makes,
};
