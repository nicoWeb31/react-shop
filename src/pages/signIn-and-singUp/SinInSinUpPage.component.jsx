import React from 'react';
import "./SinInSinUpPage.style.scss";
import SignIn from "../../component/sign-in/SignIn.component";
import Signup from '../../component/sign-up/Signup.component';



const SinInSinUpPage = () => {
    return (
        <div className="_sign-in-and-sign-up">
            <SignIn/>
            <Signup/>

        </div>
    );
}

export default SinInSinUpPage;