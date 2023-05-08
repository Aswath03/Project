import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import Logo from '../Images/speed-car-logo.png';

export default function AdminForgetPasswordPage() {
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
            <h2>Reset your password</h2>
            <h5>Enter your email address and we will send you a new password</h5>
            <form action="/login">
                <p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Send password reset email</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
                <br/><br/><br/>                <br/><br/><br/>
                <br/><br/><br/>

            </footer>
        </div>
        </div></body>
    )
}