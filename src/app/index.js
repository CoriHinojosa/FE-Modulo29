import AddTaskForm from "../components/AddTaskForm";
import TaskList from "../components/TaskList";
import { fetchTasks } from "../state/tasks.slice";
import { AppContainer, AppHeader, HeaderTitle } from "./styles";
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


const App = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.tasks.tasks)

  useEffect(() => {
        dispatch(fetchTasks())
      }, [dispatch])
      
  /*
  const products = [
  { id: 1, name: 'Producto 1', description: 'Descripción 1', image: 'imagen1.jpg', price: 10 },
  { id: 2, name: 'Producto 2', description: 'Descripción 2', image: 'imagen2.jpg', price: 20 },
  ];
*/
      
  return (
    <>
      <AppContainer>
        <AppHeader>
          <HeaderTitle>・ FASHION STORE ・</HeaderTitle>
          <AddTaskForm products={products}  />
          <TaskList />
        </AppHeader>
      </AppContainer>
    </>
  );
}

export default App;