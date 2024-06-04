import React from 'react';
import { TaskContainer, TaskText, RemoveButton } from './styles';

const Task = ({ task, desc, onRemove }) => {
    return(
        <TaskContainer>
            <TaskText>･ <b>{task}</b>  [${desc}]</TaskText>
            <RemoveButton onClick={onRemove}>Eliminar</RemoveButton>
        </TaskContainer>
    )
}

export default Task;