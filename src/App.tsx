import './App.scss'

import b_ from 'b_'
import React from "react";
import Inventory from "./component/root/Inventory/index";
import DisplayComponent from "./component/root/GameSpace";
import Header from "./component/root/Header";
import InventoryProviderComponent from "./component/root/Inventory/reduser";
import TaskSheetProviderComponent from "./component/root/TaskSheet/reduser";
import NextLocation from "./component/root/NextLocation";



const b = b_.with('work-space');

const App = () => {
    return <div className={b()}>
        <TaskSheetProviderComponent>
           <div className={b('header')}>
               <Header/>
           </div>
            <div className={b('body')}>
                    <InventoryProviderComponent>
                        <Inventory/>
                        <NextLocation urlLocation={''} revers={true}/>
                        <DisplayComponent/>
                        <NextLocation urlLocation={''}/>
                    </InventoryProviderComponent>
            </div>
        </TaskSheetProviderComponent>
    </div>
}

export default App;
