import Container from "./components/Container";
import DataContainer from "./components/DataContainer";
import Input from "./components/Input";
import FoodTitle from "./components/TodoTitle";
import "./App.css";
import WelcomeMsg from "./components/WelcomeMsg";
import TodoItemContextProvider from "./store/ItemStore";


function App() {
  
  return (
  <TodoItemContextProvider>
      <Container>
        <FoodTitle />
        <Input />
        <WelcomeMsg />
        <DataContainer />
      </Container>

  </TodoItemContextProvider>
   
  );
}

export default App;
