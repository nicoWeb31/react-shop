import React from 'react';
import "./menu-item.styles.scss";



const MenuItem = ({ title, img, size }) => {
    const styleImage = {
        backgroundImage: `url(${img})`
    }




    return (

        <div className={`_menu-item ${size}`} >
            <div className="_bg-image" style={styleImage}>
            </div>

                <div className="_content">
                    <h1 className="_title">{title.toUpperCase()}</h1>
                    <span className="_subtitle">SHOP NOW</span>
                </div>
        </div>
    );

}

export default MenuItem;