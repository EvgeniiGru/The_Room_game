import './Kitchen.scss';

import b_ from 'b_';
import React, {useEffect, useState} from "react";
import {useLocation} from "../../../../root/reducer";
import {pathRoot} from "../../../../root/GameSpace/type";
import Fridge from "./components/Fridge";

const b = b_.with('kitchen');

const Kitchen = () => {

    const propsLocation = useLocation();

    useEffect(()=> {
        propsLocation.getLeftLocation(pathRoot.Hallway());
        propsLocation.getRightLocation(pathRoot.Hall());
        return () => {
            propsLocation.getLeftLocation('');
            propsLocation.getRightLocation('');
        }
    }, []);

    return <div className={b()}>
        <div className={b('top')}/>
        <div className={b('flow')}>
            <Fridge/>
        </div>

    </div>
}

export default React.memo(Kitchen);
