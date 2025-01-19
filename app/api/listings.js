import apiClient from "./client";

const endpoint = "/";
const getListings = () => apiClient.get(endpoint);

export default {
  getListings,
};
