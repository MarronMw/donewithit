import apiClient from "./client";

const endpoint = "/api/listings";
const getListings = () => apiClient.get(endpoint);

export default {
  getListings,
};
