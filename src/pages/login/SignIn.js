import React, { useState } from 'react'
import './login.css'
import SignInForm from '../../components/signInForm/SignInForm'
import SignUpForm from '../../components/signUpForm/SignUpForm'



export default function SignIn() {
    const [formLogin, setFormLogin] = useState(true)
    const toggleLoginForm = () => {
        setFormLogin(!formLogin);
    }
    return (
        <main className='flex lg:flex-row  md:flex-col sm:flex-col'>
            <div className="left-section">
                {
                    formLogin ? <SignInForm toggle={toggleLoginForm} /> : <SignUpForm toggle={toggleLoginForm} />
                }
            </div>

            <div className="right-section"></div>
           
        </main>
    )
}
