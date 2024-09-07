// @import *.scss

import b_ from 'b_'
import React from 'react';
import {
    IIcon,
    Mods,
    SettingIcon,
    Color,
    Notebook,
    IconSize,
} from "./type";

export {
    Mods,
    SettingIcon,
    Color,
    Notebook,
}

const b = b_.with('icon');

const Icon = ({
    mods = {},
    className,
    size=IconSize.FULL
}: IIcon) => (<div
    style = {{
        height:`${size}px`,
        width:`${size}px`
    }}
    className={[
        b({
                ...mods
            }),
            className,
    ].filter(Boolean).join(' ')}/>);

export default Icon;