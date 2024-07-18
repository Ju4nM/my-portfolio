import { LandingProvider } from "../../landing/context/Landing.context";
import LandingPage from "../../landing/page/Landing.page";

export const routes = [
	{
		path: "/",
		element: <LandingProvider><LandingPage /></LandingProvider>,
	},
];
