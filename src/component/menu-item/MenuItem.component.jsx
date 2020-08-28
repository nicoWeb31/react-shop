import React from 'react';
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";



const MenuItem = ({ title, img, size, history,link,match }) => {
    const styleImage = {
        backgroundImage: `url(${img})`
    }




    return (

        <div className={`_menu-item ${size}`}  onClick={()=> history.push(`${match.url}${link}`)}>
            <div className="_bg-image" style={styleImage}>
            </div>

                <div className="_content">
                    <h1 className="_title">{title.toUpperCase()}</h1>
                    <span className="_subtitle">SHOP NOW</span>
                </div>
        </div>
    );

}

export default withRouter(MenuItem);