import './App.scss'

import b_ from 'b_'
import React from "react";
import Inventory from "./component/root/Inventory/index";


const b = b_.with('work-space');

const App = () => {
    return <div className={b()}>
       <div className={b('header')}>

       </div>
        <div className={b('body')}>
            <Inventory/>
            <div/>
        </div>
    </div>
}

export default App;
