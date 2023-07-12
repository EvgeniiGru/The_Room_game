import './App.scss'

import b_ from 'b_'
import React, {useEffect, useLayoutEffect, useState} from "react";
import Inventory from "./component/root/Inventory/index";
import DisplayComponent from "./component/root/GameSpace";
import Header from "./component/root/Header";
import InventoryProviderComponent from "./component/root/Inventory/reduser";
import TaskSheetProviderComponent from "./component/root/TaskSheet/reduser";
import NextLocation from "./component/root/NextLocation";
import {useLocation} from "./component/root/reducer";
import {useHistory} from 'react-router-dom'
import {pathSheriffRoom} from "./component/module/Firrst_day/Room_Sheriff/type";
import {useTheme} from "./hooks";

const b = b_.with('work-space');

const App = () => {
    const propsLocation = useLocation();
    const history = useHistory();
    const [isVisibleInventory, setVisibleInventory] = useState<boolean>(true);
    const [isVisibleMenu, setVisibleMenu] = useState<boolean>(true);
    const {theme, setTheme} = useTheme();

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

    return <div className={b()}>
        <TaskSheetProviderComponent>
            { isVisibleMenu && (<div className={b('header')}>
                <Header/>
            </div>)}
            <div className={b('body', {menu: !isVisibleMenu})}>
                    <InventoryProviderComponent>
                        {isVisibleInventory && (<Inventory/>)}
                        <NextLocation urlLocation={propsLocation.leftLocation} revers={true} disable={propsLocation.leftLocation === ''}/>
                        <DisplayComponent/>
                        <NextLocation urlLocation={propsLocation.rightLocation} disable={propsLocation.rightLocation === ''}/>
                    </InventoryProviderComponent>
            </div>
        </TaskSheetProviderComponent>
    </div>
}

export default App;
