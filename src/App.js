import React from "react";
import { BrowserRouter, Switch, Route, NavLink} from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import {FaMapMarkedAlt} from "react-icons/fa";
import {GiUsaFlag} from "react-icons/gi";
import {AiFillHome} from "react-icons/ai";

import "./App.css";
// import Movie from "./pages/Movie";
// import Profile from "./pages/Profile";
import Division from "./pages/Division";
import DivisionDetail from "./pages/DivisionDetail";
import City from "./pages/City";
import CityDetail from "./pages/CityDetail";
import Profile from "./pages/Profile";
import MainMenu from "./pages/MainMenu";

function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">City and Division Encyclopedia</p>
      </header>

      <Switch>
        <Route exact path="/" component={MainMenu} />
        <Route path="/MainMenu" component={MainMenu} />
        <Route path="/division" component={Division} />
        <Route path="/divisiondetail/:index" component={DivisionDetail}/>
        <Route path="/city" component={City} />
        <Route path="/citydetail/:index" component={CityDetail}/>
        <Route path="/Profile" component={Profile} />
      </Switch>

      <footer>
      <NavLink to="/MainMenu" className="iconWrapper">
          <AiFillHome className="icon" />
          Main Menu
        </NavLink>
        <NavLink to="/division" className="iconWrapper">
          <FaMapMarkedAlt className="icon" />
          Division
        </NavLink>
        <NavLink to="/city" className="iconWrapper">
          <GiUsaFlag className="icon" />
          City
        </NavLink>
        <NavLink to="/Profile" className="iconWrapper">
          <CgProfile className="icon" />
          Profile
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;
