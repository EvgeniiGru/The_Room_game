import './Inventory.scss'

import b_ from 'b_'
import React, {useEffect, useMemo, useState} from 'react';
// import Icon, {Mods} from "../../../ui-kit/Icon";
// import {Color} from "../../../ui-kit/Icon/type";
import useSound from 'use-sound';
import {checkedInventory, emptyCheckedInventory} from "../../../ui-kit/Song";
import {useInventory} from "./reduser";
import Image, {IImageThings} from "../../../ui-kit/Image";
import {getImage} from "../../../ui-kit/Image/function";

const b = b_.with('inventory');

const Inventory = () => {

    const [click] = useSound(checkedInventory,{sprite: {click: [0, 100]}});
    const [empty] = useSound(emptyCheckedInventory, {sprite: {empty: [0, 100]}});
    const inventoryProps = useInventory();
    const [inventoryMap, setInventoryMap] = useState<string[]>(new Array(5).fill('*'));


    useEffect(()=> {
        const currentInventoryMap = [...inventoryProps.inventory]
        const newInventoryMap = inventoryMap.map((i, k )=> currentInventoryMap[k] ?? '*' );
        setInventoryMap(newInventoryMap);
    }, [inventoryProps.inventory])

    const inventoryMapComponent = useMemo(()=> inventoryMap.map(i => {
        const thingObj = getImage(i);
        return <div onClick={() => {
            if (i === '*') {
                empty({id: 'empty'});
            } else {
                click({id:'click'});
                inventoryProps.checkThingInInventory(i);
            }
        }} className={b('element_inventory',
            {checked: inventoryProps.currentThing === i, empty: i === '*'})
        }>
            <Image imgName={{
                [IImageThings.THINGS]: thingObj.img
            }}
            style={{width:65, height:65}}
                   isNight={true}
            />
            <h4 className={b('description_thing')}>{thingObj.name}</h4>
        </div>
    }), [inventoryMap, inventoryProps.currentThing])

    return <div className={b()}>
        <div className={b('button')}/>
        <div className={b('body')}>
            {inventoryMapComponent}
        </div>
        <div className={b('button',{revers: true})}/>
    </div>
}

export default Inventory;