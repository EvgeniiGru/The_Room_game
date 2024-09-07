import './RadioButton.scss'

import b_ from "b_";
import React, {FC} from "react";
import {handleFnEvent} from "../../function";
import {ButtonProps, ButtonSize} from '../Button.types';

const b = b_.with('radio-button');

interface RadioButtonProps extends Omit<ButtonProps, 'text' | 'style' | 'onClick'>{
    isActive: boolean,
    onClick: ()=> void,
}

const RadioButton: FC<RadioButtonProps> = ({
                                               isActive,
                                               onClick,
                                               disable,
                                               className,
                                               onMouseEnter,
                                               onMouseLeave,
                                               size=ButtonSize.MEDIUM,

}) => (
    <div className={[
        b('block-radio-bt', {size}),
        className,
    ].join(' ')}
         onClick= {(event)=> handleFnEvent({fn:onClick, disable, event})}
         onMouseEnter= {(event)=> handleFnEvent({fn:onMouseEnter, disable, event})}
         onMouseLeave= {(event)=> handleFnEvent({fn:onMouseLeave, disable, event})}
    >
        <div className={b('circle', {active: isActive, size})}/>
    </div>);

export default React.memo(RadioButton);
