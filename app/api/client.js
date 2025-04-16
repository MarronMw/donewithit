import { create } from "apisauce";

// const host = process.EXPO_PUBLIC_HOST_IP_ADDRESS;
// const port = process.EXPO_PUBLIC_HOST_PORT_NUMBER;

const apiClient = create({
  baseURL: `http://192.168.70.13:8000`,
});

export default apiClient;
