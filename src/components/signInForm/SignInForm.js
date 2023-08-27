import React, { useState } from 'react';
import { Link } from 'react-router-dom';

async function loginUser(credentials) {
  return fetch('https://mecadom.electroniqueclasse.com/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

function SignInForm({ toggle }) {

  const [useremail, setUserEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      useremail,
      password
    });
    if ('accessToken' in response) {
      // Remplacez cette fonction par la fonction appropriée pour afficher un message à l'utilisateur
      displayMessage("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      })
        .then((value) => {
          localStorage.setItem('accessToken', response['accessToken']);
          localStorage.setItem('user', JSON.stringify(response['user']));
          window.location.href = "/profile";
        });
    } else {
      // Remplacez cette fonction par la fonction appropriée pour afficher un message à l'utilisateur
      displayMessage("Failed", response.message, "error");
    }
  }

  return (
    <form className='login-form' noValidate onSubmit={handleSubmit}>
      <h1 className='text-2xl font-bold'>Connexion</h1>

      <div className="login-sign-up">
        <div className="login" id="login">
          <input type="email" name="email"
            placeholder="Email" required onChange={e => setUserEmail(e.target.value)} />

          <div className="password-field">

            <input type="password" placeholder="Mot de passe" name="password"
              required onChange={e => setPassword(e.target.value)} />
            <div className="show-password">
              <input type="checkbox" onClick={showPassword} />
              <span>Voir</span>
            </div>
          </div>
        </div>


        <div className="link-connexion" id="linkLogin">
          <Link to="#">Mot de passe oublié ?</Link>
          <span onClick={toggle}>S'enregistrer</span>
        </div>
      </div>

      <input type="submit" value="Se connecter" id="loginBtn" />
    </form>
  )
}
export default SignInForm;
