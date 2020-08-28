import React from 'react';
import "./menu-item.styles.scss";



const MenuItem = ({title,img,size}) => {
    const styleImage = {
        backgroundImage : `url(${img})`
    }




    return (
        <div className={`_menu-item ${size}`} style={styleImage}>
                <div className="_content">
                    <h1 className="_title">{title}</h1>
                    <span className="_subtitle">SHOP NOW</span>
                </div>
            </div>
    );
}

export default MenuItem;