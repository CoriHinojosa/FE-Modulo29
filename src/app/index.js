import AddTaskForm from "../components/AddTaskForm";
import TaskList from "../components/TaskList";
import { AppContainer, AppHeader, HeaderTitle } from "./styles";

const App = () => {
  return (
    <>
      <AppContainer>
        <AppHeader>
          <HeaderTitle>・ FASHION STORE ・</HeaderTitle>
          <AddTaskForm />
          <TaskList />
        </AppHeader>
      </AppContainer>
    </>
  );
}

export default App;
