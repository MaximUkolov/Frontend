import logo from "./logo.svg";
import "./App.css";
import Greeting from "./Components/Greeting";
import CurrentTime from "./Components/CurrentTime";
import EventCard from "./Components/EventCard";

function App() {
  return (
    <div className="App">
      <Greeting />
      <CurrentTime />
      <EventCard number="1" event="Футбол" myDate="11.05" place="MSC" />
      <EventCard number="2" event="<Баскет>" myDate="12.05" place="MSC" />
    </div>
  );
}

export default App;
