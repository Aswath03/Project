import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css';
import Logo from '../Images/speed-car-logo.png';

export default function OwnerRegister() {
    return (
        <body className="mx-auto mt-0 pt-0 m-blank p-auto" style={{ backgroundColor: '#1A374D' }}>
            <br /><br /><br />
            <div className="container py-3 pt-0 pb-2" >

                <header>
                    <nav class="navbar navbar-expand-md navbar-dark fixed-top text-white h3 display-7" style={{ backgroundColor: '#712B75' }}>
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
                <div className="text-center m-3-auto pt-1 mb-1" id='userLogin'>
                    <h1>Owner Sign-up</h1>

                    <form action="/home">

                        <div className="row g-2">
                            <div className="col-5">
                                <label for="validationTooltip01" id='userdetails'>First name</label>
                                <input style={{ border: '2px solid rgb(32, 31, 31)' }} type="text" className="form-control" id="validationTooltip01" required />

                            </div>
                            <div className="col-5">
                                <label for="validationTooltip02" id='userdetails'>Last name</label>
                                <input style={{ border: '2px solid rgb(32, 31, 31)' }} type="text" className="form-control" id="validationTooltip02" required />
                                <div className="valid-tooltip">
                                    Looks good!
                                </div>
                            </div>
                        </div>
                        <div className="col-6">

                           
                                <label id='userdetails'>Set Password</label>
                                <br />
                                <input style={{ border: '2px solid rgb(32, 31, 31)' }}  className="form-control" type="text" name="password" required />
                          
                            <div className="valid-tooltip">
                                Looks good!
                            </div>
                        </div>

                        <div className="col-6">
                            <label for="validationTooltip03" id='userdetails'>Addhar No </label>
                            <input style={{ border: '2px solid rgb(32, 31, 31)' }} size="20" type="number" pattern="[7-9]{1}[0-9]{9}" className="form-control" id="validationTooltip03" required />
                            <div className="invalid-feedback">
                                Please Enter the Addhar number.
                            </div>
                        </div>


                        <div className="col-6">
                            <label for="validationTooltip03" id='userdetails'>Contact No </label>
                            <input style={{ border: '2px solid rgb(32, 31, 31)' }} type="tel" pattern="[7-9]{1}[0-9]{9}" className="form-control" id="validationTooltip03" required />
                            <div className="invalid-feedback">
                                Please Enter the Contact number.
                            </div>
                        </div>

                        <div className="col-6">
                            <label for="validationTooltip04" id='userdetails'>Email </label>
                            <input style={{ border: '2px solid rgb(32, 31, 31)' }} type="email" className="form-control" id="validationTooltip04" placeholder="name@example.com" required />
                            <div className="invalid-tooltip">
                                Please Enter Valid email.
                            </div>
                        </div>






                        <div className="col-12">
                            <button id="sub_btn" type="submit">Register</button>
                        </div>

                    </form >
                    <footer>
                        <p><b>Allready registered?</b>  <Link to="/OwnerLogin"><b>Login</b></Link>.</p>
                        <p><Link to="/"><b>Back to Homepage</b></Link>.</p>
                        <br />
                    </footer>
                </div>
            </div></body>

    );
}
