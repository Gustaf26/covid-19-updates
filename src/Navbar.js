import React from "react";
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

  handleChange = (e, newValue) => {
    //to = "/GlobalSearch";
    //to="/ContagionList"
    //to="/Us"
    //to="/Usefullinks"
    this.setState({ value: newValue });
    if (newValue === 0) {
      this.setState({ newRoute: "/" });
    } else if (newValue === 1) {
      this.setState({ newRoute: "/GlobalSearch" });
    } else if (newValue === 2) {
      this.setState({ newRoute: "/ContagionList" });
    } else if (newValue === 3) {
      this.setState({ newRoute: "/CountrySearch" });
    } else if (newValue === 4) {
      this.setState({ newRoute: "/Us" });
    } else if (newValue === 5) {
      this.setState({ newRoute: "/Usefullinks" });
    }
  };

  render() {
    //to = "/GlobalSearch";
    //to="/ContagionList"
    //to="/Us"
    //to="/Usefullinks"
    return (
      <div>
        {this.state.newRoute ? <Redirect to={this.state.newRoute} /> : null}

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
              aria-label="styled tabs example"
            >
              <StyledTab
                label="Home"
                onClick={(e) => this.handleChange(e, 0)}
              />
              <StyledTab
                onClick={(e) => this.handleChange(e, 1)}
                label="Global Statistics"
              />
              <StyledTab
                onClick={(e) => this.handleChange(e, 2)}
                label="Most Infected Countries"
              />
              <StyledTab
                onClick={(e) => this.handleChange(e, 3)}
                label="Search By Country"
              />
              <StyledTab
                onClick={(e) => this.handleChange(e, 4)}
                label="U.S."
              />
              <StyledTab
                onClick={(e) => this.handleChange(e, 5)}
                label="Useful Links"
              />
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
