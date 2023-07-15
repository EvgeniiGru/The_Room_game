import React, {createContext, useContext, useReducer} from 'react';
import {Theme} from "../type";
import {AuxPropsChildren} from "../../type";

enum SettingsOption {
    CHANGE_THEME = 'CHANGE_THEME',
}

type TChangeTheme = (arg:Theme ) => void;

interface ISettings {
    theme: Theme,
    changeTheme: TChangeTheme,
}

type InitialStateType = Omit<ISettings, 'changeTheme'>;

const initialState: InitialStateType = {
    theme: localStorage.getItem('data-theme') === 'dark' ? Theme.Dark: Theme.Light,
};

type typeActions = Partial<InitialStateType> & Record<'type', SettingsOption>

const reducer = (state: InitialStateType, action: typeActions): InitialStateType => {
    switch (action.type){
        case SettingsOption.CHANGE_THEME: {
            return {...state,
                theme: action.theme,
            }
        }
        default: return state
    }
}


const ThemeProvider = createContext<ISettings | null>(null);

export const useTheme = () => {
    return useContext(ThemeProvider);
}

export const ThemeProviderComponent = ({children}: AuxPropsChildren): JSX.Element => {

    const [state, dispatch] = useReducer(reducer, initialState, undefined);

    const changeTheme = (theme: Theme) =>
        dispatch({type: SettingsOption.CHANGE_THEME , theme });

    return (<ThemeProvider.Provider
        value={{
            changeTheme,
            theme: state.theme,
        }}>
        {children}
    </ThemeProvider.Provider>)
}


export default ThemeProviderComponent;
