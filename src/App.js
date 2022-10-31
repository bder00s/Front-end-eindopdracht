import React, {useState} from "react";
import "./App.css";
import {Switch, Route} from "react-router-dom";
import StartScreen from "./pages/StartScreen";
import Home from "./pages/Home";
import Register from "./pages/Register";
import QuestionOne from "./pages/QuestionOne";
import QuestionTwo from "./pages/QuestionTwo";
import QuestionThree from "./pages/QuestionThree";
import FilmResult from "./pages/FilmResult";
import MovieHistory from "./pages/MovieHistory";
import "./styling/navbar-styling.css";

function App() {
    // const [isAuth, toggleIsAuth] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
          <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route path="/register">
                  <Register/>
              </Route>
              <Route path="/start" >
                  <StartScreen />
              </Route>
              <Route path="/question-one"
                     // toggleAuth={toggleIsAuth}
              >
                  <QuestionOne/>
              </Route>
              <Route path="/question-two">
                  <QuestionTwo/>
              </Route>
              <Route path="/question-three">
                  <QuestionThree/>
              </Route>
              <Route path="/result">
                  <FilmResult/>
              </Route>
              <Route path="/movie-history">
                  <MovieHistory/>
              </Route>
          </Switch>
      </header>
    </div>
  );
}

export default App;
