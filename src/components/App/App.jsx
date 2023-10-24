import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import "./App.css";
import AboutPage from "../AboutPage/AboutPage";
import UserPage from "../UserPage/UserPage";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import Games from "../Games/Games";
import Rounds from "../Rounds/Rounds";
import Profile from "../Profile/Profile";
import History from "../History/History";
import GamesPage from "../GamesPage/GamesPage";
import ThreeRing from "../ThreeRing/ThreeRing";
import FourRing from "../FourRing/FourRing";
import FiveRing from "../FiveRing/FiveRing";
import Trap from "../Trap/Trap";
import QuickRound from "../QuickRound/QuickRound";
import Results from "../Results/Results";
import SuccessPage from "../SuccessPage/SuccessPage";
import TestComp from "../TestComponent/TestComponent";
import MiniDrawer from "../MiniDrawer/MiniDrawer";
import Train from "../Train/Train";
import SpeedDial from "../SpeedDial/SpeedDial";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
    dispatch({ type: "FETCH_GAMES" });
    // dispatch({ type: "FETCH_BEST" });
    dispatch({ type: "FETCH_ROUNDS" });
    dispatch({ type: "FETCH_TOTAL_ROUNDS" });
  }, [dispatch]);

  return (
    <Router>
      <div>
        {/* <Nav /> */}
        {/* <MiniDrawer /> */}
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute exact path="/games-admin">
            <Games />
          </ProtectedRoute>

          <ProtectedRoute exact path="/rounds-admin">
            <Rounds />
          </ProtectedRoute>

          <ProtectedRoute exact path="/profile">
            <Profile />
          </ProtectedRoute>

          <ProtectedRoute exact path="/history">
            <History />
          </ProtectedRoute>

          <ProtectedRoute exact path="/train">
            <Train />
          </ProtectedRoute>

          <ProtectedRoute exact path="/games">
            <GamesPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows game page else shows LoginPage
            exact
            path="/3-ring"
          >
            <ThreeRing />
          </ProtectedRoute>

          <ProtectedRoute exact path="/4-ring">
            <FourRing />
          </ProtectedRoute>

          <ProtectedRoute exact path="/5-ring">
            <FiveRing />
          </ProtectedRoute>

          <ProtectedRoute exact path="/trap">
            <Trap />
          </ProtectedRoute>

          <ProtectedRoute exact path="/success">
            <SuccessPage />
          </ProtectedRoute>

          <ProtectedRoute exact path="/results">
            <Results />
          </ProtectedRoute>

          <ProtectedRoute exact path="/quickround">
            <QuickRound />
          </ProtectedRoute>

          <ProtectedRoute exact path="/test">
            <MiniDrawer />
          </ProtectedRoute>

          <Route exact path="/login">
            {user.user_id ? (
              // If the user is already logged in,
              // redirect to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          <Route exact path="/registration">
            {user.user_id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the registration page
              <RegisterPage />
            )}
          </Route>

          <Route exact path="/home">
            {user.user_id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the Landing page
              <LandingPage />
            )}
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <SpeedDial />
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
