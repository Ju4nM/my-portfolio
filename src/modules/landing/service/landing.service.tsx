import { AxiosInstance } from "axios";
import { LandingDataInterface } from "../interfaces/landingData.interface";

export function Landingservice (axios: AxiosInstance) {
  let endpointSuffix: string = "landing"
  
  async function fetchData (): Promise<LandingDataInterface> {
    const response = await axios.get<LandingDataInterface>(endpointSuffix);
    return response.data;
  };

  return {
    fetchData
  }
}