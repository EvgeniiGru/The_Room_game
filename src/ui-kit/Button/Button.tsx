import './Button.scss';

import b_ from 'b_';
import React, {FC} from "react";
import { handleFnEvent } from "../function";
import { Animation } from "rooms";
import { ButtonProps, ButtonSize } from './Button.types';
const b = b_.with('button');

const Button: FC<ButtonProps> = ({
    onClick,
    onMouseEnter,
    onMouseLeave,
    disable,
    className,
    text,
    style,
    size= ButtonSize.MEDIUM,
}) => {
   return <Animation.NeonLights borderSize={1} settings={{duration: 1000, iterations: Infinity}}>
        <div
            style={style}
            className={[
            b({disable, size}),
            className,
        ].join(' ')}
            onClick= {(event)=> handleFnEvent({fn:onClick, disable, event})}
            onMouseEnter= {(event)=> handleFnEvent({fn:onMouseEnter, disable, event})}
            onMouseLeave= {(event)=> handleFnEvent({fn:onMouseLeave, disable, event})}
        >
            <h5>{text}</h5>
        </div>
   </Animation.NeonLights>
}

export default React.memo(Button);