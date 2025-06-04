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
import { MdOutlineDiscount } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import AddonMain from '../components/AddonMain';



export default function Page() {

  return (
        <div className="full-body-parts">
            <Sidebar/>
            <div className="d-block ms-lg-auto content-parts d-block">
                    <Navbar/>
                    <div className="home-settings float-start w-100">
                        <div className='calendar-tab'>
                            
                            <h2> Add-ons </h2>

                            <div className='calender-container mt-4'>
                                <div className='calendar'>
                                    <AddonMain/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <Footer/>
            
        </div>
  );
}
