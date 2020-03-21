import React from 'react';
import ContagionList from './ContagionList'

//import axios from 'axios'

import './App.css';

class App extends React.Component {

state = {

  data:[],
  global:false,
  start: false,
  listelement:true

}

getFromApi = (e) => {

  e.preventDefault()

  this.setState({start:true})

  if (!this.state.country) {this.setState({global:true})}

  fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=${this.state.country}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
		"x-rapidapi-key": "49af8e6e8dmsh0f9f2074dabddcbp1a7445jsnedd6de2d5aa8"
	}
})
.then(response => response.json()
)
.then(data=>this.outputting(data))
.catch(err => {
	console.log(err);
})}

changeCountry = (e) => {

  this.setState({country: e.target.value, data:[], global:false, start: false})

}

callLists =(e) => {

  e.preventDefault()

  const id = e.target.id

  fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=$`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
      "x-rapidapi-key": "49af8e6e8dmsh0f9f2074dabddcbp1a7445jsnedd6de2d5aa8"
    }
  })
  .then(response => response.json()
  )
  .then(data=>this.listoutput(data, id))
  .catch(err => {
    console.log(err);
  })
}

listoutput = (dat, id) => {

  this.setState({listelement: false})

    if (id=="high") {

      let dataarr = [...this.state.data];

      let i;
  
      for (i=0; i<20; i++) {
        dataarr.push({country:dat.data.covid19Stats[i].country, confirmed: <p>{dat.data.covid19Stats[i].confirmed}</p>, recovered: <p>{dat.data.covid19Stats[i].recovered}</p>, deaths: <p>{dat.data.covid19Stats[i].deaths}</p>, timestamp: <p>{dat.data.covid19Stats[i].lastUpdate}</p> })

        this.setState({data: dataarr})
    }}

    else {let dataarr = [...this.state.data];

      let i;
  
      for (i=200; i<220; i++) {

        dataarr.push({country:dat.data.covid19Stats[i].country, confirmed: <p>{dat.data.covid19Stats[i].confirmed}</p>, recovered: <p>{dat.data.covid19Stats[i].recovered}</p>, deaths: <p>{dat.data.covid19Stats[i].deaths}</p>, timestamp: <p>{dat.data.covid19Stats[i].lastUpdate}</p> })}

        this.setState({data: dataarr})}

        this.setState({global:true, start:true})

}


outputting = (dat) => {
  

      if(dat.data.covid19Stats.length>218 && this.state.country) {alert("COUNTRY NOT FOUND OR NOT IN THE LIST");
      this.setState({country: "" })
      return}

      else if (dat.data.covid19Stats.length < 218 && this.state.country) {

        let dataarr = [...this.state.data]
  
        dataarr.push({country:dat.data.covid19Stats[0].country, confirmed: <p>{dat.data.covid19Stats[0].confirmed}</p>, recovered: <p>{dat.data.covid19Stats[0].recovered}</p>, deaths: <p>{dat.data.covid19Stats[0].deaths}</p>, timestamp: <p>{dat.data.covid19Stats[0].lastUpdate}</p> })

        this.setState({data: dataarr})
      }
      
      else {let i;

      let dataarr = [...this.state.data]

      for (i=0; i<dat.data.covid19Stats.length; i++) {

      dataarr.push({country:dat.data.covid19Stats[i].country, confirmed: <p>{dat.data.covid19Stats[i].confirmed}</p>, recovered: <p>{dat.data.covid19Stats[i].recovered}</p>, deaths: <p>{dat.data.covid19Stats[i].deaths}</p>, timestamp: <p>{dat.data.covid19Stats[i].lastUpdate}</p> })}
      this.setState({data: dataarr})
    }}


render () {

      const countrydata = this.state.data.map((cas, index) =>
      
          <div className="card"> {index==0?<h4>COUNTRY AS A WHOLE: {cas.country} </h4>: <h4>COUNTRY (PROVINCE): {cas.country}</h4>}
              <div>CASES CONFIRMED: {cas.confirmed}</div>                      
              <div>CASES RECOVERED: {cas.recovered}</div>
              <div>DEATH CASES: {cas.deaths}</div>              
              <div>Latest update: {cas.timestamp}</div>
              </div>)

      const globaldata = this.state.data.map(cas =>{

        if (cas.country=="US" || cas.country=="China") {return}
      
      
        else { return( <div className="card"> 
              <h4>COUNTRY: {cas.country}</h4>
              <div>CASES CONFIRMED: {cas.confirmed}</div>                      
              <div>CASES RECOVERED: {cas.recovered}</div>
              <div>DEATH CASES: {cas.deaths}</div>              
              <div>Latest update: {cas.timestamp}</div>
          </div>)}})

  return (
    <div className="App">
      <header className="App-header">
        <h1>SEARCH FOR CORONA UPDATES ALL OVER THE WORLD</h1>
      </header>
        <h2>SEARCH BY COUNTRIES TO GET THE LATEST UPDATES</h2>
        <h3>(...Or just press <em>search</em> to see global statistics, excepting US and China)</h3>
        <form onSubmit={this.getFromApi}>
          <label>
            <input type="text" onChange={(e)=>this.changeCountry(e)}/>
            <button type="submit">SEARCH</button>
          </label>
        </form>

        {this.state.listelement?<ContagionList send={this.callLists}/>:null}
        
        <div className="info">

          {this.state.start? 
          
          <div> {this.state.global? 
            <div className="globalinfo">
              <div id="warn">
                    <p>Some countries show first the country stats and then individual provinces.</p>
                    <p> Unfortunately we can´t tell to this day the particular name of the provinces.</p>
                    <p>First ocurrance may in that case show the country stats as a whole</p>
                </div>
                <h4>GLOBAL DATA</h4>
                {globaldata} 
            </div>: 
            <div className="countryinfo">
                <h4>COUNTRY DATA</h4>
                {countrydata} 
            </div>}</div>:null}
         
        </div>
    </div>
  );
}}

export default App;
