import React, { useEffect, useState } from "react";
import WorldMap from "react-world-map";

function Map() {
  const [selected, onSelect] = useState(null);
  return (
    <>
      <h1> Hello World Map!</h1>
      <WorldMap selected={selected} onSelect={onSelect} />
    </>
  );
}

export default Map;
