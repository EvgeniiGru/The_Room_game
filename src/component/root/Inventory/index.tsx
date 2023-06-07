import './Inventory.scss'

import b_ from 'b_'
import React from 'react';
import Icon, {Mods} from "../../../ui-kit/Icon";
import {Color} from "../../../ui-kit/Icon/type";

const b = b_.with('inventory');

const Inventory = () => {

    return <div className={b()}>
        <div className={b('button')}>
            <Icon mods={{
                [Mods.Arrow]: true,
                [Mods.Color]: Color.White,
            }}

            />
        </div>
        <div className={b('body')}>
            <div className={b('element_inventory')}/>
            <div className={b('element_inventory')}/>
            <div className={b('element_inventory')}/>
            <div className={b('element_inventory')}/>
            <div className={b('element_inventory')}/>
        </div>
        <div className={b('button',{revers: true})}>

        </div>
    </div>
}

export default Inventory;