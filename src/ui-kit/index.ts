import Background from "./Background";
import {BackImg, SheriffsRoom} from "./Background";
import Icon, {Color, Mods, Notebook, SettingIcon,} from "./Icon";
import Image, {AllThings, IImageThings} from "./Image";
import Modal from "./Modal";
import {checkedInventory, emptyCheckedInventory, openCheckList, songGetInventory, fridgeOpenCloseDoor} from "./Song";
import DialogCloud, {Position} from "./DialogCloud";
import {getImage} from './Image/function';
import NeonLights from './Animation/NeonLights';
import {getNeonLights} from './Animation/function'
import RoomButton from "./Button";
import DropLight from "./Animation/DropLight";

const Animation = {
    NeonLights,
    DropLight
}

const AnimationFn = {
    getNeonLights,
}

const Song = {
    songGetInventory,
    checkedInventory,
    openCheckList,
    emptyCheckedInventory,
    fridgeOpenCloseDoor,
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

const ImageType = {
    Things:AllThings,
    Settings: IImageThings,
}

const ImageFn = {
    getImage,
}

const DialogType = {
    Position,
}
export {
    Animation,
    AnimationFn,
    Background as Background,
    BackgroundType,
    RoomButton as Button,
    DialogCloud as DialogCloud,
    DialogType,
    Icon as Icon,
    IconType,
    Image as Image,
    ImageFn,
    ImageType,
    Modal as Modal,
    Song as Song,
}
