import './Inventory.scss'

import b_ from 'b_'
import React, {useEffect, useMemo, useState} from 'react';
import useSound from 'use-sound';
import {
    Image,
    ImageFn,
    ImageType,
    Song,
} from 'rooms';
import {useInventory} from "./reduser";

const b = b_.with('inventory');

const Inventory = () => {

    const [click] = useSound(Song.checkedInventory,{sprite: {click: [0, 100]}});
    const [empty] = useSound(Song.emptyCheckedInventory, {sprite: {empty: [0, 100]}});
    const inventoryProps = useInventory();
    const [inventoryMap, setInventoryMap] = useState<string[]>(new Array(10).fill('*'));

    useEffect(()=> {
        const currentInventoryMap = [...inventoryProps.inventory]
        const newInventoryMap = inventoryMap.map((i, k )=> currentInventoryMap[k] ?? '*' );
        setInventoryMap(newInventoryMap);
    }, [inventoryProps.inventory])

    const inventoryMapComponent = useMemo(()=> inventoryMap.map((i, k) => {
        const thingObj = ImageFn.getImage(i);
        return <div key={`${k}_${i}`} onClick={() => {
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
                [ImageType.Settings.THINGS]: thingObj.img
            }}
            style={{width:50, height:65}}
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
