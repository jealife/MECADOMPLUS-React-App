import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios';

function SignUpForm({ toggle }) {
    const [email, setEmail] = useState('');
    const [last_name, setLastName] = useState('');
    const [first_name, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const response = await axios.post('https://mecadom.electroniqueclasse.com/api/register', { last_name,first_name, email, password });
      const successMessage = response.data.message; 
      toast.success('connexion réussie.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        draggablePercent: 60
      })
      console.log(successMessage); 
      window.location.replace('/profile');
    } catch (error) {
      if (error.response) {
        toast.error(`Erreur lors de la connexion : ${error.response.data}`, {
          draggablePercent: 60
        });
      } else {
        toast.error(`Erreur lors de la connexion : ${error.message}`, {
          draggablePercent: 60
        });
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
                           value={last_name} onChange={(event) => setLastName(event.target.value)}
                            
                        />
                        <input
                           type="text" name="firstName"
                           placeholder="Prénom" required
                           value={first_name} onChange={(event) => setFirstName(event.target.value)}
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