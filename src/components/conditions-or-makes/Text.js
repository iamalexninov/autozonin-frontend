const endpoints = {
  all: "/catalog/all",
  damaged: "/catalog/damaged",
  used: "/catalog/used",
  new: "/catalog/new",
  bmw: "/catalog/bmw",
  mercedes: "/catalog/mercedes",
  audi: "/catalog/audi",
  honda: "/catalog/honda",
  toyota: "/catalog/toyota",
};

export const conditions = [
  {
    path: endpoints.all,
    text: "All",
    clicked: true,
  },
  {
    path: endpoints.damaged,
    text: "Damaged",
    clicked: false,
  },
  {
    path: endpoints.used,
    text: "Used",
    clicked: false,
  },
  {
    path: endpoints.new,
    text: "New",
    clicked: false,
  },
];

export const makes = [
  {
    path: endpoints.bmw,
    text: "Bmw",
    clicked: true,
  },
  {
    path: endpoints.mercedes,
    text: "Mercedes",
    clicked: false,
  },
  {
    path: endpoints.audi,
    text: "Audi",
    clicked: false,
  },
  {
    path: endpoints.honda,
    text: "Honda",
    clicked: false,
  },
  {
    path: endpoints.toyota,
    text: "Toyota",
    clicked: false,
  },
];
