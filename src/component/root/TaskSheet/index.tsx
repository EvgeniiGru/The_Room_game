import './TaskSheet.scss';

import b_ from 'b_';
import React, {useState} from "react";
import {useTaskSheet} from "./reduser";
import useSound from "use-sound";
import {Song, Modal} from "room";

const b = b_.with('task-sheet');

const TaskList = () => {
    const taskProps = useTaskSheet();
    const [taskList, setTaskList] = useState([{code: '1', name: 'Первая задача', isActive: true}])
    const [openSong] = useSound(Song.openCheckList, {sprite: {openSong: [100, 500]}});

    return <Modal isOpen={taskProps.isOpen}
                  onClick={()=>taskProps.setOpenedTaskSheet(taskProps.isOpen)}
                  classContainer={b('modal')}
    >
        <div className={b('cell')}>
            <div className={b('block-task')}>
                <div className={b('element-task')}>
                    <h4 className={b('title')}>Первавя задача которую мы реализуем, а дальше вторая</h4>
                </div>
                <div className={b('element-task')}>
                    <h4 className={b('title')}>Вторая задача которую мы реализуем, а дальше не будет ни какая</h4>
                </div>
            </div>
        </div>

        </Modal>
};

export default TaskList;