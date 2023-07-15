import React, {
    createContext,
    ReactChild,
    ReactChildren,
    useContext,
    useReducer
} from "react";
import {AuxPropsChildren} from "../../type";


enum TCommonOperations {
    RIGHT_LOCATION = 'RIGHT_LOCATION',
    LEFT_LOCATION = 'CURRENT_THING',
}

export type TypeGetRightLocation = (rightLocation: string) => void
export type TypeGetLeftLocation = (leftLocation: string) => void

export interface Location {
    rightLocation: string,
    leftLocation: string,
    getRightLocation: TypeGetRightLocation,
    getLeftLocation: TypeGetLeftLocation,
}


type InitialStateType = Omit<
    Location,
    'getRightLocation' |
    'getLeftLocation'
    >

const initialState: InitialStateType = {
    rightLocation: '',
    leftLocation: '',
};

type typeActions = Partial<InitialStateType> & Record<'type', TCommonOperations>

const reducer = (state: InitialStateType, action: typeActions): InitialStateType => {
    switch (action.type) {
        case TCommonOperations.RIGHT_LOCATION:
            return {...state,
                rightLocation: action.rightLocation,
            }
        case TCommonOperations.LEFT_LOCATION:
            return {...state,
                leftLocation: action.leftLocation
            }
        default:
            return state
    }
}

const LocationProvider = createContext<Location | null>(null);

export const useLocation= () => {
    return useContext(LocationProvider);
}

export const LocationProviderComponent = ({children}: AuxPropsChildren): JSX.Element => {

    const [state, dispatch] = useReducer(reducer, initialState, undefined);

    const getRightLocation = (rightLocation: string) =>
        dispatch({type: TCommonOperations.RIGHT_LOCATION , rightLocation });
    const getLeftLocation = (leftLocation: string) =>
        dispatch({type: TCommonOperations.LEFT_LOCATION , leftLocation });

    return (<LocationProvider.Provider
        value={{
            rightLocation: state.rightLocation,
            leftLocation: state.leftLocation,
            getRightLocation,
            getLeftLocation,
    }}>
    {children}
    </LocationProvider.Provider>)
}


export default LocationProviderComponent;
