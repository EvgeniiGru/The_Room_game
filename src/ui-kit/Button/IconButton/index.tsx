import './IconButton.scss'

import b_ from 'b_';
import React, {FC} from "react";
import Icon from "../../Icon";
import {handleFnEvent} from "../../function";
import {ButtonIconProps, localizationButtonIconSize} from "./IconButton.types";
import {ButtonSize} from "../Button.types";

const b = b_.with('icon-bt');

const IconButton: FC<ButtonIconProps> = ({
    onMouseLeave,
    onMouseEnter,
    onClick,
    mods={},
    className,
    classNameIcon,
    disable,
    style,
    children,
    size= ButtonSize.MEDIUM
}) =>
    (<div className={[
        b({disable, size}),
        className,
    ].join(' ')}
          onClick= {(event)=> handleFnEvent({fn:onClick, disable, event})}
          onMouseEnter= {(event)=> handleFnEvent({fn:onMouseEnter, disable, event})}
          onMouseLeave= {(event)=> handleFnEvent({fn:onMouseLeave, disable, event})}
    >
        <Icon
            size={localizationButtonIconSize[size]}
            mods={mods}
            className={[
                b('icon'),
                classNameIcon,
            ].join(' ')}
        />
    </div>)

export default IconButton;
