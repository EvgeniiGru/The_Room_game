import './Header.scss';

import b_ from 'b_'
import React from "react";
import {Button, IconType, Song} from 'rooms';
import useSound from "use-sound";
import {useTaskSheet} from "../TaskSheet/reduser";
import {ButtonSize} from "../../../ui-kit/Button/Button.types";

const b = b_.with('header');

interface IHeader {
    setVisibleSettings: (arg:boolean) => void,
    isVisibleSettings: boolean,
}

const Header = ({isVisibleSettings, setVisibleSettings}: IHeader) => {
    const taskProps = useTaskSheet();
    const [openSong] = useSound(Song.openCheckList,
        {sprite: {openSong: [100, 500]}});

    return (<div className={b()}>
        {!isVisibleSettings && (<Button.Icon
            size={ButtonSize.LARGE}
            mods={{
            [IconType.Mods.Notebook]: taskProps.isOpen ? IconType.Notebook.Close : IconType.Notebook.Open,
            [IconType.SettingIcon.Color]: taskProps.isOpen ? IconType.Color.White : IconType.Color.Gray,
            [IconType.SettingIcon.HoverColor]: IconType.Color.Red
        }}
                      onClick={() => {
                          taskProps.setOpenedTaskSheet(taskProps.isOpen);
                          openSong({id: 'openSong'});
                      }}
                     />)
        }
        {!taskProps.isOpen && (<Button.Icon
            size={ButtonSize.LARGE}
            className={b('icon-bt-setting')}
            onClick={() => {
            setVisibleSettings(!isVisibleSettings);
        }}
                      mods={{
                          [IconType.Mods.Setting]: !isVisibleSettings,
                          [IconType.Mods.Cross]: isVisibleSettings,
                          [IconType.SettingIcon.Color]: isVisibleSettings ? IconType.Color.White : IconType.Color.Gray,
                          [IconType.SettingIcon.HoverColor]: IconType.Color.Red
                      }}
        />)}
    </div>)
}

export default React.memo(Header);
