export enum Mods {
    Arrow = 'arrow',
    Notebook = 'notebook',
    Cross = 'cross',
    Setting = 'setting'
}

export enum Notebook {
    Open = 'open',
    Close = 'close',
}

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

export enum IconSize {
    SMALL = 16,
    MEDIUM = 18,
    LARGE = 20,
    FULL = 32,
}

export interface IMods {
    [Mods.Arrow]?: boolean,
    [Mods.Notebook]?: Notebook,
    [Mods.Setting]?: boolean,
    [SettingIcon.Color]?: Color,
    [SettingIcon.HoverColor]?: Color,
    [Mods.Cross]?: boolean,
}

export interface IIcon {
    mods?: IMods,
    className?: string,
    size?: number | IconSize
}
