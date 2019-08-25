import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Portfolio from './views/Portfolio';
import About from './views/About';
import Contact from './views/Contact';
import FourOhFour from './views/404';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
