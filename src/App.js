
import './App.css';
import {  Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Admin from './pages/admin/Admin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='/admin' element={<Admin />} />
    </Routes>
  );
}

export default App;
