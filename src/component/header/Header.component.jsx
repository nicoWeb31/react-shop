import React from 'react';
import "./header.style.scss";
import {Link} from "react-router-dom";
import { ReactComponent as Logo} from "../../asset/logo/crown.svg"

const Header = () => {
    return (
        <div className="_header">
            <Link to="/" className="_logo-container">
                <Logo className="_logo" />
            </Link>
            <div className="_options">
                <Link className="_option" to="/shop">SHOP</Link>
                <Link className="_option" to="/shop">CONTACT</Link>
                <Link className="_option" to="/shop">CONTACT</Link>

                


            </div>
        </div>
    );
}

export default Header;