import React from 'react'
import { Link } from 'react-router-dom'



import '../../App.css';
import Logo from '../Images/speed-car-logo.png';

export default function AdminView() {
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
                <div className="text-center m-5-auto pt-2" id='userLogin'>
                    <h1 className="text-center"> Requests List</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>

                                <td> Owner Name</td>
                                <td> Vehicle Details</td>
                                <td> Vehicle Image</td>
                                <td> Verify</td>
                                <td>Accept/Reject</td>
                            </tr>

                        </thead>
                        <tbody>

                            <tr>

                                <td>Mayuri Takle</td>
                                <td>NA</td>
                                <td>NA</td>
                                <td>NA</td>
                                <button id="sub_btn" type="submit">Approve</button>
                                <button id="sub_btn" type="submit">Delete</button>
                            </tr>
                            <tr>

                               
                            <td>Mayuri Takle</td>
                                <td>NA</td>
                                <td>NA</td>
                                <td>NA</td>
                                <button id="sub_btn" type="submit">Approve</button>
                                <button id="sub_btn" type="submit">Delete</button>

                            </tr>
                            <tr>

                               
                            <td>Mayuri Takle</td>
                                <td>NA</td>
                                <td>NA</td>
                                <td>NA</td>
                                <button id="sub_btn" type="submit">Approve</button>
                                <button id="sub_btn" type="submit">Delete</button>

                            </tr>

                            {/* {
                            this.state.users.map(
                                user => 
                                <tr key = {user.id}>
                                     <td> {user.id}</td>   
                                     <td> {user.firstName}</td>   
                                     <td> {user.lastName}</td>   
                                     <td> {user.email}</td>   
                                </tr>
                            )
                        } */}

                        </tbody>
                    </table>

                </div>


            </div>
            <br /><br /></body>
    )
}
