export enum Mods {
    Arrow = 'arrow',
    Notebook = 'notebook',
    Color = 'color',
};

export enum Color {
    White= 'white',
}

export interface IMods {
    [Mods.Arrow]?: boolean,
    [Mods.Notebook]?: boolean,
    [Mods.Color]?: Color,
};

export interface IIcon {
    mods?: IMods,
    className?: string,
};