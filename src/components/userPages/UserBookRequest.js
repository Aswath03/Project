import React from 'react'
import { Link } from 'react-router-dom'

import Carousel from 'react-bootstrap/Carousel';

import Image1 from '../Images/download.jpg';
import Image2 from '../Images/elantra.jpg';
import Image3 from '../Images/palisade-lx2-highlights-kv-pc.jpg';
import Image4 from '../Images/tucson.jpg';
import Image5 from '../Images/hyundai-story.jpg';


import '../../App.css';
import Logo from '../Images/speed-car-logo.png';

export default function UserBookRequest() {
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
                    <h1 className="text-center"> Requests List</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>

                                <td> Vehicle Name</td>
                                <td> Vehicle Number</td>
                                <td> Chassis Number</td>
                                <td> Vehicle Details</td>
                                <td>Actions</td>
                                <td>Actions</td>

                            </tr>

                        </thead>
                        <tbody>

                            <tr>

                                <td>Mayuri Takle</td>
                                <td>NA</td>
                                <td>NA</td>
                                <td>NA</td>
                                <button id="sub_btn" type="submit">Show-info</button>
                                <button id="sub_btn" type="submit">Select</button>
                              <td> <button id="sub_btn" type="submit">Want to change??</button>
                                <button id="sub_btn" type="submit">Book</button></td>
                            
                            </tr>
                            <tr>

                               
                            <td>Mayuri Takle</td>
                                <td>NA</td>
                                <td>NA</td>
                                <td>NA</td>
                                <button id="sub_btn" type="submit">Show-info</button>
                                <button id="sub_btn" type="submit">Select</button>
                                <td> <button id="sub_btn" type="submit">Want to change??</button>
                                <button id="sub_btn" type="submit">Book</button></td>
                            

                            </tr>
                            <tr>

                               
                            <td>Mayuri Takle</td>
                                <td>NA</td>
                                <td>NA</td>
                                <td>NA</td>
                                <button id="sub_btn" type="submit">Show-info</button>
                                <button id="sub_btn" type="submit">Select</button>
                                <td> <button id="sub_btn" type="submit">Want to change??</button>
                                <button id="sub_btn" type="submit">Book</button></td>
                            
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


              </div></body>
    )
}