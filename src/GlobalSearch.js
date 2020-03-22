
import React from 'react'

class GlobalSearch extends React.Component {

    state = {

        data:[]
    }

componentDidMount = () => {

      
        fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=$`, {
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

    outputting = (dat) => {let dataarr = [...this.state.data]

        let i;

        for (i=0; i<dat.data.covid19Stats.length; i++) {
  
        dataarr.push({country:dat.data.covid19Stats[i].country, confirmed: <p>{dat.data.covid19Stats[i].confirmed}</p>, recovered: <p>{dat.data.covid19Stats[i].recovered}</p>, deaths: <p>{dat.data.covid19Stats[i].deaths}</p>, timestamp: <p>{dat.data.covid19Stats[i].lastUpdate}</p> })}
        this.setState({data: dataarr})}

    render () {

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
            <div className="globalinfo">
            <div id="warn">
                  <p>Some countries show first the country stats and then individual provinces.</p>
                  <p> Unfortunately we can´t tell to this day the particular name of the provinces.</p>
                  <p>First ocurrance may in that case show the country stats as a whole</p>
              </div>
              <h3>GLOBAL DATA</h3>
              {globaldata} 
          </div>)
    }
}



export default GlobalSearch