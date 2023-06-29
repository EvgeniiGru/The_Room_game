import React from "react";

export enum IImageThings {
    THINGS= 'things',
};


export enum AllThings {
    CigarettesPack = 'cigarettes-pack',
}

export interface IImage {
    [IImageThings.THINGS]?:AllThings,
};

export interface IImageProps{
    isNight?: boolean,
    imgName?: IImage,
    classNameContainer?: string,
    classNameImg?: string,
    children?: React.ReactNode | React.ReactNode[],
    style?:{
        width?: number,
        height?: number,
    }
};