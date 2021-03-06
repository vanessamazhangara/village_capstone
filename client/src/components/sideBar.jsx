import React from 'react';
import { Nav } from '../styles/discoverInfo.style';
import { Link } from "react-router-dom";



const SideBar = (props) => {
    const { id } = props
    return (   
    
    <Nav>
        <li>
            <Link to={`/discover/${id}/gallery/`} style={{ textDecoration: 'none', color: "#888" }}>Gallery</Link>
        </li>
        <li>
           <Link to={`/discover/${id}/reviews`} style={{ textDecoration: 'none', color: "#888"  }}>Reviews</Link>
        </li>
     </Nav> );
}
 
export default SideBar;