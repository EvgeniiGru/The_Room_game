import {ButtonSize} from "../Button.types";
import {RadioButtonProps} from "./RadioButton.types";

export const getSizeRadioBt = (size: RadioButtonProps['size']): { circle: number, containerMinWidth: number } => {
    switch (size) {
        case ButtonSize.SMALL:
            return {
                circle: 12,
                containerMinWidth: 43,
            }
        case ButtonSize.MEDIUM:
            return {
                circle: 16,
                containerMinWidth: 47,
            }
        case ButtonSize.LARGE:
            return {
                circle: 20,
                containerMinWidth: 51,
            }
        default:
    }
}