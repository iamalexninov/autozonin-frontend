const catalog = "/catalog";

const endpoints = {
  all: catalog + "/all",
  damaged: catalog + "/damaged",
  used: catalog + "/used",
  new: catalog + "/new",
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
