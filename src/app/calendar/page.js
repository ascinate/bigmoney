
"use client";
import React from 'react'
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import Navbar from '../components/Navbar.js';
import Sidebar from '../components/Sidebar.js';
import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { RiResetRightLine } from "react-icons/ri";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import PhoneNumberInput from '../components/PhoneNumberInput.js';
import Footer from '../components/Footer.js';

const locales = {
    "en-US": enUS,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
    getDay,
    locales,
});

const events = [];

export default function page() {

    const [selectedDate, setSelectedDate] = useState(null);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [view, setView] = useState(Views.MONTH);

    const handleSelectSlot = (slotInfo) => {
        setSelectedDate(slotInfo.start);
    };

  return (
    <div className="full-body-parts">
      <Sidebar/>
      <main className="d-block ms-lg-auto content-parts d-block">
            <Navbar/>
            <div className="home-settings float-start w-100">
              <section className='calendar-tab'>
                <div className='calender-container'>
                    <div className="container">
                        <div className='row'>
                            <div className='col-lg-12 '>
                                <div className='calendar'>
                                    <div className="container-fluid vh-100 d-flex">
                                        <div className="col-12 p-3">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h4 className="mb-0">{format(currentDate, "MMMM yyyy")}</h4>
                                                <div className="btn-group">
                                                    <button className="btn btn-outline-primary" onClick={() => setView(Views.MONTH)}>Month</button>
                                                    <button className="btn btn-outline-primary" onClick={() => setView(Views.WEEK)}>Week</button>
                                                    <button className="btn btn-outline-primary" onClick={() => setView(Views.DAY)}>Day</button>
                                                    <button className="btn btn-outline-secondary" onClick={() => setCurrentDate(new Date())}>Today</button>
                                                </div>
                                            </div>
                                            <div style={{ height: "calc(100vh - 120px)" }}>
                                                <Calendar
                                                    localizer={localizer}
                                                    events={events}
                                                    startAccessor="start"
                                                    endAccessor="end"
                                                    views={["month", "week", "day"]}
                                                    selectable
                                                    onSelectSlot={handleSelectSlot}
                                                    onNavigate={(date) => setCurrentDate(date)}
                                                    onView={(view) => setView(view)}
                                                    view={view}
                                                    date={currentDate}
                                                    style={{ height: "100%" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {selectedDate && (
                        <div className="col-3 p-3 border-start bg-light calender-left-card">

                            <div className='new-order d-flex align-items-center justify-content-between'>
                                <div>
                                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">New Order
                                    </h5>
                                </div>
                                <div>
                                    <button className="btn btn-sm btn-outline-danger mb-2 btn-close text-reset" onClick={() => setSelectedDate(null)}></button>
                                </div>

                            </div>


                            <form action="" className='orderStatus'>
                                <div>
                                    <label htmlFor="" className='orderStatus-label'>order status</label>
                                    <br />
                                    <select name="orderstatus" id="orderstatus" className='orderstatus-select'>
                                        <option value="setstatus">Set Status</option>
                                        <option value="Open">Open</option>
                                        <option value="Cancelled">Cancelled</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </div>


                                <div>
                                    <label htmlFor="" className='orderStatus-label'>Fullfilment Status</label>
                                    <br />
                                    <select name="fullfilmentstatus" id="fullfilmentstatus" className='orderstatus-select'>
                                        <option value="setstatus">Set Status</option>
                                        <option value="notfulfilled">Not Fulfilled</option>
                                        <option value="fulfilled">Fulfilled</option>
                                        <option value="partiallyfulfilled">Partially Fulfilled</option>
                                    </select>
                                </div>

                            </form>


                            <div className="order-container">
                                <div className="orderitem d-flex justify-content-between">
                                    <h3 className="orderitem-title">Order Item</h3>
                                    <p className='orderitem-para d-flex align-items-center'> <FaPlus /> Add Another Item</p>
                                </div>
                                <form action="">
                                    <label for="cars">Service</label>
                                    <br />
                                    <select name="cars" id="cars" className='orderitem-service uncategorized'>
                                        <optgroup label="Uncategorized" className='uncategorized'>
                                            <option value="setstatus" className='service-1'>Service 1</option>
                                            <option value="notfulfilled">Service 2</option>
                                            <option value="fulfilled">Full house cleaning</option>

                                        </optgroup>
                                        <optgroup label="Mobile Detailing">
                                            <option value="mercedes">Express Detail Inside & Outside</option>
                                        </optgroup>
                                    </select>
                                    <label for="cars">Location</label>
                                    <br />
                                    <select name="cars" id="cars" className='orderitem-service uncategorized'>
                                        <option value="setstatus" className='service-1'>Home</option>
                                        <option value="notfulfilled">Hospital</option>
                                        <option value="fulfilled">Main Location</option>
                                    </select>

                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <label htmlFor="" className='orderStatus-label'>Agent</label>
                                            <br />
                                            <select name="orderstatus" id="orderstatus" className='orderstatus-select'>
                                                <option value="setstatus">Lynn Nicely</option>
                                                <option value="notfulfilled">Sara Brooks</option>
                                            </select>
                                        </div>


                                        <div>
                                            <label htmlFor="" className='orderStatus-label'>Status</label>
                                            <br />
                                            <select name="fullfilmentstatus" id="fullfilmentstatus" className='orderstatus-select'>
                                                <option value="setstatus">Set Status</option>
                                                <option value="notfulfilled">Approved</option>
                                                <option value="setstatus">Pending Approval</option>
                                                <option value="notfulfilled">Cancelled</option>
                                                <option value="setstatus">No Show</option>
                                                <option value="notfulfilled">Completed</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div>
                                            <label htmlFor="" className='orderStatus-label'>Start Date</label>
                                            <br />
                                            <input type="text" placeholder='dd/mm/yy' className='inputdate' />
                                        </div>


                                        <div>
                                            <button name="fullfilmentstatus" id="fullfilmentstatus" className='availablity-btn '>
                                                Availablity <FaArrowRight />
                                            </button>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-6 inputdiv'>
                                            <label htmlFor="" className='orderStatus-label'>Start date</label>
                                            <br />
                                            <input type="text" value="08:00" className='startendinput' />
                                            <div className='ampmdiv'>
                                                <label className="ampm-toggle">
                                                    <input type="checkbox" id="" name="" value="" />
                                                    <div className="toggle-button"></div>
                                                    <div className="toggle-off-txt"></div>
                                                </label>
                                            </div>

                                        </div>
                                        <div className='col-lg-6'>
                                            <label htmlFor="" className='orderStatus-label'>End date</label>
                                            <br />
                                            <input type="text" value="08:00" className="startendinput" />

                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-lg-6 inputdiv'>
                                            <label htmlFor="" className='orderStatus-label'>Start date</label>
                                            <br />
                                            <input type="text" value="08:00" className='startendinput' form-control />



                                        </div>
                                        <div className='col-lg-6'>
                                            <label htmlFor="" className='orderStatus-label'>End date</label>
                                            <br />
                                            <input type="text" value="08:00" className="startendinput" />

                                        </div>
                                    </div>


                                </form>


                                <div>
                                    <div className="orderitem d-flex justify-content-between">
                                        <h3 className="orderitem-title">Customer</h3>
                                        <div className='customer-font d-flex gap-2'>
                                            <p className='orderitem-para d-flex align-items-center'> <FaPlus /> New</p>
                                            <p className='orderitem-para d-flex align-items-center'> <IoIosSearch />Find</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <label htmlFor="">First name</label>
                                            <br />
                                            <input type="text" placeholder='firstname' className='startendinput'/>
                                        </div>
                                        <div className='col-lg-6'>
                                            <label htmlFor="">Last name</label>
                                            <br />
                                            <input type="text" placeholder='lastname' className='startendinput'/>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <label htmlFor="">Email Address</label>
                                            <br />
                                            <input type="text" placeholder='email address' className='startendinput'/>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <label htmlFor="">Phone Number</label>
                                            <br />
                                            <PhoneNumberInput />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <label htmlFor="">Customer Notes</label>
                                            <br />
                                            <input type="text" placeholder='customer Notes' className='startendinput'/>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <label htmlFor="">Notes only visible to admins</label>
                                            <br />
                                            <input type="text" placeholder='Notes only visible to admins' className='startendinput'/>
                                        </div>
                                    </div>

                                </div>

                                <div>
                                    <div className="orderitem d-flex justify-content-between">
                                        <h3 className="orderitem-title">Price Breakdown</h3>
                                        <div className='customer-font d-flex gap-2'>
                                            <p className='orderitem-para d-flex align-items-center'> <RiResetRightLine /> Recalculate</p>
                                        </div>
                                    </div>
                                    <div className='row row-under-line'>
                                        <div className='col-lg-6'>
                                            <p className=''>Service 1</p>
                                        </div>
                                        <div className='col-lg-6 '>
                                            <input type="text" placeholder='' value='$100.00' className='row-input' />
                                        </div>
                                    </div>
                                    <div className='row row-under-line'>
                                        <div className='col-lg-6'>
                                            <p>Sub total</p>
                                        </div>
                                        <div className='col-lg-6'>
                                            <input type="text" placeholder='' value='$100.00' className='row-input' />
                                        </div>
                                    </div>
                                    <div className='row row-under-line'>
                                        <div className='col-lg-6'>
                                            <p>Putnam County &#40;6%&#41;</p>
                                        </div>
                                        <div className='col-lg-6'>
                                            <input type="text" placeholder='' value='$6.00' className='row-input-total' />
                                        </div>
                                    </div>
                                    <div className='row row-under-line-bold'>
                                        <div className='col-lg-6'>
                                            <p>Total Price</p>
                                        </div>
                                        <div className='col-lg-6'>
                                            <input type="text" placeholder='' value='$106.00' className='row-input' />
                                        </div>

                                    </div>


                                    <div className='row'>
                                        <div className='col-lg-12 use-coupon'>
                                            <div className="form-check form-switch ">
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                                <label className="form-check-label" for="flexSwitchCheckChecked">Use Coupon</label>
                                            </div>
                                        </div>
                                     

                                    </div>
                                </div>


                                <div>
                                    <div className="orderitem d-flex justify-content-between ">
                                        <h3 className="orderitem-title">Balance & Payments</h3>
                                        <div className='customer-font d-flex gap-2'>
                                            <select name="" id="" className='balAndPay'>
                                                <option value="">Not Paid</option>
                                                <option value="">Partially Paid</option>
                                                <option value="">Fully Paid</option>
                                                <option value="">Processing</option>
                                            </select>
                                        </div>
                                    </div>


                                    <div className='row total-ammount-div'>
                                        <div className='col-6'>
                                            <p> $0.00</p>
                                        </div>
                                        <div className='col-6'>
                                            <p className='totlal-ammount'>$106.00</p>
                                        </div>
                                    </div>
                                    <div className='row '>
                                        <div className='col-6'>
                                            <p className='total-payment'> Total Payments</p>
                                        </div>
                                        <div className='col-6'>
                                            <p className='total-payment'>Total Balance Due</p>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-lg-6 use-coupon'>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                                <label className="form-check-label" for="flexSwitchCheckChecked">Create a Payment Request</label>
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <IoIosInformationCircleOutline />
                                        </div>

                                    </div>
                                </div>

                                <div>
                                    <div className="orderitem d-flex justify-content-between">
                                        <h3 className="orderitem-title">Transactions</h3>
                                    </div>
                                    <button name="fullfilmentstatus" id="fullfilmentstatus" className='add-transaction'>
                                        <AiOutlinePlus />
                                        Add Transaction
                                    </button>
                                </div>

                                <button className='create-order'>Create Order</button>

                            </div>

                        </div>

                    )}

                </div>

             </section >
                
            </div>
      </main>
      <Footer/>
      
    </div>
  );
}
