
import React from "react";
import {Background, BackgroundType} from 'rooms';
import TaskList from "../../root/TaskSheet/";

const FirstDay = () => {
    return <Background
        isNight={false}
        imgName={{
            [BackgroundType.BackImg.SheriffsRoom]: BackgroundType.SheriffsRoom.Kitchen,
        }}>
        <TaskList/>
    </Background>
}

export default FirstDay;