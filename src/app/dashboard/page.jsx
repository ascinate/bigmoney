import React from 'react'
import { IoIosInformationCircle } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { RiImportLine } from "react-icons/ri";
import Amchart from '../components/dashboard/Amchart';
import CalendarMain from '../components/Calendar/CalendarMain';
import Sidebar from '../components/Sidebar';


function Page() {
    return (
        <>
            <div className="full-body-parts">

                <main className="d-block ms-lg-auto content-parts d-block">
                    {/* <Navbar/> */}
                    <div className="home-settings float-start w-100">
                        <section className='calendar-tab'>
                            <div className='calender-container'>
                                <div className="container my-5">
                                    <div className='row'>
                                        <div className='col-lg-8 '>
                                            {/* <div className='calendar'> */}
                                            <div className='performance-container'>
                                                <div className='heading-automation'>
                                                    <h2 className='headtitle'>Performance</h2>
                                                    <div className='d-flex selectTag'>
                                                        <select name="location_id" className="performance-select form-select">
                                                            <option value="">All locations</option>
                                                            <option value="1">Main Location</option>
                                                            <option value="2">Home</option>
                                                            <option value="3">Hospital</option>
                                                            <option value="4">Mobile</option>
                                                        </select>

                                                        <select name="agent_id" id="" className="performance-select form-select">
                                                            <option value="">All Agents</option>
                                                            <option value="1">Lynn Nicely</option>
                                                            <option value="2">Sara Brooks</option>
                                                            <option value="3">tommy lasso</option>
                                                            <option value="4">jackie rose</option>
                                                            <option value="5">kenny rodgers</option>
                                                            <option value="6">dorothy rogers</option>
                                                        </select>

                                                        <select name="service_id" id="" className="performance-select form-select">
                                                            <option value="">All Services</option>
                                                            <option value="1">Service 1</option>
                                                            <option value="2">Service 2</option>
                                                            <option value="3">Full House Cleaning </option>
                                                            <option value="4">Express Detail Inside &amp; Outside</option>
                                                            <option value="5">Jeep Gladiator</option>
                                                        </select>
                                                        <input type="date" className="performance-select" />
                                                    </div>
                                                </div>
                                                <div className='d-flex align-item-ceneter juatify-content-center'>
                                                    <div className='performance-sub-heading performance-sub-row w-100'>
                                                        <p className='sub-heading-number'>2 <sup className='sub-number' >-33%</sup> <span className='infoIcon' >  <IoIosInformationCircle /> </span> </p>
                                                        <p className='sub-heading-appointments'>Appointments</p>
                                                    </div>
                                                    <div className='performance-sub-heading performance-sub-row w-100'>
                                                        <p className='sub-heading-number'>2 <sup className='sub-number'>-33%</sup> <span className='infoIcon'> <IoIosInformationCircle /> </span> </p>
                                                        <p className='sub-heading-appointments'>Appointments</p>
                                                    </div>
                                                    <div className='performance-sub-heading performance-sub-row w-100'>
                                                        <p className='sub-heading-number'>2 <sup className='sub-number'>-33%</sup> <span className='infoIcon'> <IoIosInformationCircle /> </span> </p>
                                                        <p className='sub-heading-appointments'>Appointments</p>
                                                    </div>
                                                    <div className='performance-sub-heading  w-100'>
                                                        <p className='sub-heading-number'>2 <sup className='sub-number'>-33%</sup> <span className='infoIcon'> <IoIosInformationCircle /> </span> </p>
                                                        <p className='sub-heading-appointments'>Appointments</p>
                                                    </div>
                                                </div>
                                                <Amchart />
                                            </div>
                                            {/* </div> */}
                                        </div>
                                        <div className='col-lg-4'>

                                            <div className='performance-container'>
                                                <div className='heading-automation'>
                                                    <h2 className='headtitle'>Upcoming</h2>
                                                    <div className='d-flex selectTag'>
                                                        <select name="location_id" className="performance-select form-select">
                                                            <option value="">All locations</option>
                                                            <option value="1">Main Location</option>
                                                            <option value="2">Home</option>
                                                            <option value="3">Hospital</option>
                                                            <option value="4">Mobile</option>
                                                        </select>

                                                        <select name="agent_id" id="" className="performance-select form-select">
                                                            <option value="">All Agents</option>
                                                            <option value="1">Lynn Nicely</option>
                                                            <option value="2">Sara Brooks</option>
                                                            <option value="3">tommy lasso</option>
                                                            <option value="4">jackie rose</option>
                                                            <option value="5">kenny rodgers</option>
                                                            <option value="6">dorothy rogers</option>
                                                        </select>

                                                        <select name="service_id" id="" className="performance-select form-select">
                                                            <option value="">All Services</option>
                                                            <option value="1">Service 1</option>
                                                            <option value="2">Service 2</option>
                                                            <option value="3">Full House Cleaning </option>
                                                            <option value="4">Express Detail Inside &amp; Outside</option>
                                                            <option value="5">Jeep Gladiator</option>
                                                        </select>
                                                    </div>
                                                    <div className='upcomming-buttom text-center'>
                                                        <RiImportLine className='import-icon' />
                                                        <p>No Upcoming Appointments</p>
                                                        <button className='btn addAppointment'><FaPlus />Add Appointment</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div className='row my-5'>
                                        <div className='col-lg-12'>
                                            <div className='performance-container'>
                                                <div className='heading-automation'>
                                                    <h2 className='headtitle'>Day Preview</h2>
                                                    <div className='d-flex justify-content-between align-content-center'>
                                                        <div>
                                                            <input type="date" className="performance-select" />
                                                            <select name="location_id" className="performance-select">
                                                                <option value="">All locations</option>
                                                                <option value="1">Main Location</option>
                                                                <option value="2">Home</option>
                                                                <option value="3">Hospital</option>
                                                                <option value="4">Mobile</option>
                                                            </select>

                                                            <select name="agent_id" id="" className="performance-select">
                                                                <option value="">All Agents</option>
                                                                <option value="1">Lynn Nicely</option>
                                                                <option value="2">Sara Brooks</option>
                                                                <option value="3">tommy lasso</option>
                                                                <option value="4">jackie rose</option>
                                                                <option value="5">kenny rodgers</option>
                                                                <option value="6">dorothy rogers</option>
                                                            </select>

                                                        </div>



                                                        <div className=''>
                                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                                <li className="nav-item" role="presentation">
                                                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Show Appointments</button>
                                                                </li>
                                                                <li className="nav-item" role="presentation">
                                                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Show Availability</button>
                                                                </li>

                                                            </ul>
                                                            <div className="tab-content" id="myTabContent">
                                                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
                                                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>

                                                            </div>
                                                        </div>


                                                    </div>

                                                </div>
                                            </div>
                                            <CalendarMain />

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </section >
                    </div>
                </main>
            </div>
            <Sidebar />



        </>
    )
}

export default Page
