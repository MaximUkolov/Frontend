import logo from "./logo.svg";
import "./App.css";
import Message from "./Components/Message";

function App() {
  return (
    <div className="App">
      <h1 className="header">Переданный текст</h1>
      <Message 
      text="Hello world"
      />
    </div>
  );
}

export default App;
