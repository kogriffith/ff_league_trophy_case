import React from 'react';
import {BrowserRouter as Router,
        Link, 
        Switch,
        Route,
        useParams,
        Redirect} from 'react-router-dom'
import PlayerCard from "./PlayerCard.js"
import Home from "./Home.js"
import Navbar from "./Navbar.js"
import PlayersList from "./PlayersList"

const App = () => {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Redirect exact from="/" to= "/home" />
          <Route path = "/home">
            <Home/>
          </Route>
          <Route exact path = "/players">
            <PlayersList></PlayersList>
          </Route>
          <Route exact path = "/players/:id">
            <PlayerCard></PlayerCard>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
