import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter";
import InputText from "./components/inputText";
import TodoList from "./components/todoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <InputText />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
