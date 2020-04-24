
import React from 'react'
import Key from './keys'

class CountrySearch extends React.Component {

    state = {

        data: [],
        country:""
    }

    getFromApi = (e) => {

        e.preventDefault()
    
      
        fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=${this.state.country}`, {
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



changeCountry = (e) => {

        this.setState({country:""})

        this.setState({country: e.target.value, data:[]})
      
      }

 outputting = (dat) => {if (dat.data.covid19Stats.length < 218 && this.state.country) {

        let dataarr = [...this.state.data]
  
        dataarr.push({country:dat.data.covid19Stats[0].country, confirmed: <p>{dat.data.covid19Stats[0].confirmed}</p>, recovered: <p>{dat.data.covid19Stats[0].recovered}</p>, deaths: <p>{dat.data.covid19Stats[0].deaths}</p>, timestamp: <p>{dat.data.covid19Stats[0].lastUpdate}</p> })

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

        return (
        <div id="countrymaincard">
            <h3>ENTER COUNTRY NAME</h3>
            <form className="forma" onSubmit={this.getFromApi}>
            
                <input id="countryruta" type="text" onChange={(e)=>this.changeCountry(e)}/>
                <button id="countrysearchbtn" type="submit">Search</button>
            
            </form>

            {this.state.country? <div className="countryinfo">
                <h3>COUNTRY DATA</h3>
                {countrydata} 
            </div>:null}
            
        </div>)
    }
}



export default CountrySearch