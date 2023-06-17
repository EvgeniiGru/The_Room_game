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
    onClickCloseModal?: () => void,
    classContainer?: string,

}
const Modal = ({isOpen, children, onClickCloseModal, classContainer}:IModal) => {
    return isOpen && (<div className={b('background')}>
        <div className={[
            b('container'),
            classContainer,
        ].join(' ')}>
            {onClickCloseModal && (<div className={b('cross-block')}>
                    <IconButton mods={{
                        [Mods.Cross]: true,
                        [SettingIcon.HoverColor]: Color.Red,
                    }}
                    onClick={()=> {}}
                    />
                </div>
            )}
            <div className={b('cell')}/>
            {children}
        </div>
    </div>)

}


export default Modal;