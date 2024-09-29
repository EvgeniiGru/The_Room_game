import './Group.scss';
import React, {Children, FC} from 'react';
import b_ from 'b_';
import {ButtonGroupProps} from "./Group.types";

const b = b_.with('group-button');



const ButtonGroup: FC<ButtonGroupProps> = ({children, gap}) => (<div className={b()}>
    {Children.map(children, (child, key) => (
        <div
            style={{marginLeft: key ? `${gap}px`: '0'}}
        >
            {child}
        </div>
    ))}
</div>);

export default ButtonGroup;