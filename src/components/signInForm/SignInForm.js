import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";
import { useSignIn } from "react-auth-kit";
// import { useNavigate } from "react-router-dom";

export default function SignInForm({ toggle }) {

  const [error, setError] = useState("");
  const signIn = useSignIn();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    sessionStorage.clear();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "https://mecadom.electroniqueclasse.com/api/login",
        { email, password }
      );


      signIn({
        token: response.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { email: email, password: password },
      });
      toast.success('connection successfully.', {
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
      // window.location.replace('/profile');
    } catch (err) {
      if (err && err instanceof AxiosError)
        setError(err.response?.data.message);
      else if (err && err instanceof Error) setError(err.message);
      toast.error('Please Enter valid email', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        draggablePercent: 60
      });
      console.log("Error: ", err);
    }
  };
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post('https://mecadom.electroniqueclasse.com/api/login', { email, password });
  //     localStorage.setItem('authData', JSON.stringify(response.data.token));
  //     const successMessage = response.data.message; 
  //     toast('Connexion réussie !');
  //     console.log(successMessage); 
  //     // window.location.replace('/profile');
  //   } catch (error) {
  //     if (error.response) {
  //       toast(`Erreur lors de la connexion : ${error.response.data}`);
  //     } else {
  //       toast(`Erreur lors de la connexion : ${error.message}`);
  //     }
  //   } 
  // };
  return (
    <form className='login-form' noValidate onSubmit={handleSubmit}>

      <h1 className='text-2xl font-bold'>Connexion</h1>
      <p className=' text-red-600'>{error}</p>
      <div className="login-sign-up">
        <div className="login" >

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