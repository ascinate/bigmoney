'use client'
import * as React from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Payments from "../components/Payments";
import GeneralSettings from "../components/GeneralSettings";
import Footer from "../components/Footer";
import Schedule from "../components/Schedule";
import Tax from "../components/Tax";
import BookingForm from "../components/BookingForm";
import Role from "../components/Role";
import PremiumFeatures from "../components/PremiumFeatures";
import Notification from "../components/Notification";
import { TfiDownload } from "react-icons/tfi";
import CustomerProfileModal from '../components/CustomerProfileModal';
import Image from "next/image";
import CompletedBtn from '../components/CompletedBtn';
import { DataGrid } from '@mui/x-data-grid';
import Link from 'next/link';
import Workflows from '../components/Workflows';
import ScheduledJobs from '../components/ScheduledJobs';
import ActivityLog from '../components/ActivityLog';


export default function Page() {

  return (
    <div className="full-body-parts">
      <Sidebar/>
      <main className="d-block ms-lg-auto content-parts d-block">
            <Navbar/>
            <div className="home-settings float-start w-100">
                 <div className='calendar-tab'>
                    <div className='d-flex align-items-center justify-content-between w-100'>
                          <h2>Order
                           
                          </h2>
                           <Link href='/' download className='btn btn-donload'>
                                    <TfiDownload /> Download .csv
                           </Link>
                    </div>
                    <div className='calender-container mt-4'>
                        <div className='calendar-tab'>
                            <div className='calender-container'>
                              <div className="container">
                                <div className='row'>
                                    <div className='col-lg-12 '>
                                        <div className='calendar'>
                                            <div className='heading-automation'>
                                                <h2>Automation</h2>
                                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Workflows</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Scheduled Jobs</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Activity Log</button>
                                                </li>
                                                </ul>
                                                <div className="tab-content" id="myTabContent">
                                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                    <Workflows />
                                                </div>
                                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                                                    <ScheduledJobs />

                                                </div>
                                                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                                    <ActivityLog />
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
                </div>
            </div>
      </main>
      <Footer/>
      
    </div>
  );
}
