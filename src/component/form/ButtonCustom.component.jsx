import React from 'react';

import "./button.style.scss";


const ButtonCustom = ({children,isGoogle, ...othersProps}) => {
    return (
        <button className={(isGoogle ? "_google-sign-in " : "") + "_custom-button"} {...othersProps}>
            {children}
        </button>
    );
}

export default ButtonCustom;