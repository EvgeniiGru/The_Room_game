import React from "react";


export enum BackImg {
    SheriffsRoom= 'sheriffs-room',
};

export enum SheriffsRoom {
    Kitchen = 'kitchen',
}

export interface IBack {
    [BackImg.SheriffsRoom]?: SheriffsRoom,
};

export interface IBackground{
    isNight: boolean,
    imgName?: IBack,
    className?: string,
    children: React.ReactNode | React.ReactNode[],
};