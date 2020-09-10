import React from 'react';

import "./button.style.scss";


const ButtonCustom = ({children,isGoogle,inverted, ...othersProps}) => {
    return (
        <button className={(isGoogle ? "_google-sign-in " : "") + 
                            (inverted ? " _inverted " : "") + 
                            "_custom-button"} {...othersProps}>
            {children}
        </button>
    );
}

export default ButtonCustom;