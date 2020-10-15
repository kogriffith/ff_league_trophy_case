import React from 'react';
import {BrowserRouter as Router,
        Link, 
        Switch,
        Route,
        useParams,
        Redirect} from 'react-router-dom'
import PlayerCard from "./PlayerCard.js"
import Home from "./Home.js"
import CustomNavbar from "./Navbar.js"
import PlayersList from "./PlayersList"
import {Container} from 'reactstrap'

const App = () => {
  return (
    <div className="App">
        <CustomNavbar></CustomNavbar>
        <Container>
        <Switch>
          <Redirect exact from="/" to= "/home" />
          <Route path = "/home">
            <Home/>
          </Route>
          <Route exact path = "/players/:id">
            <PlayerCard></PlayerCard>
          </Route>
        </Switch>
        </Container>
    </div>
  );
}

export default App;
