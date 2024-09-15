// @import *.scss

import b_ from 'b_'
import React, {
    RefAttributes,
    ForwardRefExoticComponent,
    RefObject
} from 'react';
import {
    IIcon,
    Mods,
    SettingIcon,
    Color,
    Notebook,
    IconSize,
} from "./type";
import {useImperativeHandle} from "react";

export {
    Mods,
    SettingIcon,
    Color,
    Notebook,
}

const b = b_.with('icon');

const Icon: ForwardRefExoticComponent<IIcon & RefAttributes<HTMLDivElement>> = React.forwardRef( ({
    mods = {},
    className,
    size=IconSize.FULL
}:IIcon, ref: RefObject<HTMLDivElement>) => {
    useImperativeHandle(
        ref,
        () => {
            return ref.current;
        },
        []
    );
   return (<div
       ref={ref}
        style={{
            height: `${size}px`,
            width: `${size}px`
        }}
        className={[
            className,
            b({
                ...mods
            }),
        ].filter(Boolean).join(' ')}/>)
});

export default Icon;