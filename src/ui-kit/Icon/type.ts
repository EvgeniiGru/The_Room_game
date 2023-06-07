export enum Mods {
    Arrow = 'arrow',
    Color = 'color'
};

export enum Color {
    White= 'white'
}

export interface IMods {
    [Mods.Arrow]?: boolean,
    [Mods.Color]?: Color,
};

export interface IIcon {
    mods?: IMods,
    className?: string,
};