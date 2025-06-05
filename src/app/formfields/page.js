"use client"
import React, { useState } from 'react'
import ToggleSwitch from '../components/ToggleSwitch';
import { useToggleManager } from '../components/custom-hook/useToggleManager';
import { FiEdit3 } from "react-icons/fi";
import CustomFields from '../components/CustomFields';
import BookingFields from '../components/BookingFields';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Page() {

    const [firstName, setFirstName] = useState(false);
    const [lastName, setLastName] = useState(false);
    const [emailAddress, setEmailAddress] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState(false);
    const [comments, setComments] = useState(false);
    const { state, toggle } = useToggleManager();



    const handleFname = () => {
        setFirstName(!firstName)
    }
    const handleLname = () => {
        setLastName(!lastName)
    }
    const handleEmail = () => {
        setPhoneNumber(!emailAddress)
    }
    const handlePhoneNumber = () => {
        setPhoneNumber(!phoneNumber)
    }
    const handleComments = () => {
        setComments(!comments)
    }

    return (

        <>
             <div className="full-body-parts">
               <Sidebar/>
                <main className="d-block ms-lg-auto content-parts d-block">
                        <Navbar/>
                        <div className="home-settings float-start w-100">
                             <div className='calendar-tab'>
                                <div className='calender-container'>
                                    <div className="container">
                                        <div className='row'>
                                            <div className='col-lg-12 '>
                                                <div className='calendar navTab-btn'>
                                                    <div className='heading-automation'>
                                                        <h2>Form Fields</h2>

                                                        <ul class="nav nav-tabs border-0 mt-4" id="myTab" role="tablist">
                                                            <li class="nav-item" role="presentation">
                                                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Customer Fields</button>
                                                            </li>
                                                            <li class="nav-item" role="presentation">
                                                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Booking Fields</button>
                                                            </li>

                                                        </ul>
                                                        <div class="tab-content" id="myTabContent">
                                                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                                                                <div className='comon-tops-sets w-100'>
                                                                    <h2 className='cm-head'> Default Fields </h2>
                                                                </div>
                                                                <div id='week-days' className='form-fields-row'>
                                                                    <div className='day-name-time d-flex align-items-center' onClick={handleFname}>
                                                                        <ToggleSwitch
                                                                            id="firstName"
                                                                            label="First Name"
                                                                            checked={state.firstName}
                                                                            onChange={() => toggle('firstName')}
                                                                        />
                                                                    </div>
                                                                    {firstName &&
                                                                        (
                                                                            <div className='d-flex'>
                                                                                <div className='required-input required-color'>
                                                                                    <input type="checkbox" className='mx-2 ' />
                                                                                    <span>Required?</span>
                                                                                </div>
                                                                                <div className=''>
                                                                                    <select name="" id="" className='required-input'>
                                                                                        <option value="HalfWidth">Half Width</option>
                                                                                        <option value="FullWidth">Full Width</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        )

                                                                    }
                                                                </div>
                                                                <div id='week-days' className='form-fields-row'>
                                                                    <div className='day-name-time d-flex align-items-center' onClick={handleLname}>
                                                                        <ToggleSwitch
                                                                            id="lastName"
                                                                            label="Last Name"
                                                                            checked={state.lastName}
                                                                            onChange={() => toggle('lastName')}
                                                                        />
                                                                    </div>
                                                                    {lastName &&
                                                                        (
                                                                            <div className='d-flex'>
                                                                                <div className='required-input required-color'>
                                                                                    <input type="checkbox" className='mx-2 ' />
                                                                                    <span>Required?</span>
                                                                                </div>
                                                                                <div className=''>
                                                                                    <select name="" id="" className='required-input'>
                                                                                        <option value="HalfWidth">Half Width</option>
                                                                                        <option value="FullWidth">Full Width</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    }
                                                                </div>
                                                                <div id='week-days' className='form-fields-row'>
                                                                    <div className='day-name-time d-flex align-items-center' onClick={handleEmail}>
                                                                        <ToggleSwitch
                                                                            id="emailAddress"
                                                                            label="Email Address"
                                                                            checked={state.emailAddress}
                                                                            onChange={() => toggle('emailAddress')}
                                                                        />
                                                                    </div>
                                                                    {emailAddress &&
                                                                        (
                                                                            <div className='d-flex'>
                                                                                <div className='required-input required-color'>
                                                                                    <input type="checkbox" className='mx-2 ' />
                                                                                    <span>Required?</span>
                                                                                </div>
                                                                                <div className=''>
                                                                                    <select name="" id="" className='required-input'>
                                                                                        <option value="HalfWidth">Half Width</option>
                                                                                        <option value="FullWidth">Full Width</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        )

                                                                    }
                                                                </div>
                                                                <div id='week-days' className='form-fields-row'>
                                                                    <div className='day-name-time d-flex align-items-center' onClick={handlePhoneNumber}>
                                                                        <ToggleSwitch
                                                                            id="phoneNumber"
                                                                            label="Phone Number"
                                                                            checked={state.phoneNumber}
                                                                            onChange={() => toggle('phoneNumber')}
                                                                        />
                                                                    </div>
                                                                    {phoneNumber &&
                                                                        (
                                                                            <div className='d-flex'>
                                                                                <div className='required-input required-color'>
                                                                                    <input type="checkbox" className='mx-2 ' />
                                                                                    <span>Required?</span>
                                                                                </div>
                                                                                <div className=''>
                                                                                    <select name="" id="" className='required-input'>
                                                                                        <option value="HalfWidth">Half Width</option>
                                                                                        <option value="FullWidth">Full Width</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        )

                                                                    }
                                                                </div>
                                                                <div id='week-days' className='form-fields-row'>
                                                                    <div className='day-name-time d-flex align-items-center' onClick={handleComments}>
                                                                        <ToggleSwitch
                                                                            id="comments"
                                                                            label="Comments"
                                                                            checked={state.comments}
                                                                            onChange={() => toggle('comments')}
                                                                        />
                                                                    </div>
                                                                    {comments &&
                                                                        (
                                                                            <div className='d-flex'>
                                                                                <div className='required-input required-color'>
                                                                                    <input type="checkbox" className='mx-2 ' />
                                                                                    <span>Required?</span>
                                                                                </div>
                                                                                <div className=''>
                                                                                    <select name="" id="" className='required-input'>
                                                                                        <option value="HalfWidth">Half Width</option>
                                                                                        <option value="FullWidth">Full Width</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    }
                                                                </div>

                                                                <div className='comon-tops-sets w-100'>
                                                                    <h2 className='cm-head'> Custom Fields </h2>
                                                                </div>
                                                                <CustomFields />
                                                            </div>
                                                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"> <BookingFields /> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </main>
              <Footer/>
      
             </div>
        </>
       
    )
}

export default Page;
