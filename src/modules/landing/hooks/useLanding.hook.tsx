import { useContext } from "react";
import { LandingContext } from "../context/Landing.context";
import { LandingContextInterface } from "../interfaces/landingContext.interface";

export const useLanding = () => useContext(LandingContext) as LandingContextInterface;