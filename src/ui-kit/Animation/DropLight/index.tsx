import './DropLight.scss';

import b_ from 'b_';
import React, {
    FC, ReactElement, useEffect, useState,
} from 'react';
import {addOpacityInColorRGB, hexToRGB} from "../function";

const b = b_.with('drop-light');

interface DropLightProps{
    children: ReactElement,
    classNames?: string,
    borderSize: number,
    time: number,
    color?: string,
};

const DropLight: FC<DropLightProps> = ({children, borderSize, classNames, time, color}) => {
    const [isRunAnimation, setRunAnimation] = useState<boolean>(false)
    const boxShadow = isRunAnimation ? `inset 0px 0px 4px ${addOpacityInColorRGB({color:hexToRGB(color), processOpacity: 40})}`: undefined;
    const border = isRunAnimation ?`1px solid ${addOpacityInColorRGB({color:hexToRGB(color), processOpacity: 30})}` : undefined;
    useEffect(()=> {
            const delayPreEndAnimation = setTimeout(()=> {
                setRunAnimation(false);
            }, isRunAnimation ? time : 0);
            return ()=> clearTimeout(delayPreEndAnimation);
    },[isRunAnimation])
    const {props} = children;
    const DropLight = React.cloneElement(
        children,
        {...props, onMouseDown: ()=> {
            setRunAnimation(true);
            if( props?.onMouseDown) props.onMouseDown();
            }},
        <>
            {children.props.children}
            <span
                style={{
                    boxShadow,
                    border,
                }}
                className={b({animation: isRunAnimation})}/>
        </>
    )
    return DropLight
};

export default React.memo(DropLight);