import logo from "./logo.svg";
import "./App.css";
import CommentsList from "./components/CommentsList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CommentsList />
      </header>
    </div>
  );
}

export default App;
