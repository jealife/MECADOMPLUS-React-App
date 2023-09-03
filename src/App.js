
import './App.css';
import {  Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Admin from './pages/admin/Admin';
import SignIn from './pages/login/SignIn';
import { RequireAuth } from "react-auth-kit";
import Profile from './pages/userProfile/UserProfile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='/admin' element={<Admin />} />
      <Route path='/connexion' element={<SignIn />} />
      <Route
        path="/profile"
        element={
          <RequireAuth loginPath="/connexion">
            <Profile/>
          </RequireAuth>
        }></Route>
    </Routes>
  );
}

export default App;
