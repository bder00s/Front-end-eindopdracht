import React, {createContext, useState} from "react";
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
import "./styling/filmResult.css"
import "./styling/login&register.css"
import {AuthContext} from "./context/AuthContext";


export const appContext = createContext({});

function App() {
    // Question 2
    const [userMood, changeUserMood] = useState("")

    // Question 3
    const [changeMood, toggleChangeMood] = useState("no");

    function PrivateRoute({children, isAuth, ...rest}) {
        return (
            <Route {...rest}>
                {isAuth ? children : <Redirect exact to="/"/>}
            </Route>
        )
    }


    const {isAuth} = useContext(AuthContext);

    return (
        <div className="App">
            <appContext.Provider value={{userMood, changeUserMood, changeMood, toggleChangeMood}}>
                <Switch>
                    <Route exact path="/"> <Home/> </Route>
                    <Route path="/register"> <Register/> </Route>
                    <Route path="/start"> {isAuth.isAuth ? <StartScreen/> : <Redirect to="/"/>} </Route>
                    <PrivateRoute path="/question-one" isAuth={isAuth}><QuestionOne/></PrivateRoute>
                    <PrivateRoute path="/question-two" isAuth={isAuth}> <QuestionTwo/> </PrivateRoute>
                    <PrivateRoute path="/question-three" isAuth={isAuth}> <QuestionThree/> </PrivateRoute>
                    <PrivateRoute path="/result" isAuth={isAuth}> <FilmResult/> </PrivateRoute>
                    <PrivateRoute path="/movie-history" isAuth={isAuth}> <MovieHistory/> </PrivateRoute>
                </Switch>
            </appContext.Provider>
        </div>
    );
}

export default App;
