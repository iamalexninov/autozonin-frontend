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
  },
  {
    path: endpoints.damaged,
    text: "Damaged",
  },
  {
    path: endpoints.used,
    text: "Used",
  },
  {
    path: endpoints.new,
    text: "New",
  },
];

export const makes = [
  {
    path: endpoints.bmw,
    text: "Bmw",
  },
  {
    path: endpoints.mercedes,
    text: "Mercedes",
  },
  {
    path: endpoints.audi,
    text: "Audi",
  },
  {
    path: endpoints.honda,
    text: "Honda",
  },
];
