import './TaskSheet.scss';

import b_ from 'b_';
import React, {useMemo} from "react";
import {useTaskSheet} from "./reduser";
import useSound from "use-sound";
import {Song, Modal} from "rooms";

const b = b_.with('task-sheet');

const TaskList = () => {
    const taskProps = useTaskSheet();
    const [openSong] = useSound(Song.openCheckList, {sprite: {openSong: [100, 500]}});

    const taskSheetComponent = useMemo(()=> taskProps.taskSheet.map(task => (
     <div className={b('element-task')}>
        <h4 className={b('text', {cross: task.isActive})}>{task.name}</h4>
    </div>
    )), [] )

    return <>
        {taskProps.isOpen && (<Modal
           onClick={() => {
               openSong({id: 'openSong'});
               taskProps.setOpenedTaskSheet(taskProps.isOpen);
           }}
           classContainer={b('modal')}
    >
        <div className={b('cell')}>
            <div className={b('title')}>
                <h2 className={b('text')}>Задания</h2>
            </div>
            <div className={b('block-task')}>
                {taskSheetComponent}
            </div>
        </div>
    </Modal>)}</>
};

export default React.memo(TaskList);
