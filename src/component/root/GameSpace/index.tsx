
import b_ from 'b_';
import React from "react";
import Background, {BackImg, SheriffsRoom} from "../../../ui-kit/Background";
import Modal from "../../../ui-kit/Modal";

const b = b_.with('');

const DisplayComponent = () => {
    return <Background
        isNight={true}
        imgName={{
        [BackImg.SheriffsRoom]: SheriffsRoom.Kitchen,
    }}>
        <Modal isOpen={true} onClickCloseModal={()=> {}}><div/></Modal>
    </Background>
}

export default DisplayComponent;