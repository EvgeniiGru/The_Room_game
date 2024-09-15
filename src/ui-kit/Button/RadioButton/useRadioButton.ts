import React, {useCallback, useEffect, useLayoutEffect, useRef, useState, MouseEvent} from "react";
import {useColorConfig} from "../../ColorConfig";
import {getSizeRadioBt} from "./function";
import {
    BOX_SHADOW_CONTAINER,
    BORDER_COLOR,
    SIZE_BORDER_CIRCLE,
    UseRadioButtonProps,
} from "./RadioButton.types";
import {handleFnEvent} from "../../function";

const useRadioButton = ({size, isActive, style, onMouseEnter, onMouseLeave, disable, onClick}: UseRadioButtonProps) => {
    const refButtonRadioPrefix = useRef<HTMLSpanElement>(null);
    const refButtonRadioSuffix = useRef<HTMLSpanElement>(null);
    const refButtonRadio = useRef<HTMLDivElement>(null);

    const {config} = useColorConfig();
    const {colorPrimary} = config;
    const [isAnimationsRunning, setAnimationsRunning] = useState<boolean>(false)
    // style container
    const [isHover, setHover] = useState<boolean>(false);
    const [widthRadioBt, setWidthRadioBt] = useState<number>();
    //style circle
    const [sizeCircleRadioBt, setSizeCircleRadioBt] = useState<number>(getSizeRadioBt(size).circle);
    const [marginLeftCircleRadioBt, setMarginLeftCircleRadioBt] = useState<number>(2)

    const handleGetSizeRadioBt = useCallback(()=> {
        return getSizeRadioBt(size);
    },[size])

    const handleOnClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
        handleFnEvent({fn: onClick, disable, event})
    }, [onClick, disable]);

     const handleOnMouseEnter =useCallback((event: MouseEvent<HTMLDivElement>) => {
        setHover(true);
        handleFnEvent({fn: onMouseEnter, disable, event})
    },[onMouseEnter, disable]);

    const handleOnMouseLeave = useCallback((event: MouseEvent<HTMLDivElement>) => {
        setHover(false)
        handleFnEvent({fn: onMouseLeave, disable, event})
    }, [onMouseLeave, disable])

    useLayoutEffect(()=> {
        if(refButtonRadioPrefix && refButtonRadioSuffix && refButtonRadio){
            const radioPrefix = refButtonRadioPrefix.current.getBoundingClientRect().width;
            const radioSuffix = refButtonRadioSuffix.current.getBoundingClientRect().width;
            const widthRadioBt = handleGetSizeRadioBt();
            let maxWidthContent = radioSuffix >= radioPrefix ? radioSuffix : radioPrefix;
            maxWidthContent = Math.round(maxWidthContent + widthRadioBt.circle + 16) >= widthRadioBt.containerMinWidth ?
                Math.round(maxWidthContent + widthRadioBt.circle + 16) :
                widthRadioBt.containerMinWidth;
            setWidthRadioBt(maxWidthContent)
            setSizeCircleRadioBt(widthRadioBt.circle);
        }
    }, [refButtonRadioPrefix, refButtonRadioSuffix, size])


    useEffect(()=>{
        setAnimationsRunning(true);
        const endAnimation = setTimeout(()=> {setAnimationsRunning(false)}, 1000);
        const { width } = refButtonRadio.current.getBoundingClientRect();
        const  widthCircle  = handleGetSizeRadioBt().circle + SIZE_BORDER_CIRCLE*2;
        const marginLeftCircle = isActive ? Math.round(width - widthCircle - 6) : 2;
        setMarginLeftCircleRadioBt(marginLeftCircle);
        return ()=> clearTimeout(endAnimation);
    }, [isActive])

    return {
        container: {
                    style: {
                        ...style,
                        width: style?.width ?? `${widthRadioBt}px`,
                        borderColor: isHover ? colorPrimary : BORDER_COLOR,
                        boxShadow: `inset 0px -1px 9px 0px ${BOX_SHADOW_CONTAINER}${!isHover ? '' : `,
                       0px 0px 5px 0px ${colorPrimary}`}`,
                    },
                    ref: refButtonRadio,
                    onClick: handleOnClick,
                    onMouseEnter: handleOnMouseEnter,
                    onMouseLeave: handleOnMouseLeave,

        },
        content: {
                    prefix: {
                        ref: refButtonRadioPrefix
                    },
                    circle: {
                        isAnimationsRunning,
                        style: {
                            width: `${sizeCircleRadioBt}px`,
                            height: `${sizeCircleRadioBt}px`,
                            marginLeft: `${marginLeftCircleRadioBt}px`
                        }
                    },
                    suffix: {
                        ref: refButtonRadioSuffix,
                    }
        }
    }
};

export default useRadioButton