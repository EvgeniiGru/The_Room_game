// @import *.scss

import b_ from 'b_'
import React from 'react';
import {
    BackImg,
    IBackground,
    SheriffsRoom,
} from "./type";

export {
    BackImg,
    Background,
    SheriffsRoom,
}

const b = b_.with('background');

const Background = ({
    imgName = {},
    className,
    children,
    isNight,
              }: IBackground ) => {
   return <div className={[
        b({
            ...imgName
        }),
        className
   ].filter(Boolean).join(' ')}>
       <div className={b('mask', {dark: isNight})}>
            {children}
       </div>
   </div>
};

export default React.memo(Background);