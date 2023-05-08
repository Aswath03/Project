import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css';
import Logo from '../Images/speed-car-logo.png';

export default function OwnerRequest() {
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
                <div className="text-center m-3-auto pt-2 mb-1" id='userLogin'>
                    <h1>Request for Rent</h1>

                    <form action="/home">

                        <div className="row g-2">
                            <div className="col-5">
                                <label for="validationTooltip01" id='userdetails'>Vehicle Name</label>
                                <input style={{ border: '2px solid rgb(32, 31, 31)' }} type="text" className="form-control" id="validationTooltip01" required />

                            </div>
                            <div className="col-5">
                                <label for="validationTooltip02" id='userdetails'>Vehicle Number</label>
                                <input style={{ border: '2px solid rgb(32, 31, 31)' }} type="text" className="form-control" id="validationTooltip02" required />
                                <div className="valid-tooltip">
                                    Looks good!
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 col-md-2 position-relative">

                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <label for="validationTooltip02" id='userdetails'>UploadImage</label>
                                </div>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="inputGroupFile01"
                                        aria-describedby="inputGroupFileAddon01" />
                                    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                                </div>
                            </div>
                            <div className="valid-tooltip">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-6">
                            <label for="validationTooltip03" id='userdetails'>Chassis Number </label>
                            <input style={{ border: '2px solid rgb(32, 31, 31)' }} type="tel" pattern="[7-9]{1}[0-9]{9}" className="form-control" id="validationTooltip03" required />
                            <div className="invalid-feedback">
                                Please Enter the chassis number.
                            </div>
                        </div>







                        <div className="col-12">
                            <button id="sub_btn" type="submit">Submit Request</button>
                        </div>

                    </form >
                    <footer>
                        <p><Link to="/"><b>Back to Homepage</b></Link>.</p>
                        <br />
                    </footer>
                </div>
            </div></body>

    );
}
