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


export default function Page() {

  return (
    <div className="full-body-parts">
      <Sidebar/>
      <main className="d-block ms-lg-auto content-parts d-block">
            <Navbar/>
            <div className="home-settings float-start w-100">
                 <div className='calendar-tab'>
                    
                    <h2> Integrations </h2>

                    <div className='calender-container mt-4'>
                        <div className='calendar'>
                                <div className='d-flex flex-column align-items-center gap-2 justify-content-center'>
                                    <MdOutlineDiscount className='coupon-page' />
                                    <p>No Coupons Found</p>






                                    <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample3" role="button" aria-controls="offcanvasExample">
                                        <FaPlus /> Add Coupon
                                    </a>


                                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample3" aria-labelledby="offcanvasExampleLabel">
                                        <div className="offcanvas-header">
                                            <h5 className="offcanvas-title" id="offcanvasExampleLabel">New Coupon</h5>
                                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div className="offcanvas-body">

                                            <div className='row'>
                                                <div className='row'>

                                                    <div className='row'>
                                                        <div className='col-lg-12'>
                                                            <label htmlFor="">Name &#40;For Internal Use&#41;</label>
                                                            <br />
                                                            <input type="text" placeholder='Name (For Internal Use)' />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-lg-12'>
                                                            <label htmlFor="">Code</label>
                                                            <br />
                                                            <input type="text" placeholder='code' />
                                                        </div>
                                                    </div>
                                                    <div className='row '>
                                                        <div className='col-lg-6'>
                                                            <label htmlFor="">Discount Value</label>
                                                            <br />
                                                            <input type="number" placeholder='' value='0.00' />
                                                        </div>
                                                        <div className='col-lg-6'>
                                                            <label htmlFor="">Discount Type</label>
                                                            <select>
                                                                <option value="">Persent</option>
                                                                <option value="">Fixed value</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-lg-12'>
                                                            <label htmlFor="">Status</label>
                                                            <br />
                                                            <select>
                                                                <option value="">Active</option>
                                                                <option value="">Disable</option>
                                                            </select>
                                                        </div>
                                                    </div>



                                                </div>

                                                <div className='row'>
                                                    <div className="orderitem d-flex justify-content-between">
                                                        <h3 className="orderitem-title">Time Restrictions</h3>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-lg-12'>
                                                            <div className="allowedrecords-text">
                                                                <p >You can set a specific time frame for when this coupon is active, which is helpful for seasonal promotions. Leaving either field blank will remove any time restrictions.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-lg-6'>
                                                            <label htmlFor="">Status</label>
                                                            <br />
                                                            <input type="text" placeholder='Active form' />
                                                        </div>
                                                        <div className='col-lg-6'>
                                                            <label htmlFor="">Active To</label>
                                                            <br />
                                                            <input type="text" placeholder='Active to' />
                                                        </div>
                                                    </div>



                                                </div>


                                                <div className='row'>
                                                    <div className="orderitem d-flex justify-content-between">
                                                        <h3 className="orderitem-title">Use Restrictions</h3>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-lg-12'>
                                                            <div className="allowedrecords-text">
                                                                <p >Here you can specify which service, agent or customer this coupon is applicable to. Leaving a field blank will make it applicable to all.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-lg-12'>
                                                            <label htmlFor="">Status</label>
                                                            <br />
                                                            <select>
                                                                <option value="">Service 1</option>
                                                                <option value="">Service 2</option>
                                                                <option value="">Full House cleaning</option>
                                                                <option value="">Express Detail Inside & Outside</option>
                                                                <option value=""> Jeep Gladiator</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-lg-12'>
                                                            <label htmlFor="">Agents</label>
                                                            <br />
                                                            <select>
                                                                <option value="">Lynn Nicely</option>
                                                                <option value="">Sara Brooks</option>
                                                                <option value="">tommy lasso</option>
                                                                <option value="">jackie rose</option>
                                                                <option value=""> kenny rodgers</option>
                                                                <option value="">dorothy rogers</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-lg-12'>
                                                            <label htmlFor="">Customers</label>
                                                            <br />
                                                            <select>
                                                                <option value="">Mike Jones</option>
                                                                <option value="">Martha Stewart</option>
                                                                <option value="">marth stuart</option>
                                                                <option value="">johnathan smith</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-lg-12'>
                                                            <label htmlFor="">Bundles</label>
                                                            <br />
                                                            <select>
                                                                <option value="">Combined</option>

                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className="orderitem d-flex justify-content-between">
                                                        <h3 className="orderitem-title">Usage Limits</h3>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-lg-12'>
                                                            <div className="allowedrecords-text">
                                                                <p >You can set a limit on how many times this coupon can be used, either per customer or in total. Leave blank to have no limits.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-lg-4'>
                                                            <label htmlFor="">Per Customer</label>
                                                            <br />
                                                            <input type="text" placeholder='Per Customer' />
                                                        </div>
                                                        <div className='col-lg-4'>
                                                            <label htmlFor="">Per Order</label>
                                                            <br />
                                                            <input type="text" placeholder='Per Order' />
                                                        </div>
                                                        <div className='col-lg-4'>
                                                            <label htmlFor="">Total </label>
                                                            <br />
                                                            <input type="text" placeholder='Total' />
                                                        </div>
                                                    </div>
                                                </div>






                                                <div className='row'>
                                                    <div className="orderitem d-flex justify-content-between">
                                                        <h3 className="orderitem-title">Order Count Requirements</h3>
                                                       
                                                    </div>

                                                   <div className='row'>
                                                        <div className='col-lg-12'>
                                                            <div className="allowedrecords-text">
                                                                <p >You can set requirements on how many orders a customer needs to have in order to use this coupon. Leave blank to have no requirements.</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className='col-lg-6'>

                                                            <label htmlFor="">Minimum</label>
                                                            <input type="text" placeholder='minimum'/>
                                                        </div>
                                                        <div className='col-lg-6'>

                                                        <label htmlFor="">Maximum</label>
                                                            <input type="text" placeholder='Maximum'/>
                                                        </div>
                                                    </div>
                                                </div>
                                                    <button>Create Coupon</button>




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
