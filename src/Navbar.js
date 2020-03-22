import React from 'react'
import { Link } from 'react-router-dom'

function Navbar () {

    return (

             <ul className="initiallist">
                <li><Link className="nav-link" style={{textDecoration:'none'}}
                 to="/">Home</Link></li>
                <li><Link style={{textDecoration: 'none'}} to="/GlobalSearch">Search global stats</Link></li>
                <li><Link style={{textDecoration: 'none'}} to="/CountrySearch">Search by country</Link></li>
                <li><Link style={{textDecoration: 'none'}} to="/ContagionList">Top 10 contagious countries</Link></li>        
            </ul>
    )
}


export default Navbar