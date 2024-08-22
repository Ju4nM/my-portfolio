import { LandingDataInterface } from "./landingData.interface";

export interface LandingContextInterface {
  fetchData: () => Promise<{ data: string }>;
  landingData: LandingDataInterface;
}