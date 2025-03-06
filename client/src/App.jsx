import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './signUp.jsx';  
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login.jsx';

function App() {
    return (
        <BrowserRouter>
           <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/login" element={<Login />} />
           </Routes>
        </BrowserRouter>
    );
}

export default App;
