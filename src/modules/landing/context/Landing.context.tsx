import { createContext, ReactNode, useEffect, useState } from "react";
import { useAxios } from "../../core/App/hooks/useAxios.hook";
import { LandingDataInterface } from "../interfaces/landingData.interface";
import { Landingservice } from "../service/landing.service";
import { LandingContextInterface } from "../interfaces/landingContext.interface";

export const LandingContext = createContext<LandingContextInterface | {}>({});

export function LandingProvider ({ children }: { children: ReactNode }) {
  const { axios } = useAxios();
  const [ landingData, setLandingData ] = useState<LandingDataInterface>();
  const landingService = Landingservice(axios)

  const loadData = async () => {
    landingService.fetchData().then(value => {
      setLandingData(value);
    });
  }

  useEffect (() => {
    loadData();
  }, []);

  return (
    <LandingContext.Provider value = {{ landingService, landingData }}>
      { children }
    </LandingContext.Provider>
  );
}