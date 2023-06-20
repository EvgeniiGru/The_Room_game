import './Modal.scss'

import b_ from 'b_';
import React, {ReactNode} from "react";
import {Button, IconType} from 'rooms';

const b = b_.with('modal');

interface IModal {
    isOpen: boolean,
    children: ReactNode | ReactNode[],
    onClick?: () => void,
    classContainer?: string,

}
const Modal = ({isOpen, children, onClick, classContainer}:IModal) => {
    return isOpen && (<div className={b('background')}>
        <div
            className={[
            b('container'),
            classContainer,
        ].join(' ')}>
            {onClick && (<div className={b('cross-block')}>
                    <Button.Icon
                    className={b('cross')}
                    mods={{
                        [IconType.Mods.Cross]: true,
                        [IconType.SettingIcon.Color]: IconType.Color.Black,
                        [IconType.SettingIcon.HoverColor]: IconType.Color.Red,
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