import { api } from "./api";

const endpoints = {
  create: "/vehicle/create",
};

async function createVehicle(vehicleData) {
  const vehicle = await api.post(endpoints.create, vehicleData);
  return vehicle;
}

export const vehicleApi = {
  createVehicle,
};
