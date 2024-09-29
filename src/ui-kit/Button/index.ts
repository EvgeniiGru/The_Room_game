import Button from "./Button";
import IconButton from "./IconButton";
import RadioButton from "./RadioButton";
import ButtonGroup from "./Goup/Group";


type BaseTypeButton = typeof Button;

interface IButton extends BaseTypeButton {
    Icon: typeof IconButton;
    Radio: typeof RadioButton;
    Group: typeof ButtonGroup;
}

const RoomButton = Button as IButton;

RoomButton.Icon = IconButton;
RoomButton.Radio = RadioButton;
RoomButton.Group = ButtonGroup;

export default RoomButton;