import { api } from "./api";

const endpoints = {
  vehicles: "/vehicles/",
  create: "/vehicles/create",
};

const renderVehicles = async () => {
  const records = await api.get(endpoints.vehicles);
  return records;
};

const createVehicle = async (vehicleData) => {
  const record = await api.post(endpoints.create, vehicleData);
  return record;
};

export const vehicleApi = {
  renderVehicles,
  createVehicle,
};
