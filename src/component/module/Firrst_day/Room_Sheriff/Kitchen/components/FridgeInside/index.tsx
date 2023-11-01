import './FridgeInside.scss'

import b_ from 'b_';
import React from "react";
import {Background, BackgroundType} from "rooms";
import Mouse from "../Characters/Mouse";
import {ButtonBack} from "../../../../../../root/BackButton";

const b = b_.with('fridge-inside');

const FridgeInside = () => (<Background
        isNight={false}
        imgName={{
            [BackgroundType.BackImg.SheriffsRoom]: BackgroundType.SheriffsRoom.FridgeInside,
        }}>
        <div className={b('top-shelf')}>
            <ButtonBack/>
        </div>
        <div className={b('bottom-shelf')}>
            <Mouse/>
        </div>
    </Background>);

export default React.memo(FridgeInside);


