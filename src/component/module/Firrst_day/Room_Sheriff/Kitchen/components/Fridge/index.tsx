import './Fridge.scss';

import b_ from 'b_';
import React, {useState} from "react";
import {Image, } from "rooms";
import useSound from "use-sound";

const img = b_.with('fridge-img');
const construction = b_.with('fridge-construction');

const Fridge = () => {
    const [openTopDoor, setOpenTopDoor] = useState<boolean>(false);
    const [openBottomDoor, setOpenBottomDoor] = useState<boolean>(false)

    return <Image
        classNameContainer={construction({main: true})}
        classNameImg={img({main: true})}
    >
        <Image
            onClick={() => setOpenTopDoor(!openTopDoor)}
            classNameContainer={construction({top_open: openTopDoor, top: !openTopDoor})}
            classNameImg={img({top_open: openTopDoor, top: !openTopDoor})}/>
        <Image
            onClick={() => setOpenBottomDoor(!openBottomDoor)}
            classNameContainer={construction({bottom: !openBottomDoor, bottom_open: openBottomDoor })}
            classNameImg={img({bottom: !openBottomDoor, bottom_open: openBottomDoor})}/>
    </Image>
}

export default Fridge;