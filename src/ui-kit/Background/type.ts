export enum BackImg {
    SheriffsRoom= 'sheriffs-room',
}

export enum SheriffsRoom {
    Kitchen = 'kitchen',
    FridgeInside = 'fridge-inside',
}

export interface IBack {
    [BackImg.SheriffsRoom]?: SheriffsRoom,
}
