import Background from "./Background";
import {BackImg, SheriffsRoom} from "./Background";
import Icon, {Color, Mods, Notebook, SettingIcon,} from "./Icon";
import IconButton from "./IconButton";
import Image, {AllThings, IImageThings} from "./Image";
import Modal from "./Modal";
import {checkedInventory, emptyCheckedInventory, openCheckList, songGetInventory, fridgeOpenCloseDoor} from "./Song";

const Song = {
    songGetInventory,
    checkedInventory,
    openCheckList,
    emptyCheckedInventory,
    fridgeOpenCloseDoor,
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
    Notebook,
}

const Images = {
    AllThings,
}

export {
    Background as Background,
    BackgroundType,
    Button as Button,
    Icon as Icon,
    IconType,
    Image as Image,
    IImageThings as Things,
    Images,
    Modal as Modal,
    Song as Song,
}