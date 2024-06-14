import { FormContainer, ProductsH2, ProductsSection } from './styles';
import Product from "./Product";
import React from 'react';

const AddTaskForm = ({ products }) => {    
    return(
        <>
            <ProductsH2>NEW ARRIVAL</ProductsH2>
            <FormContainer>
                <ProductsSection>
                    {products.map(product => (
                        <Product
                            key={product.id}
                            id={product.id}
                            name={product.title}
                            description={product.description}
                            image={product.image}
                            price={product.price}
                        />
                    ))}
                </ProductsSection>
            </FormContainer>
        </>
    )
}

export default AddTaskForm;