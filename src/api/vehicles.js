import { api } from "./api";

const endpoints = {
  vehicles: "/vehicles",
  vehicle: "/vehicles/",
  create: "/vehicles/create",
};

const renderVehicle = async (id) => {
  const record = await api.get(endpoints.vehicle + id);
  return record;
};

const renderVehicles = async (params) => {
  const query = new URLSearchParams(params).toString();

  let result;

  query
    ? (result = await api.get(`${endpoints.vehicles}?${query}`))
    : (result = await api.get(endpoints.vehicles));

  return result;
};

const createVehicle = async (vehicleData) => {
  const record = await api.post(endpoints.create, vehicleData);
  return record;
};

export const vehicleApi = {
  renderVehicle,
  renderVehicles,
  createVehicle,
};
