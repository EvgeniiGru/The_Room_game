import './App.scss'

import b_ from 'b_'
import React from "react";
import Inventory from "./component/root/Inventory/index";
import DisplayComponent from "./component/root/GameSpace";
import Header from "./component/root/Header";
import InventoryProviderComponent from "./component/root/Inventory/reduser";


const b = b_.with('work-space');

const App = () => {
    return <div className={b()}>
       <div className={b('header')}>
           <Header/>
       </div>
        <div className={b('body')}>
            <InventoryProviderComponent>
                <Inventory/>
                <DisplayComponent/>
            </InventoryProviderComponent>
        </div>
    </div>
}

export default App;
