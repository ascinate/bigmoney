"use client"
import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Link from 'next/link';
import { FaCircleCheck } from "react-icons/fa6";
import Image from 'next/image';
import { FaBars } from "react-icons/fa";
import { FiUser } from "react-icons/fi";



export default function Page() {
    const [viewLess, setViewLess] = useState(true);


    const handleViewLess = () => {

        setViewLess(!viewLess)
    }
  return (
    <div className="full-body-parts">
      <Sidebar/>
      <div className="d-block ms-lg-auto content-parts d-block">
            <Navbar/>
            <div className="home-settings float-start w-100">
                 <div className='calendar-tab'>
                    <h2 className='all-page-heading'> Launchpad </h2>
                    <div className="home-settings float-start w-100">
                        <div className='launchpad-head'>
                            <h5>Welcome to the Jobsify Launchpad</h5>
                            <p className='mb-2'>Your all-in-one setup guide to get your business up and running.</p>
                            <p className='mb-2'>From branding and services to client settings and automation—Launchpad will walk you through every step to fully configure your business inside Jobsify.</p>
                            <p>Let&#34;s get started building your business foundation.</p>
                           
                            <div className="progress">
                              <div className="progress-bar" role="progressbar" style={{width: '75%' }}></div>
                            </div>
                            <div className=' my-2 d-flex justify-content-between'>
                              
                                <p className='progress-text'>Progress 70%</p>
                                <div>
                                    <span>Your go-live day is May 30, 2025!</span>
                                    <span className='update-color mx-1'>Update</span>
                                </div>
                            </div>
                        </div>


                        

                        <div className='row gx-lg-5 mt-4'>
                            <div className="col-lg-8">
                                  <div className='cmon-staging-page active d-inline-block w-100'>
                                    <div className='row'>
                                        <div className='col-lg-1'>
                                            <div className='leftcircle01 position-relative'>
                                               
                                            </div>
                                        </div>
                                        <div className='col-lg-11'>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <h6 className='getting-start'>Getting Started:</h6>
                                                <button className='view-less-toggle' onClick={handleViewLess} >View less</button>
                                            </div>
                                            <p className='getting-start-text'>Set your ideal start date and enter your core business information.</p>

                                            {viewLess && (
                                                <div className='show-mains01'> 
                                                  <div className="accordion accordion-flush " id="accordionFlushExample">
                                                      <div className="accordion-item">
                                                          <h2 className="accordion-header" id="flush-headingOne">
                                                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                  <FaCircleCheck className='mx-2' /> Business Setup
                                                              </button>
                                                          </h2>
                                                          <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                              <div className="accordion-body">
                                                                  <div className='d-flex align-items-center justify-content-between'>
                                                                      <div className='toggle-check-color'>
                                                                          <p><FaCircleCheck className='mx-2' />Tell us about your timeline</p>
                                                                          <p><FaCircleCheck className='mx-2' />Tell us about you</p>
                                                                          <p><FaCircleCheck className='mx-2' />Add business contacts</p>
                                                                      </div>

                                                                      <div className='toggle-check-font'>
                                                                          <p>You will need:</p>
                                                                          <ul>
                                                                              <li>Legal business name</li>
                                                                              <li>Federal Tax ID &#40;FEIN&#41;</li>
                                                                              <li>Owner information &#40;including SSN&#41;</li>
                                                                              <li>Business bank information</li>
                                                                          </ul>
                                                                      </div>
                                                                  </div>

                                                              </div>
                                                          </div>
                                                      </div>

                                                  </div>

                                                   <div className='btn-div01 mt-4 main-last d-flex align-items-center justify-content-between w-100'>
                                                       <h5 className='mb-0'>
                                                         <span className='me-3'>
                                                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(102,108,255,1)"><path d="M3 21C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3ZM15 10H4V19H15V10ZM20 10H17V19H20V10ZM20 5H4V8H20V5Z"></path></svg>
                                                         </span>
                                                         Prepare for hardware shipment </h5> 
                                                       <Link href="/" className='btn all-btn btncont'> Continue <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg> </Link>
                                                   </div>

                                                </div>
                                            )}





                                        </div>

                                    </div>
                                  </div>


                                  <div className='cmon-staging-page d-inline-block w-100'>
                                    <div className='row'>
                                        <div className='col-lg-1'>
                                            <div className='leftcircle01 position-relative'>
                                               
                                            </div>
                                        </div>
                                        <div className='col-lg-11'>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <h6 className='getting-start'>Add your menu:</h6>
                                                <button className='view-less-toggle' onClick={handleViewLess} >View less</button>
                                            </div>
                                            <p className='getting-start-text'>Create a menu that works for your POS and online ordering channels.</p>

                                            {viewLess && (
                                                <div className='show-mains01'> 
                                                  <div className="accordion accordion-flush " id="accordionFlushExample">
                                                      <div className="accordion-item">
                                                          <h2 className="accordion-header" id="flush-headingOne">
                                                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne3" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                  <FaBars className='mx-2' /> Menu
                                                              </button>
                                                          </h2>
                                                          <div id="flush-collapseOne3" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                              <div className="accordion-body">
                                                                  <div className='d-flex align-items-center justify-content-between'>
                                                                      <div className='toggle-check-color'>
                                                                          <p><FaCircleCheck className='mx-2' />Tell us about your timeline</p>
                                                                          <p><FaCircleCheck className='mx-2' />Tell us about you</p>
                                                                          <p><FaCircleCheck className='mx-2' />Add business contacts</p>
                                                                      </div>

                                                                      <div className='toggle-check-font'>
                                                                          <p>You will need:</p>
                                                                          <ul>
                                                                              <li>Legal business name</li>
                                                                              <li>Federal Tax ID &#40;FEIN&#41;</li>
                                                                              <li>Owner information &#40;including SSN&#41;</li>
                                                                              <li>Business bank information</li>
                                                                          </ul>
                                                                      </div>
                                                                  </div>

                                                              </div>
                                                          </div>
                                                      </div>

                                                  </div>

                                                   

                                                </div>
                                            )}





                                        </div>

                                    </div>
                                  </div>


                                  <div className='cmon-staging-page d-inline-block w-100'>
                                    <div className='row'>
                                        <div className='col-lg-1'>
                                            <div className='leftcircle01 position-relative'>
                                               
                                            </div>
                                        </div>
                                        <div className='col-lg-11'>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <h6 className='getting-start'>Manage your team</h6>
                                                <button className='view-less-toggle' onClick={handleViewLess} >View less</button>
                                            </div>
                                            <p className='getting-start-text'>Add jobs and employees.</p>

                                            {viewLess && (
                                                <div className='show-mains01'> 
                                                  <div className="accordion accordion-flush " id="accordionFlushExample">
                                                      <div className="accordion-item">
                                                          <h2 className="accordion-header" id="flush-headingOne">
                                                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne4" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                  <FiUser className='mx-2' /> Employees
                                                              </button>
                                                          </h2>
                                                          <div id="flush-collapseOne4" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                              <div className="accordion-body">
                                                                  <div className='d-flex align-items-center justify-content-between'>
                                                                      <div className='toggle-check-color'>
                                                                          <p><FaCircleCheck className='mx-2' />Tell us about your timeline</p>
                                                                          <p><FaCircleCheck className='mx-2' />Tell us about you</p>
                                                                          <p><FaCircleCheck className='mx-2' />Add business contacts</p>
                                                                      </div>

                                                                      <div className='toggle-check-font'>
                                                                          <p>You will need:</p>
                                                                          <ul>
                                                                              <li>Legal business name</li>
                                                                              <li>Federal Tax ID &#40;FEIN&#41;</li>
                                                                              <li>Owner information &#40;including SSN&#41;</li>
                                                                              <li>Business bank information</li>
                                                                          </ul>
                                                                      </div>
                                                                  </div>

                                                              </div>
                                                          </div>
                                                      </div>

                                                  </div>

                                                   <div className='btn-div01 mt-4 main-last d-flex align-items-center justify-content-between w-100'>
                                                       <h5 className='mb-0'>
                                                         <span className='me-3'>
                                                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(102,108,255,1)"><path d="M3 21C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3ZM15 10H4V19H15V10ZM20 10H17V19H20V10ZM20 5H4V8H20V5Z"></path></svg>
                                                         </span>
                                                        Set up Shift Review </h5> 
                                                       <Link href="/" className='btn all-btn btncont'> Continue <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg> </Link>
                                                   </div>

                                                </div>
                                            )}





                                        </div>

                                    </div>
                                  </div>

                            </div>
                            <div className="col-lg-4">

                                <div className='main-white-bg p-4 bg-white w-100'>
                                  <div className="card p-0 border-0" >
                                      <div className="card-body p-0">
                                          <h5 className="card-title">Meetings</h5>
                                          <h6 className="card-subtitle mb-2 mt-4 text-muted">Guest product consultation</h6>
                                          <p className="card-text">Thursday, May 22 at 9:00 AM EDT</p>
                                          <div className='w-100 d-block mb-3 text-center'>
                                              <Link href="#" className="btn all-btn mb-2 btn-outline-primary w-100 card-link text-center">Prepare for meeting</Link>
                                              <br />
                                              <Link href="#" className="card-link text-center ">View past meeting</Link>
                                          </div>

                                      </div>
                                  </div>
                                </div>

                                <div className='main-white-bg p-4 bg-white w-100 mt-5'>
                                  <div className="card p-0 border-0" >
                                      <div className="card-body p-0">
                                          <h5 className="card-title">Your Toast Team</h5>
                                          <div className='d-flex mt-4 align-items-center w-100 justify-content-between'>
                                              <div className='let-ntext d-flex align-items-center col-lg-10'>
                                                  <Image src="/ato01.png" width="40" height="40" alt="mamns"/>
                                                   <h6 className='mb-0 ms-2'> Thursday, May 22 at 9:00 AM EDT
                                                       <strong className='d-block'>  Guest product consultation </strong>                   
                                                   </h6>
                                              </div>
                                              <button type='button' className='btn btn-hover01'>
                                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(178,178,178,1)"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>
                                              </button>
                                          </div>
                                         

                                      </div>
                                  </div>
                                </div>






                            </div>


                        </div>
                     </div>
                </div>
            </div>
      </div>
      <Footer/>
      
    </div>
  );
}
