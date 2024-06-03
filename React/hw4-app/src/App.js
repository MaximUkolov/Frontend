import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Router>
            <nav>
              <ul>
                <li>
                  <Link to="/">Главная страница</Link>
                </li>
                <li>
                  <Link to="/about">О нас</Link>
                </li>
              </ul>
            </nav>

            <Route>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Route>
          </Router>
        </div>
      </header>
    </div>
  );
}

export default App;
