import { useEffect, useState } from "react";
import { addTask, fetchTasks } from "../../../state/tasks.slice";
import { ProductImg, ProductArticle, ProductH3, ProductP, ProductButton, ProductSingle } from "./styles";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ name, description, image, id }) => {
        const tasks= useSelector(state => state.tasks.tasks);    
        const [ formTask, setFormTask ] = useState('');
        const dispatch = useDispatch();
    
        const handleAddTask = (title, price, id) => {
            const newTask = {
                id: id+Date.now(),
                title: title,
                price: price,
            }

            dispatch(addTask(newTask));
            setFormTask('');
        };
    
        useEffect (() => {
            dispatch(fetchTasks());
        }, [dispatch])
    
    return(
            <ProductArticle>
                {
                    tasks.map(task => (
                        <ProductSingle>
                        <ProductImg src={task.image} />
                        <ProductH3>{task.title}</ProductH3>
                        <ProductP>${task.price}</ProductP>
                        <ProductButton onClick={() => handleAddTask(task.title, task.price, task.id)}>
                            Añadir Al Carrito </ProductButton>
                        </ProductSingle>
                    ))
                }
            </ProductArticle>
    )
}

export default Product;
