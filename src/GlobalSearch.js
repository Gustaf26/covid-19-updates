
import React from 'react'
import Key from './keys'

class GlobalSearch extends React.Component {

    state = {

        data:[]
    }

componentDidMount = () => {

      
        fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=$`, {
          "method": "GET",
          "headers": {
              "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
              "x-rapidapi-key": `${Key}`
          }
      })
      .then(response => response.json()
      )
      .then(data=>this.outputting(data))
      .catch(err => {
          console.log(err);
      })}

    outputting = (dat) => {let dataarr = [...this.state.data]

        let i;

        for (i=0; i<dat.data.covid19Stats.length; i++) {
  
        dataarr.push({country:dat.data.covid19Stats[i].country, province: dat.data.covid19Stats[i].province, confirmed: <p>{dat.data.covid19Stats[i].confirmed}</p>, recovered: <p>{dat.data.covid19Stats[i].recovered}</p>, deaths: <p>{dat.data.covid19Stats[i].deaths}</p>, timestamp: <p>{dat.data.covid19Stats[i].lastUpdate}</p> })}
        this.setState({data: dataarr})}

    render () {

        const globaldata = this.state.data.map(cas =>{

            if (cas.country=="US" || cas.country=="China") {return}
          
          
            else { return( <div className="card"> 
                  <h4>COUNTRY: {cas.country}</h4>
                   {cas.province!=""?<h5>PROVINCE: {cas.province}</h5>:null}
                  <div>CASES CONFIRMED: {cas.confirmed}</div>                      
                  <div>CASES RECOVERED: {cas.recovered}</div>
                  <div>DEATH CASES: {cas.deaths}</div>              
                  <div>Latest update: {cas.timestamp}</div>
              </div>)}})

        return (
            <div className="globalinfo">
              <h3>GLOBAL DATA</h3>
              {globaldata} 
          </div>)
    }
}



export default GlobalSearch