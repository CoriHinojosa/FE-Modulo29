import { useEffect, useState } from "react";
import { addTask, fetchTasks } from "../../../state/tasks.slice";
import { ProductImg, ProductArticle, ProductH3, ProductP, ProductButton } from "./styles";
import { useDispatch, useSelector } from "react-redux";

const Product = ({id, image, name, price}) => {    
    const dispatch = useDispatch();

    const handleAddTask = () => {
        const newTask = {
            id: id + Date.now(),
            title: name,
            price: price,
            image: image,
        };

        dispatch(addTask(newTask));
    };

    return(
            <ProductArticle>                
                    <ProductImg src={image} />
                    <ProductH3>{name}</ProductH3>
                    <ProductP>${price}</ProductP>
                    <ProductButton onClick={handleAddTask}>
                        Añadir Al Carrito
                    </ProductButton>
            </ProductArticle>
    )
}

export default Product;