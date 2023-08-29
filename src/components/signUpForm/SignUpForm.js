import React, { useState } from 'react'

function SignUpForm({ toggle }) {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <form className='login-form' action="">
            <h1 className='text-2xl font-bold' >S&apos;enregister</h1>

            <div className="login-sign-up">
                <div className="sign-up" id="signUp">
                    <div className="name">
                        <input
                            type="text"
                            name="nom"
                            placeholder="Nom"
                            id="lname"
                            required
                        />
                        <input
                            type="text"
                            name="prenom"
                            placeholder="Prénom"
                            id="fname"
                            required
                        />
                    </div>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        id="email"
                        required
                    />
                    <div className="password-field">
                        <input type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="Mot de passe" name="password"
                            required />

                        <div className="show-password">
                            <input type="checkbox" onChange={() => setShowPassword(!showPassword)} />
                            <span className='cursor-pointer ' >Voir</span>
                        </div>
                    </div>
                </div>
                <div className="link-connexion" >
                    <span>Vous avez un compte ?</span>
                    <span onClick={toggle}>Se connecter</span>
                </div>
            </div>
            <input type="submit" value="S'enregister" id="signupbtn" />
        </form>
    )
}

export default SignUpForm