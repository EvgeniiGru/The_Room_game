import {CSSProperties} from "react";

export enum ButtonSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

export interface ButtonProps {
    onMouseLeave?: () => void,
    onMouseEnter?: () => void,
    onClick: () => void,
    disable?: boolean,
    className?: string,
    text?: string,
    style?: CSSProperties,
    size?: ButtonSize,
}