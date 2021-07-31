import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import Tooltip from "react-bootstrap/Tooltip";
// import Overlay from "react-bootstrap/Overlay";
// import Button from "react-bootstrap/Button";
import WorldMap from "react-world-map";

function Map() {
  const [selected, onSelect] = useState(null);
  const selectionIndex = useRef(0);

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
    popup.innerText = cont;
  };

  return (
    <>
      <h5 className="pb-2">See stats on each continent</h5>
      <div class="class">
        <WorldMap
          selected={selected}
          onSelect={(cont) => getMyToolTipFunction(cont)}
        />
        <span hidden class="displayText" id="displayText">
          Hi I am ToolTip
        </span>
      </div>
    </>
  );
}

export default Map;
