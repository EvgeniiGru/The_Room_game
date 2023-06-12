
import b_ from 'b_';
import React from "react";
import Background, {BackImg, SheriffsRoom} from "../../../ui-kit/Background";

const b = b_.with('');

const DisplayComponent = () => {
    return <Background
        isNight={true}
        imgName={{
        [BackImg.SheriffsRoom]: SheriffsRoom.Kitchen,
    }}>
        <div></div>
    </Background>
}

export default DisplayComponent;