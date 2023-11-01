import React, {
    createContext,
    ReactChild,
    ReactChildren,
    useContext,
    useReducer
} from "react";

enum TCommonOperations {
    INVENTORY_MAP = 'INVENTORY_MAP',
    CURRENT_THING = 'CURRENT_THING',
    DELETE_THING = 'DELETE_THING',
}

export type TypeGetThingInInventory = (id: string) => void
export type TypeCheckThingInInventory = (id: string) => void
export type TypeDeleteThingInInventory = (id: string) => void

export interface Inventory {
    inventory: Set<string>,
    usedInventory: Set<string>,
    currentThing: string,
    getThingInInventory: TypeGetThingInInventory,
    checkThingInInventory: TypeCheckThingInInventory,
    deleteThingInInventory: TypeDeleteThingInInventory,
}

type InitialStateType = Omit<
    Inventory,
    'getThingInInventory' |
    'checkThingInInventory'|
    'deleteThingInInventory'
    >

const initialState: InitialStateType = {
    usedInventory: new Set<string>([]),
    inventory: new Set<string>(['cigarettes-pack']),
    currentThing: '',
};

type TypeId = { id?:string };

type typeActions = Partial<InitialStateType & TypeId> & Record<'type', TCommonOperations>

const reducer = (state: InitialStateType, action: typeActions): InitialStateType => {
    switch (action.type) {
        case TCommonOperations.CURRENT_THING:
            return {...state,
                currentThing: action.id === state.currentThing ? '': action.id,
            }
        case TCommonOperations.DELETE_THING:
            state.inventory.delete(action.id);
            return {...state,
            usedInventory: state.usedInventory.add(action.id)
            }
        case TCommonOperations.INVENTORY_MAP:
           return {
               ...state,
               inventory: state.inventory.add(action.id),
           }
        default:
            return state
    }
}

interface AuxPropsChildren {
    children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const InventoryProvider = createContext<Inventory | null>(null);

export const useInventory = () => {
    return useContext(InventoryProvider);
}

export const InventoryProviderComponent = ({children}: AuxPropsChildren): JSX.Element => {

    const [state, dispatch] = useReducer(reducer, initialState, undefined);

    const getThingInInventory = (id: string) =>
        dispatch({type: TCommonOperations.INVENTORY_MAP , id });
    const checkThingInInventory = (id: string) =>
        dispatch({type: TCommonOperations.CURRENT_THING , id });
    const deleteThingInInventory = (id: string) =>
        dispatch({type: TCommonOperations.DELETE_THING , id });

    return (<InventoryProvider.Provider
    value={{
        usedInventory: state.usedInventory,
        inventory: state.inventory,
        currentThing: state.currentThing,
        getThingInInventory,
        checkThingInInventory,
        deleteThingInInventory,
    }}>
        {children}
    </InventoryProvider.Provider>)
}


export default InventoryProviderComponent;