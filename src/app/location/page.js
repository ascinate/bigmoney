import react from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Link from 'next/link';
import { CgProfile } from "react-icons/cg";
import { FaPencil } from "react-icons/fa6";
import { HiMiniPlusCircle } from 'react-icons/hi2';
import LocationDefault from "../components/LocationDefault";
import LocationCategories from "../components/LocationCategories";



export default function Page() {
   
  return (
    <div className="full-body-parts">
      <Sidebar/>
      <div className="d-block ms-lg-auto content-parts d-block">
            <Navbar/>
            <div className="home-settings float-start w-100 mb-5">
                 <div className='calendar-tab'>
                    <h2> Location </h2>
                    <div className='calender-container mt-4'>
                                <div className='calendar navTab-btn'>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Location</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Categories</button>
                                        </li>
                                        
                                    </ul>
                                    <div className="tab-content pt-4" id="myTabContent">
                                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"> <LocationDefault /></div>
                                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><LocationCategories/></div>
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
