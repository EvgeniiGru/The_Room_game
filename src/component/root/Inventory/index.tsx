import './Inventory.scss'

import b_ from 'b_'
import React, {MouseEventHandler} from 'react';
import Icon, {Mods} from "../../../ui-kit/Icon";
import {Color} from "../../../ui-kit/Icon/type";
import useSound from 'use-sound';
import {checkedInventory} from "../../../ui-kit/Song";

const b = b_.with('inventory');

const Inventory = () => {

    const [click] = useSound(checkedInventory);

    return <div className={b()}>
        <div className={b('button')}>
            <Icon mods={{
                [Mods.Arrow]: true,
                [Mods.Color]: Color.White,
            }}
            />
        </div>
        <div className={b('body')}>
            <div onClick={()=> click()} className={b('element_inventory', {checked: true})}/>
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