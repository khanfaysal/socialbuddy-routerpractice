import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from './components/About/About.js';
import Home from './components/Home/Home.js';
import PostDetail from './components/PostDetail/PostDetail.js';


function App() {
  
  return (
    <div className="App">
       <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/home">Home 1</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/post/:id">
            <PostDetail />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
