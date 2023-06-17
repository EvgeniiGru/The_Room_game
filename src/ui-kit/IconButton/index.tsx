import './IconButton.scss'

import b_ from 'b_';
import React from "react";
import Icon, {Mods} from "../Icon";
import {Color, IMods} from "../Icon/type";

const b = b_.with('icon-bt');

interface IIconButton {
    mods?: IMods,
    className?: string,
    disable?: boolean,
    onClick: () => void,
    style?:{
        border?: boolean,
    },
}

const IconButton = ({
    onClick,
    mods={},
    className,
    disable,
    style={},
                    }:IIconButton) =>
    (<div className={[
        b(),
        className,
    ].join(' ')}
    onClick= {()=> {
        if (!disable) {
            onClick();
        }}}
    >
        <Icon
            mods={mods}
            className={b('icon', {disable})}
        />
    </div>)

export default IconButton;