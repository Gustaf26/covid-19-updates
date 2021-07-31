import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Tooltip from "react-bootstrap/Tooltip";
import Overlay from "react-bootstrap/Overlay";
// import Button from "react-bootstrap/Button";
import WorldMap from "react-world-map";
// import shadows from "@material-ui/core/styles/shadows";

function Map() {
  // const [selected, onSelect] = useState(null);
  const [show, setShow] = useState(false);
  const target = useRef(null);
  // const [continent, setContinent] = useState("");

  const showStats = (cont) => {
    // onSelect(cont);
    console.log(cont);
  };

  return (
    <>
      <h5 className="pb-2">See stats on each continent</h5>
      <WorldMap ref={target} onClick={(e) => showStats(e)} />
      <Overlay
        delay={{ hide: 450, show: 300 }}
        target={target.current}
        show={show}
        placement="right"
      >
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <Tooltip {...props}>Simple tooltip</Tooltip>
        )}
      </Overlay>
    </>
  );
}

export default Map;
