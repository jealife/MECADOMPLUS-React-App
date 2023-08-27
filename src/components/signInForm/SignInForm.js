import React from 'react'
import { Link } from 'react-router-dom'

function SignInForm({toggle}) {
    return (
        <form className='login-form' action="">
            <h1 className='text-2xl font-bold'>Connexion</h1>

            <div class="login-sign-up">
                <div class="login" id="login">
                    <input type="email" name="email" autofocus="" autocapitalize="none" autocomplete="email"
                        placeholder="Email" required />

                    <div class="password-field">

                        <input type="password" id="password" placeholder="Mot de passe" name="password"
                            autocomplete="current-password" required />
                        <div class="show-password">
                            <input type="checkbox" onclick="showPassword()" />
                            <span id="tooglePasswordindicator">Voir</span>
                        </div>
                    </div>
                </div>


                <div class="link-connexion" id="linkLogin">
                    <Link href="#">Mot de passe oublié ?</Link>
                    <span onClick={toggle}>S'enregistrer</span>
                </div>
            </div>

            <input type="submit" value="Se connecter" id="loginBtn" />
        </form>
    )
}

export default SignInForm