import React from 'react';
import Header from './Header'
import './App.css';
import Sidebar from './Sidebar'
import RecommendedVideos from './RecommendedVideos'
import SearchPage from './SearchPage'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
        <Route exact path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
          <Route path="/search/:searchTerm">
           <div className="app__page">
            <Sidebar />
            <SearchPage />
           </div>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
