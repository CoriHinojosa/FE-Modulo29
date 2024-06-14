import styled from "styled-components";

const FormContainer = styled.article`
margin-bottom: 25px;
`;

const ProductsSection = styled.section`
display: flex;
gap: 15px;
align-items: flex-end;
`;

const Input = styled.input`
flex-grow: 1;
padding: 10px;
box-sizing: border-box;
border: none;
border-radius: 5px;
`;

const Button = styled.button`
padding: 10px;
box-sizing: border-box;
background-color: beige;
border: none;
border-radius: 7px;
cursor: pointer;
`;

const ProductsH2 = styled.h2`
text-align: center;
font-size: 25px;
padding-bottom: 30px;
`;

export { FormContainer, Input, Button, ProductsH2, ProductsSection };
