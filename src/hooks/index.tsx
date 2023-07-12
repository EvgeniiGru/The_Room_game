import {Dispatch, SetStateAction, useLayoutEffect, useState} from 'react';

export enum Theme {
    Light = 'light',
    Dark='dark',
}

type TUseTheme  = () => {theme: Theme, setTheme: (arg: Theme) => void}

export const useTheme: TUseTheme = () => {
    const [theme, setTheme] = useState<Theme>(Theme.Dark);

    useLayoutEffect(()=> {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return {theme ,setTheme};
}