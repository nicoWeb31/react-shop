import React from 'react';
import ButtonCustom from '../form/ButtonCustom.component';
import Field from '../form/Field.componenet';
import "./Signup.style.scss";
import { auth, createUserProfileDoc } from "../../firebase"
import { useState } from 'react';


const Signup = () => {

    const [nexUser, setNewUsuer] = useState({
        displayName: '',
        email: '',
        password: '',
        comfirPassword: ''
    })


    //changement du formulaire
    const handleChange = (e) => {
        const value = e.currentTarget.value;
        const name = e.currentTarget.name;
        setNewUsuer({ ...nexUser, [name]: value })
    }

    const handleSubmit = async e =>{
        e.preventDefault();
        const {displayName,email,password,comfirPassword} = nexUser;
        if(password !== comfirPassword){
            alert("password don't match")
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDoc(user,{displayName})
            setNewUsuer({
                displayName: '',
                email: '',
                password: '',
                comfirPassword: ''
            })

        }catch(error){
            console.log(error)
        }

    }



    return (
        <div className="_sign-up">
            <h2 className="_title">I do not have a account !</h2>
            <span>Sign up with your email and password</span>
            <form className="_sign-up-form" onSubmit={handleSubmit}>
                <Field
                    type='text'
                    value={nexUser.displayName}
                    onChanges={handleChange}
                    name='displayName'
                    label='Display Name'
                    required
                />

                <Field
                    type='email'
                    value={nexUser.email}
                    onChanges={handleChange}
                    name='email'
                    label='Email'
                    required
                />


                <Field
                    type='password'
                    value={nexUser.password}
                    onChanges={handleChange}
                    name='password'
                    label='Password'
                    required
                />


                <Field
                    type='password'
                    value={nexUser.comfirPassword}
                    onChanges={handleChange}
                    name='comfirPassword'
                    label='Comfirm password'
                    required
                />

        <ButtonCustom
            type="submit"

        >
            Sign Up
        </ButtonCustom>
        

            </form>
        </div>
    );
}

export default Signup;