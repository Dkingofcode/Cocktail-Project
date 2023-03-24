import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from ".pages/Error";

// import components 
import Navbar from './components/Navbar'


const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
            <h2>app component</h2>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <Home />
            </Route>
            <Route exact path="/cocktail/:id">
              <SingleCocktail />
            </Route>
            <Route exact path="*">
              <Error />
            </Route>
            </Switch>
        </Router>
    )
}



export default App;