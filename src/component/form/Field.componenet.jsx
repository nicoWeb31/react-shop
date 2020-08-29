import React from 'react';
import "./Field.style.scss"

const Field = ({name,label,value,onChanges,type = "text",error="",disabled=false}) => {

    return (
        <div className="_group">
            {/* //<label htmlFor={name}>{label}</label> */}
            <input type={type}
                className="_form-input"
                name={name}
                id={name}
                value={value}
                onChange={onChanges}
                disabled={disabled}
            />

            {
                label && <label className={`${value.length && '_shrink '} _form-input-label`}>{label}</label>
            }


        </div>
    );
}

export default Field;