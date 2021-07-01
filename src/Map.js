import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import WorldMap from "react-world-map";

function Map() {
  const [selected, onSelect] = useState(null);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const showStats = (cont) => {
    document.getElementById(`${cont.toUpperCase()}`).style.border =
      "2px solid black";
  };

  return (
    <>
      <h1>See stats on each continent</h1>
      <OverlayTrigger
        target={target.current}
        show={show}
        delay={{ hide: 450, show: 300 }}
        overlay={(props) => (
          <Tooltip {...props}>
            Hii, I am a simple tooltip information!!!
          </Tooltip>
        )}
        placement="bottom"
      >
        <WorldMap
          ref={target}
          selected={selected}
          onSelect={(continent) => {
            showStats(continent);
          }}
          onClick={() => setShow(!show)}
        />
      </OverlayTrigger>
    </>
  );
}

export default Map;
