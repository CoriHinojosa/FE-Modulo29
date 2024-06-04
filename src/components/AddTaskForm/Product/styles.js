import styled from 'styled-components';

const ProductArticle = styled.article`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: flex-end;
gap: 20px;
`;

const ProductSingle = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`;

const ProductImg = styled.img`
height: 200px;
width: 155px;
border-radius: 15px;
`;

const ProductH3 = styled.h3`
font-size: 20px;
margin-bottom: 0px;
width: 250px;
text-align: center;
`;

const ProductP = styled.p`
font-size: 20px;
`;

const ProductButton = styled.button`
width: 250px;
height: 40px;
font-size: 16px;
font-weight: 600;
border-style: solid;
border-radius: 10px;
margin-bottom: 30px;
cursor: pointer;
`;

export { ProductImg, ProductArticle, ProductH3, ProductP, ProductButton, ProductSingle };
