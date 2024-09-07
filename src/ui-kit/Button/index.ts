import Button from "./Button";
import IconButton from "./IconButton";
import RadioButton from "./RadioButton";


type BaseTypeButton = typeof Button;

interface IButton extends BaseTypeButton {
    Icon: typeof IconButton;
    Radio: typeof RadioButton;
}

const RoomButton = Button as IButton;

RoomButton.Icon = IconButton;
RoomButton.Radio = RadioButton;

export default RoomButton;