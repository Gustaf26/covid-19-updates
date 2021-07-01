import React, { useEffect, useState } from "react";
import WorldMap from "react-world-map";

function Map() {
  const [selected, onSelect] = useState(null);

  const showStats = (cont) => {
    document.getElementById(`${cont.toUpperCase()}`).style.border =
      "2px solid black";
  };

  return (
    <>
      <h1>See stats on each continent</h1>
      <WorldMap
        selected={selected}
        onSelect={(continent) => {
          showStats(continent);
        }}
      />
    </>
  );
}

export default Map;
