import './Fridge.scss';

import b_ from 'b_';
import React from "react";
import {Image, } from "rooms";

const img = b_.with('fridge-img');
const construction = b_.with('fridge-construction');

const Fridge = () => {
    return <Image
        classNameContainer={construction({main: true})}
        classNameImg={img({main: true})}
    >
        <Image classNameContainer={construction({top: true})}
               classNameImg={img({top: true})}/>
        <Image classNameContainer={construction({bottom: true})}
               classNameImg={img({bottom: true})}/>
    </Image>
}

export default Fridge;