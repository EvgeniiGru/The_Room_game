import './CommonButton.scss';

import b_ from 'b_';
import React from "react";
import {handleOnClick} from "../../function/indes";

const b = b_.with('common-bt');

interface ICommonBt {
    onClick: () => void,
    disable?: boolean,
    className?: string,
    text: string,
}

const CommandButton = ({
    onClick,
    disable,
    className,
    text,
}:ICommonBt) => (<div className={[
        b({disable}),
        className,
    ].join(' ')}
          onClick= {(event)=> handleOnClick({onClick, disable, event})}
    >
    {text}
    </div>)

export default React.memo(CommandButton);