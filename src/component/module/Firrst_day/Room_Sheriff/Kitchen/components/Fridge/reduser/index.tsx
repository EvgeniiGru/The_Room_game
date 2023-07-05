import React, {
    createContext,
    useContext,
    useReducer
} from "react";
import {AuxPropsChildren} from "../../../../../../../root/type";

enum TCommonOperations {
    OPEN_TOP_DOOR_FRIDGE = 'OPEN_TOP_DOOR_FRIDGE',
    OPEN_BUTTON_DOOR_FRIDGE = 'OPEN_BUTTON_DOOR_FRIDGE',
}

export type TypeSetOpenTopDoorFridge = (isOpenTopDoor: boolean) => void
export type TypeSetOpenBottomDoorFridge = (isOpenBottomDoor: boolean) => void

export interface Fridge {
    isOpenTopDoor: boolean,
    isOpenBottomDoor: boolean,
    setOpenTopDoorFridge: TypeSetOpenTopDoorFridge,
    setOpenBottomDoorFridge: TypeSetOpenBottomDoorFridge,
}


type InitialStateType = Omit<
    Fridge,
    'setOpenTopDoorFridge' |
    'setOpenBottomDoorFridge'
    >

const initialState: InitialStateType = {
    isOpenTopDoor: false,
    isOpenBottomDoor: false,
};

type typeActions = Partial<InitialStateType> & Record<'type', TCommonOperations>

const reducer = (state: InitialStateType, action: typeActions): InitialStateType => {
    switch (action.type) {
        case TCommonOperations.OPEN_TOP_DOOR_FRIDGE:
            return {...state,
                isOpenTopDoor: action.isOpenTopDoor,
            }
        case TCommonOperations.OPEN_BUTTON_DOOR_FRIDGE:
            return {...state,
                isOpenBottomDoor: action.isOpenBottomDoor
            }
        default:
            return state
    }
}

const  FridgeProvider = createContext<Fridge | null>(null);

export const useFridge= () => {
    return useContext(FridgeProvider);
}

export const FridgeProviderComponent = ({children}: AuxPropsChildren): JSX.Element => {

    const [state, dispatch] = useReducer(reducer, initialState, undefined);

    const setOpenTopDoorFridge = (isOpenTopDoor: boolean) =>
        dispatch({type: TCommonOperations.OPEN_TOP_DOOR_FRIDGE , isOpenTopDoor });
    const setOpenBottomDoorFridge = (isOpenBottomDoor: boolean) =>
        dispatch({type: TCommonOperations.OPEN_BUTTON_DOOR_FRIDGE , isOpenBottomDoor });

    return (<FridgeProvider.Provider
        value={{
        isOpenBottomDoor: state.isOpenBottomDoor,
            isOpenTopDoor: state.isOpenTopDoor,
            setOpenTopDoorFridge,
            setOpenBottomDoorFridge
    }}>
    {children}
    </FridgeProvider.Provider>)
}


export default FridgeProviderComponent;