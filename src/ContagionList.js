import React from 'react'


class ContagionList extends React.Component {

    state = {

        data: []
    }

componentDidMount =() => {
      
        fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=$`, {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
            "x-rapidapi-key": "49af8e6e8dmsh0f9f2074dabddcbp1a7445jsnedd6de2d5aa8"
          }
        })
        .then(response => response.json()
        )
        .then(data=>this.listoutput(data))
        .catch(err => {
          console.log(err);
        })
      }

listoutput = (dat) => {let dataarr = [...this.state.data];

    let i;

    for (i=0; i<10; i++) {
      dataarr.push({country:dat.data.covid19Stats[i].country, confirmed: <p>{dat.data.covid19Stats[i].confirmed}</p>, recovered: <p>{dat.data.covid19Stats[i].recovered}</p>, deaths: <p>{dat.data.covid19Stats[i].deaths}</p>, timestamp: <p>{dat.data.covid19Stats[i].lastUpdate}</p> })

      this.setState({data: dataarr})}}


render () {

    const list = this.state.data.map(cas =>{
      
      return( <div className="card"> 
              <h4>COUNTRY: {cas.country}</h4>
              <div>CASES CONFIRMED: {cas.confirmed}</div>                      
              <div>CASES RECOVERED: {cas.recovered}</div>
              <div>DEATH CASES: {cas.deaths}</div>              
              <div>Latest update: {cas.timestamp}</div>
          </div>)})

    return (<div className="countryinfo">
            <h3>TOP 10 COUNTRIES</h3>
                {list} 
            </div>)
}
}




export default ContagionList