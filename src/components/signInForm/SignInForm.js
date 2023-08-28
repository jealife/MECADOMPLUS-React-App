import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios';


export default function SignInForm({ toggle }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://mecadom.electroniqueclasse.com/api/login', { email, setPassword });
      localStorage.setItem('authData', JSON.stringify({ email, password }));
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
    <form className='login-form' noValidate onSubmit={handleSubmit}>
      <h1 className='text-2xl font-bold'>Connexion</h1>
      <div className="login-sign-up">
        <div className="login" id="login">

          <input type="email" name="email"
            placeholder="Email" required
            value={email} onChange={(event) => setEmail(event.target.value)} />

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
        <div className="link-connexion" id="linkLogin">
          <Link to="/forgot-password">Mot de passe oublié ?</Link>
          <span onClick={toggle}>S'enregistrer</span>
        </div>
      </div>
      <input type="submit" value="Se connecter" id="loginBtn" />
    </form>
  )
}