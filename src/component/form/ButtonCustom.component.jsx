import React from 'react';

import "./button.style.scss";


const ButtonCustom = ({children, ...othersProps}) => {
    return (
        <button className="_custom-button" {...othersProps}>
            {children}
        </button>
    );
}

export default ButtonCustom;