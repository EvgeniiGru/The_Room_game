import './Modal.scss'

import b_ from 'b_';
import React, {ReactNode} from "react";
import IconButton from "../IconButton";
import {Mods} from "../Icon";
import {Color, SettingIcon} from "../Icon/type";

const b = b_.with('modal');

interface IModal {
    isOpen: boolean,
    children: ReactNode | ReactNode[],
    onClick?: () => void,
    classContainer?: string,

}
const Modal = ({isOpen, children, onClick, classContainer}:IModal) => {
    return isOpen && (<div className={b('background')}>
        <div className={[
            b('container'),
            classContainer,
        ].join(' ')}>
            {onClick && (<div className={b('cross-block')}>
                    <IconButton
                    className={b('cross')}
                    mods={{
                        [Mods.Cross]: true,
                        [SettingIcon.Color]: Color.Black,
                        [SettingIcon.HoverColor]: Color.Red,
                    }}
                    onClick={()=> onClick()}
                    />
                </div>
            )}
            {children}
        </div>
    </div>)

}


export default React.memo(Modal);