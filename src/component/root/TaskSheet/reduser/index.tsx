import React, {
    createContext,
    ReactChild,
    ReactChildren,
    useContext,
    useReducer
} from "react";

enum TCommonOperations {
    SET_OPENED_TASK_SHEET = 'SET_OPENED_TASK_SHEET',
    SET_TASK_SHEET  = 'SET_TASK_SHEET',
    SET_ACTIVE_TASK = 'SET_ACTIVE_TASK'
}

interface ITask {
    id: string,
    name: string,
    isActive: boolean,
}

export type typeSetTaskSheet  = (task: ITask) => void
export type typeSetActiveTask  = (id: string) => void
export type typeSetOpenedTaskSheet  = (isOpen: boolean) => void

export interface ITaskSheet {
    isOpen: boolean
    taskSheet: ITask[],
    setTaskSheet: typeSetTaskSheet,
    setActiveTask: typeSetActiveTask,
    setOpenedTaskSheet: typeSetOpenedTaskSheet
}

type InitialStateType = Omit<
    ITaskSheet,
    'setTaskSheet' |
    'setActiveTask'|
    'setOpenedTaskSheet'
    >

const initialState: InitialStateType = {
    taskSheet:[],
    isOpen: false,
};

type idTask = {id:string, task: ITask}

type typeActions = Partial<ITaskSheet & idTask> & Record<'type', TCommonOperations>

const reducer = (state: InitialStateType, action: typeActions): InitialStateType => {
    switch (action.type) {
        case TCommonOperations.SET_TASK_SHEET:
            state.taskSheet.unshift(action.task);
            return {...state}
        case TCommonOperations.SET_ACTIVE_TASK:
            const taskSheetNew = [...state.taskSheet].map(t => t.id === action.id ? {...t, isActive: false} : t)
            return {...state,
                taskSheet: taskSheetNew,
            }
        case TCommonOperations.SET_OPENED_TASK_SHEET:
            return {...state,
                isOpen: !action.isOpen,
            }
        default:
            return state
    }
}

interface AuxPropsChildren {
    children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const TaskSheetProvider = createContext<ITaskSheet | null>(null);

export const useTaskSheet = () => {
    return useContext(TaskSheetProvider);
}

export const TaskSheetProviderComponent = ({children}: AuxPropsChildren): JSX.Element => {

    const [state, dispatch] = useReducer(reducer, initialState, undefined);

    const setActiveTask = (id: string) =>
        dispatch({type: TCommonOperations.SET_ACTIVE_TASK , id });
    const setTaskSheet = (task: ITask) =>
        dispatch({type: TCommonOperations.SET_TASK_SHEET , task });
    const setOpenedTaskSheet  = (isOpen: boolean) =>
        dispatch({type: TCommonOperations.SET_OPENED_TASK_SHEET , isOpen });

    return (<TaskSheetProvider.Provider
        value={{
            isOpen: state.isOpen,
            taskSheet: state.taskSheet,
            setActiveTask,
            setTaskSheet,
            setOpenedTaskSheet,
    }}>
    {children}
    </TaskSheetProvider.Provider>)
}


export default TaskSheetProviderComponent;