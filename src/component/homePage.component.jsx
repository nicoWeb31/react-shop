import React from 'react';
import "../homepage.styles.scss"

const homePage = () => (
    <div className="_homepage">
        <div className="_directory-menu">
            <div className="_menu-item">
                <div className="_content">
                    <h1 className="_title">HATS</h1>
                    <span className="_subtitle">Shop Now</span>
                </div>
            </div>

            <div className="_menu-item">
                <div className="_content">
                    <h1 className="_title">JACKETS</h1>
                    <span className="_subtitle">Shop Now</span>
                </div>
            </div>

            <div className="_menu-item">
                <div className="_content">
                    <h1 className="_title">SNICKERS</h1>
                    <span className="_subtitle">Shop Now</span>
                </div>
            </div>

            <div className="_menu-item">
                <div className="_content">
                    <h1 className="_title">WOMENS</h1>
                    <span className="_subtitle">Shop Now</span>
                </div>
            </div>

            <div className="_menu-item">
                <div className="_content">
                    <h1 className="_title">MENS</h1>
                    <span className="_subtitle">Shop Now</span>
                </div>
            </div>
        </div>
    </div>
);

export default homePage;