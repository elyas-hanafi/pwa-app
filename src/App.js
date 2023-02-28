import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import OneTimeCode from './Pages/OneTimeCode';
import Services from './Pages/Services';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Map from './Pages/Map';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/OneTimeCode" element={<OneTimeCode />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </>
  );
}

export default App;
