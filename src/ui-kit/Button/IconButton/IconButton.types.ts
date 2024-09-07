import {ButtonProps, ButtonSize} from "../Button.types";
import {IconSize, IMods} from "../../Icon/type";

export const localizationButtonIconSize: Record<ButtonSize, IconSize> = {
    [ButtonSize.SMALL]: IconSize.SMALL,
    [ButtonSize.MEDIUM]: IconSize.MEDIUM,
    [ButtonSize.LARGE]: IconSize.LARGE,
}

export interface ButtonIconProps extends Omit<ButtonProps, 'style'> {
    mods?: IMods,
    classNameIcon?: string,
    onClick: () => void,
    style?:{
        border?: boolean,
    },
}