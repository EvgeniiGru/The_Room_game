export enum Mods {
    Arrow = 'arrow',
    Notebook = 'notebook',
    Cross = 'cross',
};
export enum SettingIcon {
    Color = 'color',
    HoverColor = 'hover-color'
}

export enum Color {
    Gray = 'gray',
    White = 'white',
    Red = 'red',
    Black = 'black',
}

export interface IMods {
    [Mods.Arrow]?: boolean,
    [Mods.Notebook]?: boolean,
    [SettingIcon.Color]?: Color,
    [SettingIcon.HoverColor]?: Color,
    [Mods.Cross]?: boolean,
};

export interface IIcon {
    mods?: IMods,
    className?: string,
};