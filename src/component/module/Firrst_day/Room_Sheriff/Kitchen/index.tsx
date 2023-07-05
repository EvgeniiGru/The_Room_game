import './Kitchen.scss';

import b_ from 'b_';
import React, {useEffect} from "react";
import {useLocation} from "../../../../root/reducer";
import Fridge from "./components/Fridge";
import {Background, BackgroundType} from "rooms";
import {pathSheriffRoom} from "../type";

const b = b_.with('kitchen');

const Kitchen = () => {

    const propsLocation = useLocation();

    useEffect(()=> {
        propsLocation.getLeftLocation(pathSheriffRoom.Hallway());
        propsLocation.getRightLocation(pathSheriffRoom.Hall());
        return () => {
            propsLocation.getLeftLocation('');
            propsLocation.getRightLocation('');
        }
    }, []);

    return <Background
        isNight={false}
        imgName={{
            [BackgroundType.BackImg.SheriffsRoom]: BackgroundType.SheriffsRoom.Kitchen,
        }}>
            <div className={b()}>
                <div className={b('top')}/>
                <div className={b('flow')}>
                        <Fridge/>
                </div>
            </div>
    </Background>
}

export default React.memo(Kitchen);
