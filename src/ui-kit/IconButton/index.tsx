import './IconButton.scss'

import b_ from 'b_';
import React from "react";
import Icon from "../Icon";
import {IMods} from "../Icon/type";

const b = b_.with('icon-bt');

interface IIconButton {
    mods?: IMods,
    className?: string,
    classNameIcon?: string,
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
    classNameIcon,
    disable,
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
            className={[
                b('icon', {disable}),
                classNameIcon,
            ].join(' ')}
        />
    </div>)

export default IconButton;