import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home/home";
import Search from "./Pages/Search/searchSpots";
import Favorite from "./Pages/Favorites/favoritesPage";
import Contact from "./Pages/Contact/contactPage";

// import Footer from "./components/Footer";
import Nav from "./Components/Nav/nav";






function App() {
  return (
    <div className="App">
      <div id="jumbotron"></div>
      
    <Router>
    <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/favorites" component={Favorite} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
    </Router> 

      </div>
  );
}



export default App;