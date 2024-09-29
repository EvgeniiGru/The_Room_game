import {AuxPropsChildren} from "../../../component/root/type";
import {IAnimationNeonSetting} from "../function";

export interface INeonLightsProps extends AuxPropsChildren{
    classNames?: string,
    settings: IAnimationNeonSetting,
    borderSize: number,
    off?: boolean
};