import './RadioButton.scss'

import b_ from "b_";
import React, {FC, ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";
import {handleFnEvent} from "../../function";
import {ButtonProps, ButtonSize} from '../Button.types';
import {useColorConfig} from "../../ColorConfig";

const b = b_.with('radio-button');

interface RadioButtonProps extends Omit<ButtonProps, 'text' | 'onClick'>{
    isActive: boolean,
    onClick: ()=> void,
    prefix?: ReactNode,
    suffix?:ReactNode,
}

const getSizeRadioBt = (size: RadioButtonProps['size']): { circle: number, containerMinWidth: number } => {
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
    const refButtonRadioPrefix = useRef<HTMLSpanElement>(null);
    const refButtonRadioSuffix = useRef<HTMLSpanElement>(null);
    const refButtonRadio = useRef<HTMLDivElement>(null);
    const refButtonRadioCircle = useRef<HTMLDivElement>(null);
    const {config} = useColorConfig();
    const {colorPrimary} = config;
    const [isAnimationsRunning, setAnimationsRunning] = useState<boolean>(false)

    useLayoutEffect(()=> {
        if(refButtonRadioPrefix && refButtonRadioSuffix && refButtonRadio){
            const radioPrefix = refButtonRadioPrefix.current.getBoundingClientRect().width;
            const radioSuffix = refButtonRadioSuffix.current.getBoundingClientRect().width;
            const buttonRadioCircle = refButtonRadioCircle.current;
            const widthRadioBt = getSizeRadioBt(size);
            let maxWidthContent = radioSuffix >= radioPrefix ? radioSuffix : radioPrefix;
            maxWidthContent = Math.round(maxWidthContent + widthRadioBt.circle + 16) >= widthRadioBt.containerMinWidth ?
                Math.round(maxWidthContent + widthRadioBt.circle + 16) :
                widthRadioBt.containerMinWidth;
            const buttonRadio = refButtonRadio.current;
            buttonRadio.style.setProperty('--width-radio-bt', `${maxWidthContent}px`)
            buttonRadioCircle.style.setProperty('--width-radio-bt-circle', `${widthRadioBt.circle}px`)
        }
    }, [refButtonRadioPrefix, refButtonRadioSuffix, size])

    useLayoutEffect(()=>{
        if(refButtonRadio.current){
            const radioButton =  refButtonRadio.current;
            radioButton.style.setProperty('--hover-border-color-radio-bt', colorPrimary);
            radioButton.style.setProperty('--hover-circle-color-radio-bt', colorPrimary);
        }
    }, [colorPrimary, refButtonRadio])

    useEffect(()=>{
        setAnimationsRunning(true);
        const endAnimation = setTimeout(()=> {setAnimationsRunning(false)}, 1000);
        const { width } = refButtonRadio.current.getBoundingClientRect();
        const radioButtonCircle = refButtonRadioCircle.current;
        const  widthCircle  = radioButtonCircle.getBoundingClientRect().width;
        const marginLeftCircle = isActive ? Math.round(width - widthCircle - 6) : 2;
        radioButtonCircle.style.setProperty('--margin-left-circle-radio-bt', `${marginLeftCircle}px`);
        return ()=> clearTimeout(endAnimation);
    }, [isActive])

   return (<div
       style={style}
       ref={refButtonRadio}
       className={[
            b('block-radio-bt', {size, reverse: isActive}),
            className,
        ].join(' ')}
             onClick={(event) => {
                 handleFnEvent({fn: onClick, disable, event})
             }}
             onMouseEnter={(event) => handleFnEvent({fn: onMouseEnter, disable, event})}
             onMouseLeave={(event) => handleFnEvent({fn: onMouseLeave, disable, event})}
        >
               <span
                   ref={refButtonRadioPrefix}
                   className={b('prefix', {hidden: !isActive})}>{prefix}</span>
               <div
                   ref={refButtonRadioCircle}
                   className={b('circle', {size, 'animation-run':isAnimationsRunning})}/>
               <span
                   ref={refButtonRadioSuffix}
                   className={b('suffix', {hidden: isActive})}>{suffix}</span>
        </div>)
};

export default React.memo(RadioButton);
