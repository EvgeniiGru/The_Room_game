import React, {
    createContext,
    ReactChild,
    ReactChildren, ReducerState,
    useContext,
    useReducer
} from "react";

enum TCommonOperations {
    INVENTORY_MAP = 'INVENTORY_MAP',
    CURRENT_THING = 'CURRENT_THING',
    DELETE_THING = 'DELETE_THING',
}

interface IThingObj {
    id: string,
    name: string,
    url: string,
    isActive: boolean,
}

export type TypeGetThingInInventory = (thing: IThingObj) => void
export type TypeCheckThingInInventory = (id: string) => void
export type TypeDeleteThingInInventory = (id: string) => void

export interface Inventory {
    inventory: IThingObj[],
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
    inventory: [],
};

type TypeId = { id?:string, thing?: IThingObj };

type typeActions = Partial<InitialStateType & TypeId> & Record<'type', TCommonOperations>

const reducer = (state: InitialStateType, action: typeActions): InitialStateType => {
    switch (action.type) {
        case TCommonOperations.CURRENT_THING:
            return {...state,
                inventory: state.inventory.map((thing) => thing.id === action.id ?
                    {...thing, isActive:!thing.isActive} :
                    {...thing, isActive: false}
                ),
            }
        case TCommonOperations.DELETE_THING:
            return {...state,
                inventory: state.inventory.map((thing) => thing.id === action.id ?
                    {id: '', isActive: false, name: '', url: '',} :
                    {...thing, isActive: false}
                ),
            }
        case TCommonOperations.INVENTORY_MAP:
            const inventory =[...state.inventory];
            inventory.push(action.thing)
            return {...state,
                inventory,
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

export const inventoryProviderComponent = ({children}: AuxPropsChildren): JSX.Element => {

    const [state, dispatch] = useReducer(reducer, initialState, undefined);

    const getThingInInventory = (id: string) =>
        dispatch({type: TCommonOperations.INVENTORY_MAP , id });
        // checkThingInInventory: TypeCheckThingInInventory,
        // deleteThingInInventory: TypeDeleteThingInInventory,
    return (<InventoryProvider.Provider
    value={{
        inventory: state.inventory,
        getThingInInventory,
    }}>
        {children}
    </InventoryProvider.Provider>)
}


export default inventoryProviderComponent;