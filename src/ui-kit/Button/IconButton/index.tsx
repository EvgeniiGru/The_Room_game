import './IconButton.scss'

import b_ from 'b_';
import React from "react";
import Icon from "../../Icon";
import {IMods} from "../../Icon/type";
import {handleOnClick} from "../../function/indes";

const b = b_.with('icon-bt');

interface IIconButton {
    mods?: IMods,
    className?: string,
    classNameIcon?: string,
    disable?: boolean,
    text?: string,
    onClick: () => void,
    style?:{
        border?: boolean,
    },
}

const IconButton = ({
    onClick,
    mods={},
    className,
    classNameIcon,
    disable,
                    }:IIconButton) =>
    (<div className={[
        b( ),
        className,
    ].join(' ')}
    onClick= {(event)=> handleOnClick({onClick, disable, event})}
    >
        <Icon
            mods={mods}
            className={[
                b('icon', {disable}),
                classNameIcon,
            ].join(' ')}
        />
    </div>)

export default IconButton;
