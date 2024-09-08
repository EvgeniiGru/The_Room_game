import './IconButton.scss'

import b_ from 'b_';
import React, {FC, useEffect, useState, useRef, useLayoutEffect} from "react";
import Icon, {Color, SettingIcon} from "../../Icon";
import {handleFnEvent} from "../../function";
import {ButtonIconProps, localizationButtonIconSize} from "./IconButton.types";
import {ButtonSize} from "../Button.types";
import {useColorConfig} from "../../ColorConfig";

const b = b_.with('icon-bt');
//TODO переделать глобальную переменую рендер функции

const IconButton: FC<ButtonIconProps> = ({
    onMouseLeave,
    onMouseEnter,
    onClick,
    mods={},
    className,
    classNameIcon,
    disable,
    size= ButtonSize.MEDIUM
}) => {
    const {config} = useColorConfig();
    const {colorPrimary} = config;
    const refButton = useRef<HTMLDivElement>(null);
    const refIcon = useRef<HTMLDivElement>(null)
    const color =  getComputedStyle(document.querySelector('html')).getPropertyValue('--gray-natural-medium');

    useLayoutEffect(()=>{
        if(refButton.current){
            const iconButton =  refButton.current
            iconButton.style.setProperty('--hover-border-color-bt', colorPrimary);
            iconButton.style.setProperty('--border-color-bt', color);
        }
    }, [colorPrimary, refButton, color])

    // useEffect(()=> {
    //    if(mods[SettingIcon.HoverColor]){
    //        setColorHover(mods[SettingIcon.HoverColor])
    //        delete mods[SettingIcon.HoverColor];
    //    }
    //    if(mods[SettingIcon.Color]){
    //        setColorBt(mods[SettingIcon.Color]);
    //    }
    // }, [mods])


   return (<div
       ref={refButton}
       className={[
        b({disable, size}),
        className,
    ].join(' ')}
          onClick={(event) => handleFnEvent({fn: onClick, disable, event})}
          onMouseEnter={(event) => handleFnEvent({fn: onMouseEnter, disable, event})}
          onMouseLeave={(event) => handleFnEvent({fn: onMouseLeave, disable, event})}
    >
        <Icon
            ref = {refIcon}
            size={localizationButtonIconSize[size]}
            mods={mods}
            className={[
                b('icon'),
                classNameIcon,
            ].join(' ')}
        />
    </div>)
}

export default IconButton;
