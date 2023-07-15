import React, {useLayoutEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {useTheme} from "../../component/root/Settings/reduser";
import {pathSheriffRoom} from "../../component/module/Firrst_day/Room_Sheriff/type";

export const useApp = () => {
    const history = useHistory();
    const [isVisibleInventory, setVisibleInventory] = useState<boolean>(true);
    const [isVisibleMenu, setVisibleMenu] = useState<boolean>(true);
    const [isVisibleSettings, setVisibleSettings] = useState<boolean>(false)
    const {theme} = useTheme();

    useLayoutEffect(() => {
        history.push(pathSheriffRoom.Kitchen())
        document.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key.toLowerCase() === 'i') {
                setVisibleInventory(prevState => !prevState);
            }
            if (event.key.toLowerCase() === 'm') {
                setVisibleMenu(prevState => !prevState);
            }
        });
    }, [])

    useLayoutEffect(()=> {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('data-theme', theme);
    }, [theme]);

    return {
        isVisibleMenu,
        isVisibleInventory,
        isVisibleSettings,
        setVisibleInventory,
        setVisibleMenu,
        setVisibleSettings,
    }
}