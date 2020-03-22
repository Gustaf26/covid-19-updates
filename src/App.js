import React from 'react';
import ContagionList from './ContagionList'
import CountrySearch from './CountrySearch'
import GlobalSearch from './GlobalSearch'
import Navbar from './Navbar'
import { BrowserRouter, Route } from 'react-router-dom'

//import axios from 'axios'

import './App.css';

class App extends React.Component {

state = {

}

render () {

  return (
          <div className="App">
              <header className="App-header">
                    <h1>SEARCH FOR CORONA UPDATES ALL OVER THE WORLD</h1>
              </header>
              <div className="container">
                  <div className="usefulLinks">
                  <h2>USEFUL LINKS</h2>
                    <ul>
                      <li><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"> World Health Organization</a></li>
                    </ul>
                  </div>
                  <div className="routcont">
                  <BrowserRouter>
                      <Navbar className="main-nav"
                        activeClassName="main-nav-active"
                      />       
                      <hr></hr>    
                          <Route path ='/GlobalSearch' component={GlobalSearch}/>
                          <Route path ='/CountrySearch' component={CountrySearch}/>
                          <Route path ='/ContagionList' component={ContagionList}/>
                  </BrowserRouter>
                  </div>
              </div>
          </div>
  );
}}

export default App;
