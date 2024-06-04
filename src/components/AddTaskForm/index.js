import { FormContainer, ProductsH2, ProductsSection } from './styles';
import Product from "./Product";
import React from 'react';

const AddTaskForm = () => {
    return(
        <>
        <ProductsH2>NEW ARRIVAL</ProductsH2>
        <FormContainer>
            <ProductsSection>
                <Product />
            </ProductsSection>
        </FormContainer>
        </>
    )
}

export default AddTaskForm;