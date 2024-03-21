import './App.scss'

import b_ from 'b_'
import React from "react";
import Inventory from "./component/root/Inventory/index";
import DisplayComponent from "./component/root/GameSpace";
import Header from "./component/root/Header";
import InventoryProviderComponent from "./component/root/Inventory/reduser";
import TaskSheetProviderComponent from "./component/root/TaskSheet/reduser";
import {Button} from 'rooms';
import NextLocation from "./component/root/NextLocation";
import {useLocation} from "./component/root/NextLocation/reducer";
import Settings from "./component/root/Settings";
import {useApp} from "./hooks/App";

const b = b_.with('work-space');

const App = () => {
    const propsLocation = useLocation();
    const {
        isVisibleSettings,
        isVisibleInventory,
        isVisibleMenu,
        setVisibleSettings,
    } = useApp();

    return <div className={b()}>
        <TaskSheetProviderComponent>
            {isVisibleMenu && (<div className={b('header')}>
                <Header setVisibleSettings={setVisibleSettings} isVisibleSettings={isVisibleSettings} />
            </div>)}
            <div className={b('body', {menu: !isVisibleMenu})}>
                <InventoryProviderComponent>
                        {isVisibleInventory && (<Inventory/>)}
                        {isVisibleSettings && (<Settings setOpenedModal={setVisibleSettings}/>)}
                        <NextLocation
                            urlLocation={propsLocation.leftLocation}
                            revers={true}
                            disable={propsLocation.leftLocation === ''}/>
                        <DisplayComponent/>
                        <NextLocation urlLocation={propsLocation.rightLocation}
                                      disable={propsLocation.rightLocation === ''}/>
                    </InventoryProviderComponent>
            </div>
        </TaskSheetProviderComponent>
    </div>
}

export default App;
