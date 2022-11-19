import React, {useState} from "react";
import "./App.css";
import {Switch, Route, Redirect} from "react-router-dom";
import StartScreen from "./pages/StartScreen";
import Home from "./pages/Home";
import Register from "./pages/Register";
import QuestionOne from "./pages/QuestionOne";
import QuestionTwo from "./pages/QuestionTwo";
import QuestionThree from "./pages/QuestionThree";
import FilmResult from "./pages/FilmResult";
import MovieHistory from "./pages/MovieHistory";
import {useContext} from "react";
import "./styling/navbar-styling.css";
import "./styling/startScreen.css"
import {AuthContext} from "./context/AuthContext";


function App() {

    function PrivateRoute({ children, isAuth, ...rest}) {
        return (
            <Route {...rest}>
                {isAuth ? children : <Redirect exact to="/" />}
            </Route>
        )
    }


const {isAuth} = useContext(AuthContext);
  return (

    <div className="App">
          <Switch>
              <Route exact path="/"> <Home/> </Route>
              <Route path="/register"> <Register/> </Route>
              <Route path="/start"> { isAuth ?  <StartScreen/> : <Redirect to="/" />} </Route>
              <PrivateRoute path="/question-one" isAuth={isAuth}><QuestionOne/></PrivateRoute>
              <PrivateRoute path="/question-two" isAuth={isAuth}> <QuestionTwo/> </PrivateRoute>
              <PrivateRoute path="/question-three" isAuth={isAuth}> <QuestionThree/> </PrivateRoute>
              <PrivateRoute path="/result" isAuth={isAuth}> <FilmResult/> </PrivateRoute>
              <PrivateRoute path="/movie-history" isAuth={isAuth}> <MovieHistory/> </PrivateRoute>
          </Switch>
    </div>
  );
}

export default App;
