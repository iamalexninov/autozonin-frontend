import { api } from "./api";

const endpoints = {
  vehicles: "/vehicles/",
  vehicle: "/vehicles/:id",
  create: "/vehicles/create",
};

const renderVehicle = async () => {
  // const entry = await api.get
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
