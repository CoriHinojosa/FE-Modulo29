import styled from "styled-components";

const TaskContainer = styled.section`
display: flex;
align-items: center;
padding: 12px;
box-sizing: border-box;
margin-bottom: 10px;
`;

const TaskText = styled.p`
flex-grow: 1;
text-decoration: none;
font-size: 20px;
margin-top: 0;
`;

const RemoveButton = styled.button`
width: 150px;
height: 40px;
font-size: 16px;
font-weight: 600;
border-style: solid;
border-radius: 10px;
margin-bottom: 30px;
cursor: pointer;
`;

export { TaskContainer, TaskText, RemoveButton };