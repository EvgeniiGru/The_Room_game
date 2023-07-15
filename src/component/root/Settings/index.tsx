import './Setting.scss'

import b_ from "b_";
import React, {memo} from "react";
import {Button, Modal} from "rooms";
import {useTheme} from "./reduser";
import {Theme} from "./type";

const settingsStyle = b_.with('settings');

interface ISettings{
    setOpenedModal: (arg: boolean) => void,
}

const Settings = ({setOpenedModal}: ISettings) => {

    const {theme, changeTheme} = useTheme();

    return <Modal onClick={() => setOpenedModal(false)}>
        <div className={settingsStyle()}>
            <h3 className={settingsStyle('title')}>Настройки</h3>
            <div className={settingsStyle('item-setting-block')}>
                <h4>Сетлая\Темная Тема</h4>
                <Button.Radio isActive={theme === Theme.Dark} onClick={()=>{
                    changeTheme(theme === Theme.Dark? Theme.Light: Theme.Dark);
                }}/>
            </div>
        </div>
    </Modal>;
}

export default memo(Settings);
