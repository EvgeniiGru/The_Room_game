import './Header.scss';

import b_ from 'b_'
import React from "react";
import IconButton from "../../../ui-kit/IconButton";
import {Mods} from "../../../ui-kit/Icon";
import useSound from "use-sound";
import {openCheckList} from "../../../ui-kit/Song";

const b = b_.with('header');

const Header = () => {

    const [openSong] = useSound(openCheckList);

    return (<div className={b()}>
        <IconButton mods={{
            [Mods.Notebook]: true,
        }}
        onClick={() => {
            openSong();
        }}
        />
    </div>)
}

export default Header;