import React from "react";
import { Redirect } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

import { makeStyles, withStyles } from "@material-ui/core/styles";
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

class Navbar extends React.Component {
  state = {
    showmenu: false,
    bread: [],
    value: 0,
    newRoute: "",
  };

  nollstall = () => {
    this.setState({ bread: [] });
    this.props.reopenadvice();
  };

  openmenu = (e) => {
    e.preventDefault();

    this.setState({ showmenu: true, bread: [] });
    this.props.closeadvice();
    this.props.closetext();
  };

  closemenu = (e) => {
    this.setState({ showmenu: false });

    if (e.target.innerText !== "Home") {
      const breadarr = [...this.state.bread];
      breadarr.push(e.target.innerText);
      this.setState({ bread: breadarr });
    }
  };

  handleChange = (event, newValue) => {
    if (newValue === 4) {
      newValue = 0;
    }
    this.setState({ value: newValue });
  };

  render() {
    //to = "/GlobalSearch";
    //to="/ContagionList"
    //to="/Us"
    //to="/Usefullinks"
    return (
      <div>
        {this.state.newRoute && <Redirect to={{ pathname: "/" }} />}

        {this.state.showmenu == false ? (
          <button type="submit" className="openbtn" onClick={this.openmenu}>
            ☰ Menu
          </button>
        ) : null}

        {this.state.showmenu == true ? (
          <div>
            <StyledTabs
              className="initiallist"
              style={{ backgroundColor: "#f0f0f0" }}
              value={this.state.value}
              onChange={(e) => this.handleChange(e, this.state.value + 1)}
              aria-label="styled tabs example"
            >
              <StyledTab label="Home" />
              <StyledTab label="Global Statistics" />
              <StyledTab label="Most Infected Countries" />
              <StyledTab label="U.S." />
              <StyledTab label="Useful Links" />
            </StyledTabs>
          </div>
        ) : null}

        {this.state.bread.length ? (
          <Breadcrumbs update={this.nollstall} actualbread={this.state.bread} />
        ) : null}
      </div>
    );
  }
}

export default Navbar;
