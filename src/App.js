import { Routes, Route } from 'react-router-dom'
import AboutUs from './pages/AboutUs/AboutUs';
import AboutVio from './pages/AboutVio/AboutVio';
import AdminPanel1 from './pages/AdminPanel1/AdminPanel1';
import AdminPanel2 from './pages/AdminPanel2/AdminPanel2';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'
import Robot from './pages/Robot/Robot';
import Shop from './pages/Shop/Shop';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/robot" element={<Robot />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about-vio" element={<AboutVio />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/p-admin1" element={<AdminPanel1 />} />
      <Route path="/p-admin2" element={<AdminPanel2 />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
