import { AxiosInstance } from "axios";

export function Landingservice (axios: AxiosInstance) {
  let endpointSuffix: string = "landing"
  
  async function fetchData (): Promise<{ data: string }> {
    const response = await axios.get(endpointSuffix);
    return response.data;
  };

  return {
    fetchData
  }
}