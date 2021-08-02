import React, { useRef, useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

// import Tooltip from "react-bootstrap/Tooltip";
// import Overlay from "react-bootstrap/Overlay";
// import Button from "react-bootstrap/Button";
import WorldMap from "react-world-map";
import Key from "./keys";

function Map() {
  const [selected, onSelect] = useState(null);
  const [allData, setAllData] = useState("");
  const selectionIndex = useRef(0);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://covid-19-coronavirus-statistics2.p.rapidapi.com/continentData",
      headers: {
        "x-rapidapi-key": `${Key.RegionKey}`,
        "x-rapidapi-host": "covid-19-coronavirus-statistics2.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setAllData(response.data.result);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const getMyToolTipFunction = (cont) => {
    onSelect(cont);
    selectionIndex.current += 1;
    const popup = document.getElementById("displayText");
    if (selectionIndex.current === 1) {
      popup.toggleAttribute("hidden");
    }
    if (!cont) {
      popup.toggleAttribute("hidden");
      selectionIndex.current = 0;
    }
    let continents = {
      "North America": "na",
      "South America": "sa",
      Asia: "as",
      Oceania: "oc",
      Europe: "eu",
      Africa: "af",
    };
    let keys = Object.keys(continents);
    console.log(keys);
    if (allData.length) {
      allData.map((region) => {
        keys.map((key) => {
          if (region.continent === key && cont === continents[key]) {
            popup.innerHTML = `<h6 className="mb-2">${region.continent}</h6>
                            <p>New cases: ${region.newCases}</p>
                            <p>New Deaths: ${region.newDeaths}</p>
                            <p>Tota cases: ${region.totalCases}</p>
                            <p>Total deaths: ${region.totalDeaths}</p>
                            <p>Total recovered: ${region.totalRecovered}</p>`;
          }
        });
      });
    }
  };

  return (
    <>
      <h5 className="pb-2">See stats on each continent</h5>
      <div class="class">
        <WorldMap
          selected={selected}
          onSelect={(cont) => getMyToolTipFunction(cont)}
        />
        <span hidden className="displayText w-100" id="displayText">
          Hi I am ToolTip
        </span>
      </div>
    </>
  );
}

export default Map;
