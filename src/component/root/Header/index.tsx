import './Header.scss';

import b_ from 'b_'
import React from "react";
import {Button, Song, IconType} from 'rooms';
import useSound from "use-sound";
import {useTaskSheet} from "../TaskSheet/reduser";

const b = b_.with('header');

const Header = () => {

    const taskProps = useTaskSheet();
    const [openSong] = useSound(Song.openCheckList, {sprite: {openSong: [100, 500]}});

    return (<div className={b()}>
        <Button.Icon mods={{
            [IconType.Mods.Notebook]: taskProps.isOpen ?  IconType.Notebook.Close : IconType.Notebook.Open,
            [IconType.SettingIcon.Color]: taskProps.isOpen? IconType.Color.White : IconType.Color.Gray,
            [IconType.SettingIcon.HoverColor]: !taskProps.isOpen? IconType.Color.White : IconType.Color.Red,
        }}
        onClick={() => {
            taskProps.setOpenedTaskSheet(taskProps.isOpen);
            openSong({id:'openSong'});
        }}
        className={b('icon-bt')}
        classNameIcon={b('icon')}
        />
    </div>)
}

export default Header;