import {SyntheticEvent} from "react";

interface IHandleOnClick {
    onClick: () => void,
    event: SyntheticEvent,
    disable: boolean,
}

export const handleOnClick = ({onClick, disable, event}:  IHandleOnClick) => {
    if(!disable){
        event.stopPropagation()
        onClick();
    }
}
