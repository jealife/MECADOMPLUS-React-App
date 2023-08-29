
import './App.css';
import {  Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Admin from './pages/admin/Admin';
import SignIn from './pages/login/SignIn';
import UserProfile from './pages/userProfile/UserProfile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='/admin' element={<Admin />} />
      <Route path='/connexion' element={<SignIn />} />
      <Route path='/profile' element={<UserProfile />} />
    </Routes>
  );
}

export default App;
