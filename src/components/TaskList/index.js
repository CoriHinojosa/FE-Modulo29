import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Task from './Task';
import { CartH2, CartHr, CartP, CartArticle, ListContainer } from './styles';
import { removeTask } from '../../state/tasks.slice';

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks);

    const handleTaskRemove = (id) => {
        dispatch(removeTask(id));
    }

    return(
        <>
        <CartArticle>
            <CartHr />
            <CartH2>CARRITO</CartH2>
            <ListContainer>
                {
                    tasks.length === 0? (<CartP>No Hay Artículos En El Carrito</CartP>) : (
                     tasks.map(task => (
                        <Task
                            key={task.id}
                            task={task.title}
                            desc={task.price}
                            onRemove={() => handleTaskRemove(task.id)}
                        />
                    ))

                    )

                }
            </ListContainer>
        </CartArticle>
        </>
    )
}

export default TaskList;