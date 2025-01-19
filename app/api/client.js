import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.43.147:9000",
});

export default apiClient;
