// @import *.scss

import b_ from 'b_'
import React from 'react'
import Background from "../Background";
import {
    IImageProps,
    IImageThings,
    AllThings,
} from "./type";
const b = b_.with('image');

export {
    IImageThings,
    AllThings,
}

const Image = ({
    imgName = {},
    className,
    children,
    isNight,
    style ={},
              }: IImageProps ) => {
   return <div
       style={{
           width:`${style.width ?? 100}px`,
           height:`${style.height ?? 100}px`,
       }}
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

export default React.memo(Image);