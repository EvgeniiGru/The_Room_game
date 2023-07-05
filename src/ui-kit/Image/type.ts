import React from "react";

export enum IImageThings {
    THINGS= 'things',
}


export enum AllThings {
    CigarettesPack = 'cigarettes-pack',
    Cheese = 'cheese',
}

export interface IImage {
    [IImageThings.THINGS]?:AllThings,
}

export interface IImageProps{
    onClick?: ()=> void,
    isNight?: boolean,
    imgName?: IImage,
    classNameContainer?: string,
    classNameImg?: string,
    children?: React.ReactNode | React.ReactNode[],
    style?:{
        width?: number,
        height?: number,
    }
}