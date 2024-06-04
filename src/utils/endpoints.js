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
  dashboardChangePass: "/dashboard/change-password",
  dashboardProfile: "/dashboard/profile",
};

export function isDashboardPath(path) {
  const dashboardPaths = [
    endpoints.dashboard,
    endpoints.dashboardSubmit,
    endpoints.dashboardChangePass,
    endpoints.dashboardProfile,
  ];

  return dashboardPaths.includes(path);
}
