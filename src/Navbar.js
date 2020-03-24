import React from 'react'
import { Link } from 'react-router-dom'

function Navbar () {

    return (

             <ul className="initiallist">
                <li><Link className="nav-link" style={{textDecoration:'none'}}
                 to="/">Home</Link></li>
                <li><Link style={{textDecoration: 'none'}} to="/GlobalSearch">Global Statistics</Link></li>
                <li><Link style={{textDecoration: 'none'}} to="/CountrySearch">Search By Country</Link></li>
                <li><Link style={{textDecoration: 'none'}} to="/ContagionList">Most Infected Countries</Link></li> 
                <li><Link style={{textDecoration: 'none'}} to="/Usefullinks">Useful Links</Link></li>       
            </ul>
    )
}


export default Navbar