
"use client";
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
import { MdDeleteOutline , MdOutlineDeleteOutline } from "react-icons/md";
import Link from "next/link.js";

 

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

export default function Page() {

    const [selectedDate, setSelectedDate] = useState(null);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [view, setView] = useState(Views.month);

    const handleSelectSlot = (slotInfo) => {
        setSelectedDate(slotInfo.start);
    };

  const [divs, setDivs] = useState([]);
 
  const addDiv = () => {
    const newDiv = { id: Date.now() };
    setDivs([...divs, newDiv]);
  };
 
  const removeDiv = (idToRemove) => {
    setDivs(divs.filter((div) => div.id !== idToRemove));
  };

  const [showFirst, setShowFirst] = useState(true);
  const [findToggle, setFindToggle] = useState(false);


  const [addNewTask, setaddNewTask] = useState([]);

  const handleAddNew = () => {
        const newDiv = { id: Date.now() };
        setaddNewTask([...addNewTask, newDiv]);
  };


  return (
    <div className="full-body-parts">
      <Sidebar/>
      <main className="d-block ms-lg-auto content-parts d-block">
            <Navbar/>
            <div className="home-settings float-start w-100">
              <div className='calendar-tab w-100'>
               
                 
                <div className='calender-container d-block mb-4 w-100'>
                   
                        
                        <div className='row'>
                            <div className='col-lg-12 ps-lg-0'>
                                <div className='calendar w-100 pt-2'>
                                    <h4 className="mb-0 mt-3">{format(currentDate, "MMMM yyyy")}</h4>
                                    <div className="vh-100 d-flex">
                                        <div className="col-12 p-3">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                               
                                                
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
                    
                    {selectedDate && (
                        <div className="slide-clas calender-left-card">
                            <button className="btn btn-close text-reset" onClick={() => setSelectedDate(null)}>
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                            </button>
                            <div className='new-order d-flex align-items-center justify-content-between'>
                                    <h2 className="offcanvas-title" id="offcanvasExampleLabel">New Order
                                    </h2>
                            </div>

                        

                            <div className="user-div-liso d-inline-block w-100">

                                
                                    <div className="form-group w-100">
                                        <label htmlFor="" className='orderStatus-label form-label'>Order status</label>
                                        
                                        <select name="orderstatus" id="orderstatus" className='form-control orderstatus-select'>
                                            <option value="setstatus">Set Status</option>
                                            <option value="Open">Open</option>
                                            <option value="Cancelled">Cancelled</option>
                                            <option value="Completed">Completed</option>
                                        </select>
                                    </div>


                                    <div className="form-group w-100 mt-3">
                                        <label htmlFor="" className='orderStatus-label form-label'>Fullfilment Status</label>
                                        <select name="fullfilmentstatus" id="fullfilmentstatus" className='form-control orderstatus-select'>
                                            <option value="setstatus">Set Status</option>
                                            <option value="notfulfilled">Not Fulfilled</option>
                                            <option value="fulfilled">Fulfilled</option>
                                            <option value="partiallyfulfilled">Partially Fulfilled</option>
                                        </select>
                                    </div>

                                


                                <div className="order-container oder-text01 mt-3">
                                    <div className="orderitem d-flex align-items-center justify-content-between">
                                        <h3 className="orderitem-title mb-0">Order Item</h3>

                                        <button type="button" className='orderitem-para btn' onClick={addDiv}> <FaPlus /> Add Another Item </button>
                                        
                                    </div>
                                     <div class="accordion cm-acod" id="accordionExample">
                                        <div className="accordion-item"id="headingOne">
                                                <h2 className="accordion-header d-flex align-items-center justify-between">
                                                    <button
                                                        className="accordion-button"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target='#collapseOne'
                                                        aria-expanded="true"
                                                        aria-controls='collapseOne'
                                                    >
                                                    New Booking 
                                                    </button>
                                                </h2>

                                                <div
                                                id='collapseOne'
                                                className="accordion-collapse collapse show"
                                                aria-labelledby='collapseOne'
                                                data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body cm-labels01">
                                                        <div className="form-group mb-2">
                                                                <label htmlFor="cars" className="form-label">Service</label>
                                                                <select name="cars" id="cars" className='form-select orderitem-service uncategorized'>
                                                                    <optgroup label="Uncategorized" className='uncategorized'>
                                                                        <option value="setstatus" className='service-1'>Service 1</option>
                                                                        <option value="notfulfilled">Service 2</option>
                                                                        <option value="fulfilled">Full house cleaning</option>

                                                                    </optgroup>
                                                                    <optgroup label="Mobile Detailing">
                                                                        <option value="mercedes">Express Detail Inside & Outside</option>
                                                                    </optgroup>
                                                                </select>
                                                        </div>
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="cars" className="form-label">Location</label>
                                                                <select name="cars" id="cars" className='form-select orderitem-service uncategorized'>
                                                                    <option value="setstatus" className='service-1'>Home</option>
                                                                    <option value="notfulfilled">Hospital</option>
                                                                    <option value="fulfilled">Main Location</option>
                                                                </select>
                                                        </div>
                                                        <div className="row align-items-center">
                                                            <div className="col-lg-6 mb-2">
                                                                <div className="form-group">
                                                                <label htmlFor="" className='orderStatus-label form-label'>Agent</label>
                                                                    <select name="orderstatus" id="orderstatus" className='form-select orderstatus-select'>
                                                                        <option value="setstatus">Lynn Nicely</option>
                                                                        <option value="notfulfilled">Sara Brooks</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 mb-2">

                                                                <div className="form-group">
                                                                <label htmlFor="" className='orderStatus-label form-label'>Status</label>
                                                                    <select name="fullfilmentstatus" id="fullfilmentstatus" className='form-select orderstatus-select'>
                                                                        <option value="setstatus">Set Status</option>
                                                                        <option value="notfulfilled">Approved</option>
                                                                        <option value="setstatus">Pending Approval</option>
                                                                        <option value="notfulfilled">Cancelled</option>
                                                                        <option value="setstatus">No Show</option>
                                                                        <option value="notfulfilled">Completed</option>
                                                                    </select>
                                                                </div>

                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group mb-2">
                                                                    <label htmlFor="" className='orderStatus-label form-label'>Start Date</label>
                                                                    
                                                                    <input type="text" placeholder='dd/mm/yy' className='form-control inputdate' />
                                                                        
                                                                    
                                                                    
                                                                </div>
                                                                
                                                                
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group mb-2">
                                                                    <button name="fullfilmentstatus" id="fullfilmentstatus" className='btn btn-outline-primary availablity-btn '>
                                                                        Availablity <FaArrowRight />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                 <div className="form-group mb-2">
                                                                    <label htmlFor="" className='orderStatus-label form-label'>Start date</label>
                                                                    <div className="d-flex align-items-center bg-light st-back015">
                                                                        <input type="text" value="08:00" className='startendinput form-control' />
                                                                        <div className='ampmdiv'>
                                                                            <label className="ampm-toggle">
                                                                                <input type="checkbox" id="" name="" value="" />
                                                                                <div className="toggle-button"></div>
                                                                                <div className="toggle-off-txt"></div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                 </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group mb-2">
                                                                     <label htmlFor="" className='form-label orderStatus-label'>End date</label>
                                                                     <input type="text" value="08:00" className="form-control startendinput" />
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        {divs.map((div) => (
                                            <div className="accordion-item" key={div.id}>
                                                <h2 className="accordion-header d-flex align-items-center justify-between" id={`heading-${div.id}`}>
                                                    <button
                                                        className="accordion-button"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#collapse-${div.id}`}
                                                        aria-expanded="true"
                                                        aria-controls={`collapse-${div.id}`}
                                                    >
                                                    NewBooking #{div.id}
                                                    </button>

                                                    <button
                                                        onClick={() => removeDiv(div.id)}
                                                        className="btn text-white"
                                                    >
                                                        <MdDeleteOutline />
                                                    </button>
                                                </h2>

                                                <div
                                                id={`collapse-${div.id}`}
                                                className="accordion-collapse collapse show"
                                                aria-labelledby={`heading-${div.id}`}
                                                data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body cm-labels01">
                                                        <div className="form-group mb-2">
                                                                <label htmlFor="cars" className="form-label">Service</label>
                                                                <select name="cars" id="cars" className='form-select orderitem-service uncategorized'>
                                                                    <optgroup label="Uncategorized" className='uncategorized'>
                                                                        <option value="setstatus" className='service-1'>Service 1</option>
                                                                        <option value="notfulfilled">Service 2</option>
                                                                        <option value="fulfilled">Full house cleaning</option>

                                                                    </optgroup>
                                                                    <optgroup label="Mobile Detailing">
                                                                        <option value="mercedes">Express Detail Inside & Outside</option>
                                                                    </optgroup>
                                                                </select>
                                                        </div>
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="cars" className="form-label">Location</label>
                                                                <select name="cars" id="cars" className='form-select orderitem-service uncategorized'>
                                                                    <option value="setstatus" className='service-1'>Home</option>
                                                                    <option value="notfulfilled">Hospital</option>
                                                                    <option value="fulfilled">Main Location</option>
                                                                </select>
                                                        </div>
                                                        <div className="row align-items-center">
                                                            <div className="col-lg-6 mb-2">
                                                                <div className="form-group">
                                                                <label htmlFor="" className='orderStatus-label form-label'>Agent</label>
                                                                    <select name="orderstatus" id="orderstatus" className='form-select orderstatus-select'>
                                                                        <option value="setstatus">Lynn Nicely</option>
                                                                        <option value="notfulfilled">Sara Brooks</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 mb-2">

                                                                <div className="form-group">
                                                                <label htmlFor="" className='orderStatus-label form-label'>Status</label>
                                                                    <select name="fullfilmentstatus" id="fullfilmentstatus" className='form-select orderstatus-select'>
                                                                        <option value="setstatus">Set Status</option>
                                                                        <option value="notfulfilled">Approved</option>
                                                                        <option value="setstatus">Pending Approval</option>
                                                                        <option value="notfulfilled">Cancelled</option>
                                                                        <option value="setstatus">No Show</option>
                                                                        <option value="notfulfilled">Completed</option>
                                                                    </select>
                                                                </div>

                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group mb-2">
                                                                    <label htmlFor="" className='orderStatus-label form-label'>Start Date</label>
                                                                    
                                                                    <input type="text" placeholder='dd/mm/yy' className='form-control inputdate' />
                                                                        
                                                                    
                                                                    
                                                                </div>
                                                                
                                                                
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group mb-2">
                                                                    <button name="fullfilmentstatus" id="fullfilmentstatus" className='btn btn-outline-primary availablity-btn '>
                                                                        Availablity <FaArrowRight />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                 <div className="form-group mb-2">
                                                                    <label htmlFor="" className='orderStatus-label form-label'>Start date</label>
                                                                    <div className="d-flex align-items-center bg-light st-back015">
                                                                        <input type="text" value="08:00" className='startendinput form-control' />
                                                                        <div className='ampmdiv'>
                                                                            <label className="ampm-toggle">
                                                                                <input type="checkbox" id="" name="" value="" />
                                                                                <div className="toggle-button"></div>
                                                                                <div className="toggle-off-txt"></div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                 </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group mb-2">
                                                                     <label htmlFor="" className='form-label orderStatus-label'>End date</label>
                                                                     <input type="text" value="08:00" className="form-control startendinput" />
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                     </div>

                                    <div>
                                        <div className="orderitem d-flex justify-content-between mb-3">
                                            <h3 className="orderitem-title">Customer</h3>
                                            <div className='customer-font d-flex gap-2'>
                                                <button type="btton" className='btn orderitem-para d-flex p-0 align-items-center'> <FaPlus /> New </button>
                                                {!findToggle && (
                                                    <button
                                                        className='btn p-0 ms-3 orderitem-para d-flex align-items-center'
                                                        onClick={() => setFindToggle(true)}
                                                    >
                                                        <IoIosSearch /> Find
                                                    </button>
                                                )}
                                            </div>
                                        </div>


                                        {findToggle && (
                                        <>
                                            <div className='row'>
                                                <div className='col-lg-12'>
                                                    <div className='customer-search d-flex align-items-center justify-content-between'>
                                                        <IoIosSearch className='cusearch-icon' />
                                                        <input type="text" placeholder='start typing to search...' />
                                                        <button onClick={() => setFindToggle(false)}>cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row customerHideShow'>
                                                <div className='col-lg-12'>
                                                    <div className='d-flex align-items-center justify-content-between'>
                                                        <div className='customer-img'>Img</div>
                                                        <div className='customer-img-text'>
                                                            <h6>johnathan smith</h6>
                                                            <p>Email: <span>jafajdFWoadldl@aoool.com</span></p>
                                                            <p>Phone:</p>
                                                        </div>
                                                    </div>
                                                </div>
 
                                            </div>
                                        </>
 
 
                                    )}
                                    
                                      <div className="d-block w-100 crm-bordr01">
                                    
                                        <div className='row gy-3'>
                                            <div className='col-lg-6'>
                                                <div className="form-group">
                                                   <label htmlFor="" className="form-label">First name</label>
                                                   <input type="text" placeholder='firstname' className='form-control startendinput'/>
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div className="form-group">
                                                  <label htmlFor="" className="form-label">Last name</label>
                                                   <input type="text" placeholder='lastname' className='form-control startendinput'/>
                                                </div>
                                            </div>
                                            <div className='col-lg-12'>
                                                <div className="form-group">
                                                  <label htmlFor="" className="form-label">Email Address</label>
                                                  <input type="text" placeholder='email address' className='form-control startendinput'/>
                                                </div>
                                            </div>
                                            <div className='col-lg-12'>
                                                <div className="form-group">
                                                  <label htmlFor="" className="form-label">Customer Notes</label>
                                                  <input type="text" placeholder='customer Notes' className='form-control startendinput'/>
                                                </div>
                                            </div>
                                            <div className='col-lg-12'>
                                                <div className="form-group">
                                                  <label htmlFor="" className="form-label">Notes only visible to admins</label>
                                                  <input type="text" placeholder='Notes only visible to admins' className='form-control startendinput'/>
                                                </div>
                                            </div>
                                        </div>

                                      </div>
                                        
                                    </div>

                                        <div className="orderitem d-flex justify-content-between">
                                            <h3 className="orderitem-title">Price Breakdown</h3>
                                            <div className='customer-font d-flex gap-2'>
                                                <p className='orderitem-para d-flex align-items-center'> <RiResetRightLine /> Recalculate</p>
                                            </div>
                                        </div>
                                        <hr className="mt-0"/>
                                        <div className="pricing0-tablses d-inline-block">
                                            <div className='row row-under-line m-0'>
                                                <div className='col-lg-6'>
                                                    <p className=''>Service 1</p>
                                                </div>
                                                <div className='col-lg-6 '>
                                                    <input type="text" placeholder='' value='$100.00' className='form-control row-input' />
                                                </div>
                                             </div>
                                             <div className='row row-under-line m-0'>
                                                <div className='col-lg-6'>
                                                    <p>Sub total</p>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <input type="text" placeholder='' value='$100.00' className='form-control row-input' />
                                                </div>
                                             </div>
                                             <div className='row row-under-line m-0'>
                                                <div className='col-lg-6'>
                                                    <p>Putnam County &#40;6%&#41;</p>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <input type="text" placeholder='' value='$6.00' className='form-control row-input' />
                                                </div>
                                             </div>
                                             <div className='row row-under-line-bold m-0'>
                                                <div className='col-lg-6'>
                                                    <p>Total Price</p>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <input type="text" placeholder='' value='$106.00' className='form-control row-input' />
                                                </div>

                                             </div>

                                        </div>
                                        
                                        
                                        
                                        


                                        
                                            <div className='col-lg-12 use-coupon bg-light p-3 mb-4'>
                                                <div className="form-check form-switch ">
                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                                    <label className="form-check-label" for="flexSwitchCheckChecked">Use Coupon</label>
                                                </div>
                                            </div>
                                        



                                    
                                        <div className="orderitem d-flex align-items-center mb-4 justify-content-between ">
                                            <h3 className="orderitem-title">Balance & Payments</h3>
                                            <div className='customer-font d-flex gap-2'>
                                                <select name="" id="" className='form-select balAndPay'>
                                                    <option value="">Not Paid</option>
                                                    <option value="">Partially Paid</option>
                                                    <option value="">Fully Paid</option>
                                                    <option value="">Processing</option>
                                                </select>
                                            </div>
                                        </div>
                                        <hr className="mt-0"/>


                                        <div className='row total-ammount-div'>
                                            <div className='col-6'>
                                                <p> $0.00</p>
                                            </div>
                                            <div className='col-6'>
                                                <h3 className='totlal-ammount text-end text-danger'>$106.00</h3>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <p className='total-payment'> Total Payments</p>
                                            </div>
                                            <div className='col-6'>
                                                <p className='total-payment text-end'>Total Balance Due</p>
                                            </div>
                                        </div>

                                        <div className="bg-light p-3">

                                            <div className='row'>
                                                <div className='col-lg-9 use-coupon'>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                                        <label className="form-check-label" for="flexSwitchCheckChecked">Create a Payment Request</label>
                                                    </div>
                                                </div>
                                                <div className='col-lg-3 text-end'>
                                                    <Link href='' className="text-end"> <IoIosInformationCircleOutline /> </Link>
                                                </div>

                                            </div>

                                        </div>

                                    <div className="mt-4">
                                        <div className="orderitem d-flex justify-content-between">
                                            <h3 className="orderitem-title">Transactions</h3>
                                        </div>
                                         <button name="fullfilmentstatus" id="fullfilmentstatus" className='btn mb-3 btn-outline-primary w-100 add-transaction' onClick={handleAddNew}>
                                           <AiOutlinePlus className="me-2" />
                                           Add Transaction
                                        </button>
                                        
                                        
                                    </div>


                                    <div class="accordion cm-acod" id="accordionExample">
                                    {addNewTask.map((div) => (
                                        <div className="accordion-item" key={div.id}>
                                            <h2 className="accordion-header" id={`heading-${div.id}`}>
                                                <div className='d-flex align-items-center justify-content-between w-100'>
 
                                                    <button
                                                        className="accordion-button"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#collapse-${div.id}`}
                                                        aria-expanded="true"
                                                        aria-controls={`collapse-${div.id}`}
                                                    >
                                                        New Transaction
                                                    </button>
 
                                                    <button
                                                        onClick={() => removeDiv(div.id)}
                                                        className="btn text-white"
                                                    >
                                                        <MdOutlineDeleteOutline />
                                                    </button>
 
                                                </div>
 
 
 
                                            </h2>
 
                                            <div
                                                id={`collapse-${div.id}`}
                                                className="accordion-collapse collapse show"
                                                aria-labelledby={`heading-${div.id}`}
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body cm-labels01">
                                                    <div className='row'>
                                                        <div className="col-lg-6">
                                                            <div className="form-group"> 
                                                               <label htmlFor="" className="form-label">Amount</label>
                                                                <input type="text" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group"> 
                                                               <label htmlFor="" className="form-label">Date</label>
                                                               <input type="date" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className="col-lg-12">
                                                            <div className="form-group"> 
                                                               <label htmlFor="" className="form-label">Confirmation Code</label>
                                                               <input type="text" placeholder='Confirmation Code' className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
 
                                                    <div className='row'>
                                                        <div className="col-lg-6">
                                                            <div className="form-group"> 
                                                                <label htmlFor="" className="form-label">Payment Portion</label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <label htmlFor="" className="form-label">Type</label>
                                                            <input type="date" className="form-control" />
                                                        </div>
 
                                                    </div>
 
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    </div>


                                       
 


                                    

                                    

                                </div>

                            </div>

                            <button type="submit" className='btn create-order'>Create Order</button>

                      

                        </div>

                    )}

                </div>

             </div>
                
            </div>
      </main>
      
    </div>
  );
}
