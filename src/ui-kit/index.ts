import Background from "./Background";
import {BackImg, SheriffsRoom} from "./Background";
import Icon, {Color, Mods, SettingIcon} from "./Icon";
import IconButton from "./IconButton";
import Image from "./Image";
import Modal from "./Modal";
import {checkedInventory, emptyCheckedInventory, openCheckList, songGetInventory} from "./Song";

const Song = {
    songGetInventory,
    checkedInventory,
    openCheckList,
    emptyCheckedInventory,
}

const Button = {
    Icon: IconButton,
}

const BackgroundType = {
     BackImg,
     SheriffsRoom,
}

const IconType = {
    Mods,
    SettingIcon,
    Color,
}

export {
    Background as Background,
    BackgroundType,
    Button as Button,
    Icon as Icon,
    IconType,
    Image as Image,
    Modal as Modal,
    Song as Song,
}