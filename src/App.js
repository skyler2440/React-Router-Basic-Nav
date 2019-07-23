import React, {Component} from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            
          </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
