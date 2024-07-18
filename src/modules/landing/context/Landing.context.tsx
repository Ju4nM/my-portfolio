import { createContext, ReactNode } from "react";
import { LandingContextInterface } from "../interfaces/LandingContext.interface";
import { Landingservice } from "../service/landing.service";
import { useAxios } from "../../core/App/hooks/useAxios.hook";

export const LandingContext = createContext<LandingContextInterface | {}>({});

export function LandingProvider ({ children }: { children: ReactNode }) {
  const { axios } = useAxios();
  const landingService = Landingservice(axios)

  return (
    <LandingContext.Provider value = { landingService }>
      { children }
    </LandingContext.Provider>
  );
}