import styled from 'styled-components';

const AppContainer = styled.main`
width: 100%;
height: 100%;
border-radius: 20px;
border-style: solid;
border-width: thick;
`;

const AppHeader = styled.header`
padding: 25px;
box-sizing: border-box;
border-radius: 20px;
background-color: #ffffff;
`;

const HeaderTitle = styled.h1`
font-weight: 600;
font-size: 40px;
text-align: center;
padding: 10px;
`;

export { AppContainer, AppHeader, HeaderTitle };