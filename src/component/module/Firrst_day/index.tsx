
import React from "react";
import {Background, BackgroundType} from 'rooms';
import TaskList from "../../root/TaskSheet/";
import {Route} from "react-router-dom";
import {pathRoot} from "../../root/GameSpace/type";
import Kitchen from "./Room_Sheriff/Kitchen";
import Hall from "./Room_Sheriff/Hall";
import Hallway from "./Room_Sheriff/Hallway";
import Bedroom from "./Room_Sheriff/Bedroom";

const FirstDay = () => {

    return <Background
        isNight={false}
        imgName={{
            [BackgroundType.BackImg.SheriffsRoom]: BackgroundType.SheriffsRoom.Kitchen,
        }}>
        <TaskList/>
        <Route
            path={pathRoot.Kitchen()}
            component={Kitchen}
        />
        <Route
            path={pathRoot.Hall()}
            component={Hall}
        />
        <Route
            path={pathRoot.Hallway()}
            component={Hallway}
        />
        <Route
            path={pathRoot.Bedroom()}
            component={Bedroom}
        />
    </Background>
}

export default FirstDay;