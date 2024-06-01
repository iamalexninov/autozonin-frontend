export const endpoints = {
  home: "/",
  about: "/about",
  vehicles: "/catalogue",
  blog: "/articles",
  contact: "/contact",
  login: "/login",
  register: "/register",
  dashboard: "/dashboard",
  dashboardSubmit: "/dashboard/submit-listing",
};

export function isDashboardPath(path) {
  const dashboardPaths = [endpoints.dashboard, endpoints.dashboardSubmit];

  return dashboardPaths.includes(path);
}