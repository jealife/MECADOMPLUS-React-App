import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios';

function SignUpForm({ toggle }) {
    const [email, setEmail] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://mecadom.electroniqueclasse.com/api/register',localStorage.setItem('authData', JSON.stringify({lastName,firstName, email, password })))
      const successMessage = response.data.message; 
      toast('Connexion réussie !');
      console.log(successMessage); 
      window.location.replace('/profile');
    } catch (error) {
      if (error.response) {
        toast(`Erreur lors de la connexion : ${error.response.data}`);
      } else {
        toast(`Erreur lors de la connexion : ${error.message}`);
      }
    }
  };

    return (
        <form className='login-form' onSubmit={handleSubmit}>
            <h1 className='text-2xl font-bold' >S&apos;enregister</h1>

            <div className="login-sign-up">
                <div className="sign-up" id="signUp">
                    <div className="name">
                        <input
                           type="text" name="lastName"
                           placeholder="Nom" required
                           value={lastName} onChange={(event) => setLastName(event.target.value)}
                            
                        />
                        <input
                           type="text" name="firstName"
                           placeholder="Prénom" required
                           value={firstName} onChange={(event) => setFirstName(event.target.value)}
                        />
                    </div>
                    <input
                        type="email" name="email"
                        placeholder="Email" required
                        value={email} onChange={(event) => setEmail(event.target.value)}
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