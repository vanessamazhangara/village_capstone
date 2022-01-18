import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Li, Logo, NavBtn} from '../styles/navbar.style';


const Navbar = () => {
    return ( 
        <Nav>
            <Logo src='./logo.png' alt='logo'/>
            <ul>
                <Li>
                    <Link to="/discover">Discover</Link>
                </Li>
            </ul>
            <NavBtn>Login</NavBtn>
            <NavBtn>Sign Up</NavBtn>
        </Nav>
     );
}
 
export default Navbar;