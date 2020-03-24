import React from 'react';
import ContagionList from './ContagionList'
import CountrySearch from './CountrySearch'
import GlobalSearch from './GlobalSearch'
import Usefullinks from './usefullinks'
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
                    <h1>COVID-19 UPDATES</h1>
                    <p>Get updates on the virus from all over the world</p>
              </header>
              <div className="container">
                  <div className="routcont">
                    <BrowserRouter>
                        <Navbar className="main-nav"
                          activeClassName="main-nav-active"
                        />       
                        <hr></hr> 
                            <div id="warn">
                              <h3>ATTENTION: Please check the dates of the data delivered</h3>
                              <p>The disease spreads progressively and we don´t have access to live updates</p>
                           </div>   
                            <Route path ='/GlobalSearch' component={GlobalSearch}/>
                            <Route path ='/CountrySearch' component={CountrySearch}/>
                            <Route path ='/ContagionList' component={ContagionList}/>
                            <Route path ='/Usefullinks' component={Usefullinks}/>
                    </BrowserRouter>
                    
                  </div>
              </div>
          </div>
  );
}}

export default App;
