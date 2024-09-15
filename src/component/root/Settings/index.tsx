import './Setting.scss'

import b_ from "b_";
import React, {memo} from "react";
import {Button, Icon, IconType, Modal} from "rooms";
import {useTheme} from "./reduser";
import {Theme} from "./type";
import {ButtonSize} from "../../../ui-kit/Button/Button.types";
import {IconSize} from "../../../ui-kit/Icon/type";

const settingsStyle = b_.with('settings');

interface ISettings{
    isOpenModal: boolean,
    setOpenedModal: (arg: boolean) => void,
}

const Settings = ({isOpenModal, setOpenedModal}: ISettings) => {

    const {theme, changeTheme} = useTheme();

    return <Modal isOpen={isOpenModal} onClick={() => setOpenedModal(false)}>
        <div className={settingsStyle()}>
            <h3 className={settingsStyle('title')}>Настройки</h3>
            <div className={settingsStyle('item-setting-block')}>
                <h4>Сетлая\Темная Тема</h4>
                <Button.Radio
                    style={{width: '55px'}}
                    suffix={(
                        <Icon
                                className={settingsStyle('radio-icon')}
                                size={IconSize.SMALL}
                                mods={{
                                [IconType.Mods.Moon]: true,
                                [IconType.SettingIcon.Color]: IconType.Color.White
                        }}/>
                 )}
                    prefix={(<Icon
                                className={settingsStyle('radio-icon')}
                                size={IconSize.SMALL}
                                mods={{
                                [IconType.Mods.Sun]: true,
                                [IconType.SettingIcon.Color]: IconType.Color.White
                    }}/>)}
                    size={ButtonSize.LARGE}
                    isActive={theme === Theme.Dark}
                    onClick={()=>{
                        changeTheme(theme === Theme.Dark? Theme.Light: Theme.Dark);
                }}/>
            </div>
        </div>
    </Modal>;
}

export default memo(Settings);
