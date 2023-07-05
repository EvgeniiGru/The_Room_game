import './FridgeInside.scss'

import b_ from 'b_';
import React from "react";
import {Background, BackgroundType} from "rooms";

const b = b_.with('fridge-inside');

const FridgeInside = () => {

    return <Background
        isNight={false}
        imgName={{
            [BackgroundType.BackImg.SheriffsRoom]: BackgroundType.SheriffsRoom.FridgeInside,
        }}>
        <div/>
    </Background>
};

export default FridgeInside;


