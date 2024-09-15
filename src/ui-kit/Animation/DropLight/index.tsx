import './DropLight.scss';

import b_ from 'b_';
import React, {
    FC,
} from 'react';
import {AuxPropsChildren} from "../../../component/root/type";

const b = b_.with('drop-light');

interface DropLightProps extends AuxPropsChildren{
    classNames?: string,
    borderSize: number,
    off?: boolean
};

const DropLight: FC<DropLightProps> = ({children, borderSize, classNames, off}) => {
    // @ts-ignore
    const DropLight = React.cloneElement(children, children.props,<>{children.props.children} <div className={b()}/></>)
    return DropLight
};

export default React.memo(DropLight);