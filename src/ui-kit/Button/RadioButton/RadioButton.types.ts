import {ButtonProps} from "../Button.types";
import {ReactNode} from "react";

export interface RadioButtonProps extends Omit<ButtonProps, 'text' | 'onClick'>{
    isActive: boolean,
    onClick: ()=> void,
    prefix?: ReactNode,
    suffix?:ReactNode,
}

export type UseRadioButtonProps = Pick<
    RadioButtonProps,
    'isActive'
    | 'size'
    | 'style'
    | 'onClick'
    | 'onMouseEnter'
    | 'onMouseLeave'
    | 'disable'>

export const SIZE_BORDER_CIRCLE: number = 2;
export const BORDER_COLOR: string = 'var(--gray-natural-medium)';
export const BOX_SHADOW_CONTAINER: string = 'var(--box-shadow)';