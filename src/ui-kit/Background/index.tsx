// @import *.scss

import b_ from 'b_'
import React from 'react';
import {
    IBack,
    SheriffsRoom,
    BackImg,
} from "./type";

export {
    SheriffsRoom,
    BackImg,
}

const b = b_.with('background');

interface IBackground{
    isNight: boolean,
    imgName?: IBack,
    className?: string,
    children: React.ReactNode | React.ReactNode[],
};

const Background = ({
    imgName = {},
    className,
    children,
    isNight,
              }: IBackground ) => {
   return <div
       id={'background'}
       className={[
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
