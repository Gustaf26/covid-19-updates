import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#000",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "#000000",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const Navbar = (props) => {
  const [showmenu, setMenu] = useState(false);
  const [bread, setBread] = useState([]);
  const [value, setValue] = useState(0);
  const [newRoute, setRoute] = useState("");

  const nollstall = () => {
    setBread([]);
    props.reopenadvice();
  };

  const openmenu = (e) => {
    e.preventDefault();

    setMenu(true);
    setBread([]);
    props.closeadvice();
    props.closetext();
  };

  const closemenu = (e) => {
    setMenu(false);

    if (e.target.innerText !== "Home") {
      const breadarr = [...this.state.bread];
      breadarr.push(e.target.innerText);
      setBread(breadarr);
    }
  };

  const handleChange = (e, newValue) => {
    //to = "/GlobalSearch";
    //to="/ContagionList"
    //to="/Us"
    //to="/Usefullinks"
    setValue(newValue);
    if (newValue === 0) {
      setRoute("/");
    } else if (newValue === 1) {
      setRoute("/GlobalSearch");
    } else if (newValue === 2) {
      setRoute("/ContagionList");
    } else if (newValue === 3) {
      setRoute("/CountrySearch");
    } else if (newValue === 4) {
      setRoute("/Us");
    } else if (newValue === 5) {
      setRoute("/Usefullinks");
    }
  };

  return (
    <div>
      {newRoute ? <Redirect to={newRoute} /> : null}

      {showmenu == false ? (
        <button type="submit" className="openbtn" onClick={(e) => openmenu(e)}>
          ☰ Menu
        </button>
      ) : null}

      {showmenu == true ? (
        <div id="navbar_div">
          <StyledTabs
            orientation="vertical"
            className="initiallist"
            style={{ backgroundColor: "#f0f0f0" }}
            value={value}
            aria-label="styled tabs example"
          >
            <StyledTab label="Home" onClick={(e) => handleChange(e, 0)} />
            <StyledTab
              onClick={(e) => handleChange(e, 1)}
              label="Global Statistics"
            />
            <StyledTab
              onClick={(e) => handleChange(e, 2)}
              label="Most Infected Countries"
            />
            <StyledTab
              onClick={(e) => handleChange(e, 3)}
              label="Search By Country"
            />
            <StyledTab onClick={(e) => handleChange(e, 4)} label="U.S." />
            <StyledTab
              onClick={(e) => handleChange(e, 5)}
              label="Useful Links"
            />
          </StyledTabs>
        </div>
      ) : null}

      {bread.length ? (
        <Breadcrumbs update={() => nollstall()} actualbread={bread} />
      ) : null}
    </div>
  );
};

export default Navbar;
