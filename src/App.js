// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TestPage from './components/TestPage';
import HomePage from './components/HomePage';

import UserLogin from './components/userPages/UserLogin';
import OwnerLogin from './components/ownerPages/OwnerLogin';
import UserBookRequest from './components/userPages/UserBookRequest';

import AdminLogin from './components/adminPages/AdminLogin';
import AdminView from './components/adminPages/AdminView';

import AdminForgetPasswordPage from './components/adminPages/AdminForgetPasswordPage';


import UserRegister from './components/userPages/UserRegister';

import OwnerRegister from './components/ownerPages/OwnerRegister';
import OwnerRequest from './components/ownerPages/OwnerRequest';

import OwnerForgetPasswordPage from './components/ownerPages/OwnerForgetPasswordPage';

import UserForgetPasswordPage from './components/userPages/UserForgetPasswordPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>

    
    <Route path='/test' element={<TestPage />} />

    <Route path='/' element={<HomePage />} />
    <Route path='/UserLogin' element={<UserLogin />} />
    <Route path='/UserBookRequest' element={<UserBookRequest />} />

    <Route path='/UserForgetPasswordPage' element={<UserForgetPasswordPage />} />

    <Route path='/OwnerLogin' element={<OwnerLogin />} />
    <Route path='/AdminLogin' element={<AdminLogin />} />
    <Route path='/AdminView' element={<AdminView />} />

    <Route path='/AdminForgetPasswordPage' element={<AdminForgetPasswordPage />} />

    <Route path='/UserRegister' element={<UserRegister />} />
    <Route path='/OwnerRegister' element={<OwnerRegister />} />
    <Route path='/OwnerRequest' element={<OwnerRequest />} />
    <Route path='/OwnerForgetPasswordPage' element={<OwnerForgetPasswordPage />} />


    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
