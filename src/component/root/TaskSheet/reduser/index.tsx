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
    taskSheet:[
        {id: '1', name: 'Принести мне большой капучино со сливками ', isActive: true},
        {id: '2', name: 'Найти крысе новое увлечение, что бы она не скучала, а то сидит и ' +
                'грызет там у себя чего то не понятное, а толку не от слова совем, что делать, ' +
                'надо кстати еще придумать что делать с фильтрацией заданий решенных, и надо подумать вот' +
                'над чем как ограничить строки что бы можно было просматривать все задания но при этом всем' +
                'не переходить на другие страницы конечно как вариант расчитать  длину строки или' +
                'ограничить пространство, но в любом случа нужно наверное что то придумать с подобием пагинатор' +
                'хотя бы что то похоже на него', isActive: true},
        {id: '3', name: 'ограничить простанство и добавить промотку', isActive: true},
        {id: '4', name: 'Сделать фильтр выполненнных задданий', isActive: true},
        {id: '5', name: 'Придумать подобие', isActive: true},
        ],
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