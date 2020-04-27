
import React from 'react'
import Moment from 'react-moment' 
import Key from './keys'

class CountrySearch extends React.Component {

    state = {

        data: [],
        country:"",
        showsearch:""
    }

    componentDidMount = () => {

        this.setState({showsearch:true})
    }

    getFromApi = (e) => {

        e.preventDefault()
    
    this.setState({showsearch:false})
      
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

newSearch = () => {

    this.setState({country:"", showsearch:true})
}

render () {

    const countrydata = this.state.data.map((cas, index) =>
      
          <div className="card"> {index==0?
          
                <h4>COUNTRY AS A WHOLE: {cas.country} </h4>: <h4>COUNTRY (PROVINCE): {cas.country}</h4>}

                <div>CASES CONFIRMED: {cas.confirmed}</div>                      
                <div>CASES RECOVERED: {cas.recovered}</div>
                <div>DEATH CASES: {cas.deaths}</div>              
                <div>Latest update (hh:mm:ss): <Moment durationFromNow>{cas.timestamp}</Moment> from now</div>
                <button className="backToTop" onClick={this.newSearch}>New Search</button>
            </div>)

        return (
        <div id="countrymaincard">

            {this.state.showsearch? 
                        <div>
                            <h3>ENTER COUNTRY NAME</h3>
                            <form className="forma" onSubmit={this.getFromApi}>
                            
                                <input id="countryruta" type="text" onChange={(e)=>this.changeCountry(e)}/>
                                <button id="countrysearchbtn" type="submit">Search</button>
                            </form>
                        </div>:null}
            

            {this.state.showsearch==false? <div className="countryinfo">
                <h3>COUNTRY DATA for {this.state.country.toUpperCase()}</h3>
                {countrydata} 
            </div>:null}
            
        </div>)
    }
}



export default CountrySearch