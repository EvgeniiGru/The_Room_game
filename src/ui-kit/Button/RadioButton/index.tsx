import './RadioButton.scss'

import b_ from "b_";
import React from "react";
import {handleOnClick} from "../../function/indes";

const b = b_.with('radio-button');

interface IRadioButton {
    isActive: boolean,
    onClick: () => void,
    disable?: boolean,
    className?: string,
}

const RadioButton = ({isActive, onClick, disable, className}: IRadioButton) => (
    <div className={[
        b('block-radio-bt'),
        className,
    ].join(' ')}
                onClick={(event)=> handleOnClick({
                    onClick,
                    disable,
                    event,
                   })}>
        <div className={b('circle', {active: isActive})}/>
    </div>);

export default React.memo(RadioButton);
