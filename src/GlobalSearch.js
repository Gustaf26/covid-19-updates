import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Key from "./keys";

class GlobalSearch extends React.Component {
  state = {
    data: [],
  };

  componentDidMount = () => {
    fetch(
      `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=$`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
          "x-rapidapi-key": `${Key.Key}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => this.outputting(data))
      .catch((err) => {
        console.log(err);
      });
  };

  topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  outputting = (dat) => {
    let dataarr = [...this.state.data];

    let i;

    for (i = 0; i < dat.data.covid19Stats.length; i++) {
      dataarr.push({
        country: dat.data.covid19Stats[i].country,
        province: dat.data.covid19Stats[i].province,
        confirmed: <p>{dat.data.covid19Stats[i].confirmed}</p>,
        recovered: <p>{dat.data.covid19Stats[i].recovered}</p>,
        deaths: <p>{dat.data.covid19Stats[i].deaths}</p>,
        timestamp: <p>{dat.data.covid19Stats[i].lastUpdate}</p>,
      });
    }
    this.setState({ data: dataarr });
  };

  render() {
    const globaldata = this.state.data.map((cas) => {
      if (cas.country == "US" || cas.country == "China") {
        return;
      } else {
        return (
          <div className="card">
            <img
              className="global_image"
              src="https://media.istockphoto.com/vectors/virus-bacteria-vector-background-cells-disease-outbreak-coronavirus-vector-id1211544068?k=6&m=1211544068&s=612x612&w=0&h=IvZo-HIL4o6qhUaTno8SKcnPmBf6niW1YEBjBzDABHk="
            />
            <h4>COUNTRY: {cas.country}</h4>
            {cas.province != "" ? <h5>PROVINCE: {cas.province}</h5> : null}
            <div>CASES CONFIRMED: {cas.confirmed}</div>
            <div>CASES RECOVERED: {cas.recovered}</div>
            <div>DEATH CASES: {cas.deaths}</div>
            <div>
              Latest update (hh:mm:ss):{" "}
              <Moment durationFromNow>{cas.timestamp}</Moment> from now
            </div>
            <button className="backToTop" onClick={this.topFunction}>
              Back to top
            </button>
          </div>
        );
      }
    });

    return (
      <div className="globalinfo">
        <h3>GLOBAL DATA</h3>
        {globaldata}
      </div>
    );
  }
}

export default GlobalSearch;
