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

const handleOpenDoor = (onClick: () => void) => {
    if(onClick){
        onClick();
    }
}

const Image = ({
    imgName = {},
    classNameContainer,
    classNameImg,
    children,
    isNight,
    onClick,
    style ={}}: IImageProps ) => {
    const width = style.width;
    const height = style.height
   return <div
       className={classNameContainer}
       onClick={()=> handleOpenDoor(onClick)}
   >
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