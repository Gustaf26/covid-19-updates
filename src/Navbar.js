import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {


    state = {

        showmenu: false
    }

    openmenu = (e) => {

        e.preventDefault()
        
        this.setState({showmenu: true})
    }

    closemenu = () => {

        this.setState({showmenu:false})
    }

    render () {

    return (
        <div>
            
            {this.state.showmenu ==false? <button type="submit" className="openbtn" onClick={this.openmenu}>☰ Menu</button>:null}
            

            {this.state.showmenu ==true? <ul className="initiallist">
                <li><Link className="nav-link" style={{textDecoration:'none'}} onClick={this.closemenu}
                 to="/">Home</Link></li>
                <li onClick={this.closemenu}><Link style={{textDecoration: 'none'}} to="/GlobalSearch">Global Statistics</Link></li>
                <li onClick={this.closemenu}><Link style={{textDecoration: 'none'}} to="/CountrySearch">Search By Country</Link></li>
                <li onClick={this.closemenu}><Link style={{textDecoration: 'none'}} to="/ContagionList">Most Infected Countries</Link></li> 
                <li onClick={this.closemenu}><Link style={{textDecoration: 'none'}} to="/Usefullinks">Useful Links</Link></li>       
            </ul>:null}
             
        </div>
    )
}}


export default Navbar