import {SyntheticEvent} from "react";

interface CommonHandleEvent {
    event: SyntheticEvent,
    disable?: boolean,
    fn: () => void
}

export const handleFnEvent = ({fn, disable, event}:  CommonHandleEvent) => {
    if(!disable && fn){
        event.stopPropagation()
        fn();
    }
}
