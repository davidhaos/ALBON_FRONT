import React from 'react'
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div>
            <li>
                <Link to="/counter">Counter</Link>
            </li>
            <li>
                <Link to="/Backend">API</Link>
            </li>

            <li>
                <Link to="/complexcounter">Complex Counter</Link>
            </li>

            <li>
                <Link to="/hookcounter3">Complex Counter 3</Link>
            </li>
            
        </div>
    )
}

export default Navbar
