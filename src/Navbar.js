import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

class Navbar extends React.Component {
  state = {
    showmenu: false,
    bread: [],
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

  render() {
    return (
      <div>
        {this.state.showmenu == false ? (
          <button type="submit" className="openbtn" onClick={this.openmenu}>
            ☰ Menu
          </button>
        ) : null}

        {this.state.showmenu == true ? (
          <ul className="initiallist" style={{ backgroundColor: "#f0f0f0" }}>
            <li>
              <Link
                to={{ pathname: "/" }}
                className="nav-link"
                style={{
                  textDecoration: "none",
                  backgroundColor: "#f0f0f0",
                  color: "black",
                }}
                onClick={this.closemenu}
              >
                Home
              </Link>
            </li>
            <li onClick={this.closemenu}>
              <Link
                style={{
                  textDecoration: "none",
                  backgroundColor: "#f0f0f0",
                  color: "black",
                }}
                to="/GlobalSearch"
              >
                Global Statistics
              </Link>
            </li>
            <li onClick={this.closemenu}>
              <Link
                style={{
                  textDecoration: "none",
                  backgroundColor: "#f0f0f0",
                  color: "black",
                }}
                to="/CountrySearch"
              >
                Search By Country
              </Link>
            </li>
            <li onClick={this.closemenu}>
              <Link
                style={{
                  textDecoration: "none",
                  backgroundColor: "#f0f0f0",
                  color: "black",
                }}
                to="/ContagionList"
              >
                Most Infected Countries
              </Link>
            </li>
            <li onClick={this.closemenu}>
              <Link
                style={{
                  textDecoration: "none",
                  backgroundColor: "#f0f0f0",
                  color: "black",
                }}
                to="/Us"
              >
                U.S.
              </Link>
            </li>
            <li onClick={this.closemenu}>
              <Link
                style={{
                  textDecoration: "none",
                  backgroundColor: "#f0f0f0",
                  color: "black",
                }}
                to="/Usefullinks"
              >
                Useful Links
              </Link>
            </li>
          </ul>
        ) : null}

        {this.state.bread.length ? (
          <Breadcrumbs update={this.nollstall} actualbread={this.state.bread} />
        ) : null}
      </div>
    );
  }
}

export default Navbar;
