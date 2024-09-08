import {createContext, useContext} from "react";

export interface ColorConfigProps {
   config: { colorPrimary: string }
}

export const ColorConfig =  createContext<ColorConfigProps>({config:{colorPrimary: 'red'}});
export const useColorConfig = () => useContext(ColorConfig);


