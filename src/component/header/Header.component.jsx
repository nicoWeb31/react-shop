import React from 'react';
import "./header.style.scss";
import {Link} from "react-router-dom";
import { ReactComponent as Logo} from "../../asset/logo/crown.svg";
import {auth} from "../../firebase/firebase.utils"


const Header = ({currentUser,onLogout}) => {
    console.log(currentUser);

    const signOut = () =>{
        onLogout(null);
        auth.signOut();
    } 

    return (
        <div className="_header">
            <Link to="/" className="_logo-container">
                <Logo className="_logo" />
            </Link>
            <div className="_options">
                <Link className="_option" to="/shop">SHOP</Link>
                <Link className="_option" to="/shop">CONTACT</Link>


                {
                    currentUser ?
                    (
                        <div className="_option" onClick={signOut}>SIGN OUT</div>
                    ) : 
                    (
                        <Link className="_option" to='/signin'>SIGN IN</Link>
                    )
                }


            </div>
        </div>
    );
}

export default Header;