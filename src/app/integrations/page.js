"use client"
import Link from 'next/link';
import { useState } from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { CgProfile } from "react-icons/cg";
import { FaPencil } from "react-icons/fa6";
import { HiMiniPlusCircle } from 'react-icons/hi2';
import LocationDefault from "../components/LocationDefault";
import LocationCategories from "../components/LocationCategories";
import { IoMdAddCircle } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";



export default function Page() {
   const [isVisible, setIsVisible] = useState(false);
    const toggleDiv = () => {
        setIsVisible((prev) => !prev);
    };
  return (
    <div className="full-body-parts">
      <Sidebar/>
      <main className="d-block ms-lg-auto content-parts d-block">
            <Navbar/>
            <div className="home-settings float-start w-100">
                 <div className='calendar-tab'>
                    
                          <h2>Location
                          </h2>
                    
                    <div className='calender-container mt-4'>
                          <div className='calendar'>
                              <div className='heading-automation'>
                                  <h2>Integrations</h2>
                              </div>
                              <ul className="nav nav-tabs" id="myTab" role="tablist">
                                  <li className="nav-item" role="presentation">
                                      <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Calendars</button>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                      <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Meetings</button>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                      <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Marketing</button>
                                  </li>
                              </ul>
                              <div className="tab-content" id="myTabContent">
                                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                      <div className='comon-tops-sets w-100'>
                                          <h2 className='cm-head'> Appointment Settings </h2>
                                      </div>
                                      <Link href="/add-ons" target="_blank" className='tax-section-addBtn' >
                                          <IoMdAddCircle />
                                          Enable this feature by installing an appropriate addon.
                                      </Link>
                                  </div>
                                  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                                      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                          <div className='comon-tops-sets w-100'>
                                              <h2 className='cm-head'>Video Meeting Systems</h2>
                                          </div>
                                          <div className='payments-stip w-100'>
                                              <div className='stripe '>
                                                  <div className='stripe-radio'>
                                                      <div className="form-check form-switch">
                                                          <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={toggleDiv} />
                                                      </div>
                                                      <p>Zoom</p>
                                                  </div>
                                              </div>

                                              {isVisible && (
                                                  <div className="w-100 d-block payments-nm-crm">
                                                      <div className='quoter d-block w-100'>
                                                          <div className='row'>
                                                              <div className='col-3'>
                                                                  <p className='m-0'> API Credentials </p>
                                                              </div>
                                                              <div className='col-9'>
                                                                  <div className='api-credentials d-flex align-items-center gap-4 '>
                                                                      <div id="blink-red">
                                                                      </div>
                                                                      <div>
                                                                          <span>Invalid API Credentials: Invalid client_id or client_secret</span>
                                                                      </div>
                                                                  </div>
                                                                  <div className='d-flex gap-5 my-2'>
                                                                      <div>
                                                                          <label htmlFor="">Account ID</label>
                                                                          <input type="text" placeholder='Account ID' className='form-control' />
                                                                      </div>
                                                                      <div>
                                                                          <label htmlFor="">Client ID</label>
                                                                          <input type="text" placeholder='Client ID' className='form-control' />
                                                                      </div>
                                                                      <div>
                                                                          <label htmlFor="">Client Secret</label>
                                                                          <input type="text" placeholder='Client Secret' className='form-control' />
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className='quoter d-block w-100'>
                                                          <div className='row'>
                                                              <div className='col-3'>
                                                                  <p className='m-0'> Other Settings </p>
                                                              </div>
                                                              <div className='col-9'>
                                                                  <div className='other-settings-bg'>
                                                                      <p>You can use variables in these templates, they will be replaced with a value for the booking.</p>
                                                                      <p className='show-available'><IoIosInformationCircleOutline /> Show Available Variables</p>
                                                                  </div>
                                                                  <div className='my-2'>
                                                                      <label htmlFor="">Template For Meeting Topic</label>
                                                                      <input type="text" value="{{service_name}}" className='form-control' />
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              )}
                                              <button type="button" class="btn btn-primary float-end my-4">Save Settings</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                          <div className='comon-tops-sets w-100'>
                                              <h2 className='cm-head'> Marketing Systems </h2>
                                          </div>
                                          <Link href="/add-ons" target="_blank" className='tax-section-addBtn' >
                                              <IoMdAddCircle />

                                              Enable this feature by installing an appropriate addon.
                                          </Link>
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
  );
}
