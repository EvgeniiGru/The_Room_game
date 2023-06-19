export enum BackImg {
    SheriffsRoom= 'sheriffs-room',
};

export enum SheriffsRoom {
    Kitchen = 'kitchen',
}

export interface IBack {
    [BackImg.SheriffsRoom]?: SheriffsRoom,
};
