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
    classNameContainer,
    classNameImg,
    children,
    isNight,
    style ={}}: IImageProps ) => {
    const width = style.width;
    const height = style.height
   return <div className={classNameContainer}>
            <div
               style={{
                   width,
                   height,
               }}
               className={[
                b({
                    ...imgName
                }),
                   classNameImg
           ].filter(Boolean).join(' ')}>
                    {children}
           </div>
   </div>
};

export default React.memo(Image);