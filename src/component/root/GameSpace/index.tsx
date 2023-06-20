import b_ from 'b_';
import React from "react";
import {Background, BackgroundType} from 'rooms';
import TaskList from "../TaskSheet";

const b = b_.with('next-location');

const DisplayComponent = () => {
    return <Background
        isNight={false}
        imgName={{
        [BackgroundType.BackImg.SheriffsRoom]: BackgroundType.SheriffsRoom.Kitchen,
    }}>
        <TaskList/>
    </Background>
}

export default DisplayComponent;