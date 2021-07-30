import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Button from "react-bootstrap/Button";
import WorldMap from "react-world-map";
// import shadows from "@material-ui/core/styles/shadows";

function Map() {
  // const [selected, onSelect] = useState(null);
  const [show, setShow] = useState(false);
  // const [continent, setContinent] = useState("");
  const target = useRef(null);

  const showStats = (cont) => {
    // onSelect(cont);
    console.log(cont);
  };

  return (
    <>
      <h5>See stats on each continent</h5>
      <OverlayTrigger
        target={target.current}
        show={show}
        children={<WorldMap />}
        delay={{ hide: 450, show: 300 }}
        onClick={(e) => showStats(e)}
        overlay={(props) => (
          <Tooltip {...props}>
            Hii, I am a simple tooltip information!!!
          </Tooltip>
        )}
        placement="bottom"
      ></OverlayTrigger>
    </>
  );
}

export default Map;
