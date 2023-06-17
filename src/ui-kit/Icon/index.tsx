// @import *.scss

import b_ from 'b_'
import React from 'react';
import {
    IIcon,
    Mods,
} from "./type";

export {
    Mods
}

const b = b_.with('icon');

const Icon = ({
    mods = {},
    className,
}: IIcon) => (<div className={[
        b({
                ...mods
            }),
            className
    ].filter(Boolean).join(' ')}/>);

export default Icon;