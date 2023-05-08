import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css';
import Logo from '../Images/speed-car-logo.png';

export default function OwnerLogin() {
    return (
        <body className="mx-auto mt-0 pt-0 m-blank p-auto" style={{backgroundColor: '#1A374D'}}>
        <br/><br/><br/>
        <div className="container py-3 pt-0 pb-2" >

        <header>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top text-white h3 display-7" style={{ backgroundColor: '#712B75'}}>
        <img 
            
            class="d-block w-10 h-3"
            src={Logo}
            alt="Image Two"
          /> <span>Car Rental System</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
    </header>

        <div className="text-center m-5-auto pt-2" id='userLogin'>
            <h1>Owner Sign-in</h1>
            
            <form action="/home">
                <p>
                    <label id='userdetails'>Email</label><br/>
                    <input style={{border:'2px solid rgb(32, 31, 31)'}} type="email" name="first_name" required />
                </p>
                <p>
                    <label id='userdetails'>Password</label>
                    <br/>
                    <input style={{border:'2px solid rgb(32, 31, 31)'}} type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
                <Link to="/OwnerForgetPasswordPage"><label className="right-label text-white solid" id='forgot'>forget password?</label></Link>
            </form>
            <footer>
                <p><b>First time?</b>  <Link to="/OwnerRegister"><b>Create an account</b></Link>.</p>
                <p><Link to="/"><b>Back to Homepage</b></Link>.</p>
                <br/>
            </footer>
        </div>
        </div></body>
    )
}