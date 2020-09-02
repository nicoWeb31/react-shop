import React from 'react';
import { useState } from 'react';
import Field from "../form/Field.componenet";
import "./SignIn.style.scss";
import ButtonCustom from "../form/ButtonCustom.component";

import {singinWhitgoogle} from "../../firebase/firebase.utils"


const SignIn = (props) => {

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })


    //changement du formulaire
    const handleChange = (e) => {
        const value = e.currentTarget.value;
        const name = e.currentTarget.name;
        setCredentials({ ...credentials, [name]: value })
    }


    //soumission du formulaire

    const handleSubmit = e => {
        e.preventDefault();
        setCredentials({email:"",password:""})


    }


    return (
        <div className="_sign-in">
            <h2 className="">I already an account</h2>
            <span>Sin in with your email</span>

            <form onSubmit={handleSubmit}>


                    <Field
                        value={credentials.email}
                        onChanges={handleChange}
                        name="email"
                        //error={error}
                        label="Email"
                        type="email"
                    />

                    <Field
                        value={credentials.password}
                        onChanges={handleChange}
                        name="password"
                        //error={error}
                        label="Password"
                        type="Password"
                    />

                <ButtonCustom type="submit">Sign In</ButtonCustom>
                <ButtonCustom onClick={singinWhitgoogle} >Sign In with Google</ButtonCustom>


            </form>

        </div>
    );
}

export default SignIn;