// @import *.scss

import b_ from 'b_'
import React, {BaseSyntheticEvent, forwardRef, RefObject, useImperativeHandle} from 'react'
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

const handleOpenDoor = (onClick: () => void, event: BaseSyntheticEvent) => {
    if(onClick){
        event.stopPropagation();
        onClick();
    }
}

const Image = forwardRef( ({
    imgName = {},
    classNameContainer,
    classNameImg,
    children,
    isNight,
    onClick,
    style ={}}: IImageProps, ref: RefObject<HTMLDivElement>) => {
    const width = style.width;
    const height = style.height;

    useImperativeHandle(ref, ()=> {
       return ref.current;
    }, [ref]);

   return (<div
       ref={ref}
       className={classNameContainer}
       onClick={(event)=> handleOpenDoor(onClick, event)}>
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
   </div>)
})

export default React.memo(Image) ;