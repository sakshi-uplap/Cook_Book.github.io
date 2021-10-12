import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'; 
import Categories from './components/Categories/Categories'; 
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Recipes from './components/Recipes/Recipes';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Recipes" component={Recipes}/>
        <Route exact path="/Categories" component={Categories}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Contact" component={Contact}/>
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;