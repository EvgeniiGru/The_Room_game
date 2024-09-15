import './RadioButton.scss'

import b_ from "b_";
import React, {FC, ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";
import {handleFnEvent} from "../../function";
import {ButtonProps, ButtonSize} from '../Button.types';
import {useColorConfig} from "../../ColorConfig";
import {RadioButtonProps} from "./RadioButton.types";
import useRadioButton from "./useRadioButton";

const b = b_.with('radio-button');

const RadioButton: FC<RadioButtonProps> = ({
                                               isActive,
                                               onClick,
                                               disable,
                                               className,
                                               onMouseEnter,
                                               onMouseLeave,
                                               size=ButtonSize.MEDIUM,
                                               prefix,
                                               suffix,
                                               style,


}) => {
    const {container, content} = useRadioButton({size, onMouseEnter, disable, onMouseLeave, onClick, isActive, style})

   return (<div
       {...container}
       className={[
            b('block-radio-bt', {size, reverse: isActive}),
            className,
        ].join(' ')}
        >
               <span
                   {...content.prefix}
                   className={b('prefix', {hidden: !isActive})}>{prefix}</span>
               <div
                   style={{...content.circle.style}}
                   className={b('circle', {size, 'animation-run':content.circle.isAnimationsRunning})}/>
               <span
                   {...content.suffix}
                   className={b('suffix', {hidden: isActive})}>{suffix}</span>
        </div>)
};

export default React.memo(RadioButton);
