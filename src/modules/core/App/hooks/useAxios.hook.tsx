import { useContext } from "react"
import { AppContext } from "../context/App.context"
import { AppContextInterface } from "../interfaces/appContext.interface";

export const useAxios = (): AppContextInterface => useContext(AppContext) as AppContextInterface;