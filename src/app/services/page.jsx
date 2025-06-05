"use client"

import Sidebar from "../components/Sidebar"


import { FaPencilAlt } from 'react-icons/fa';
import Service from '../components/ServiceComponent/Service';
import Bundles from '../components/ServiceComponent/Bundles';
import LocationCategories from '../components/LocationCategories';
import ServiceExtras from '../components/ServiceComponent/ServiceExtras';

function Page() {
    return (
        <>
            <div className="full-body-parts">

                <main className="d-block ms-lg-auto content-parts d-block">
                    {/* <Navbar/> */}
                    <div className="home-settings float-start w-100">
                        <section className='calendar-tab'>
                            <div className='calender-container'>
                                <div className="container">
                                    <div className='row'>
                                        <div className='col-lg-12 '>
                                            <div className='calendar'>
                                                <h2 className='Loation-heading'>Services</h2>
                                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Service</button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Bundles</button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Categories</button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Service Extras</button>
                                                    </li>
                                                </ul>
                                                <div className="tab-content" id="myTabContent">
                                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><Service /></div>
                                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><Bundles /></div>
                                                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><LocationCategories /></div>
                                                    <div className="tab-pane fade show active" id="hom" role="tabpanel" aria-labelledby="home-tab"><ServiceExtras /></div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
            <Sidebar />


        </>
    )
}

export default Page
