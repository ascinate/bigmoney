import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsWindowDesktop } from "react-icons/bs";
import { VscThreeBars } from "react-icons/vsc";
import { BiRefresh } from "react-icons/bi";

function BookingForm() {
    return (
        <>
            <section className='booking-section'>
                <div className='wrapper pt-5'>
                    <div className='row align-items-start justify-content-between w-100'>
                        <div className='booking-contaner'>
                            <div className="booking-left">
                                <Image
                                    src="/bookingpageImg.png"
                                    alt="My Logo"
                                    width={20}
                                    height={20}
                                    id='woman-working-laptop-high' />
                                <h2 id='location' >Location Selections</h2>
                                <p id='location-info'>Please select a location for
                                    your appointment</p>
                                <p id='questions'>Questions?</p>
                                <p id='location-info'>Call (858) 939-3746 for help</p>

                            </div>
                            <div className="booking-right">
                                <h2>Locations</h2>

                                <input type="email" className='booking-input' /><br />
                                <div className='booking-input flex items-center'>
                                    <Image
                                        src="/bookingpageImg.png"
                                        alt="My Logo"
                                        width={20}
                                        height={20}
                                        id='woman-working-laptop-high' />
                                    <p>Main Location</p>
                                </div>
                                <input type="password" className='booking-input' id='password-input' />
                                <div className='location-btn'>
                                    <button id='discard-btn'>X Discard</button>
                                    <button id='save-btn'>Save Changes</button>
                                </div>
                            </div>
                        </div>
                        <div className='booking-contaner-rightCard'>

                            <div className="booking-righ-rightPart">
                                <div id='booking-righ-top'>


                                    <div id='appearance'>
                                        <BsWindowDesktop id='appearance-icon' />
                                        <h2>Appearance</h2>

                                    </div>
                                    <div id='color-select'>
                                        <input type="color" id="" name="" value="#1d7bff" className='booking-container-right-input' />
                                        <input type="color" id="" name="" value="#F34747" />
                                        <input type="color" id="" name="" value="#222222" />
                                        <input type="color" id="" name="" value="#0f8c77" />
                                        <input type="color" id="" name="" value="#1ca00f" />
                                        <input type="color" id="" name="" value="#a32f96" />
                                        <input type="color" id="" name="" value="#cc7424" />
                                        <input type="color" id="multicolor" name="" value="" />
                                        <div>
                                        </div>

                                        <label htmlFor="" id='border-style'>Border Style</label><br />

                                        <select name="" id="booking-container-input">
                                            <option value="volvo">Flat</option>
                                            <option value="audi">Rounded Corners</option>
                                        </select>
                                    </div>
                                </div>
                                <div className=' flex items-center justify-between' id="step">
                                    <div className='flex items-center'>
                                        <VscThreeBars id='step-icon' />
                                        <p>Step</p>
                                    </div>
                                    <div className='flex items-center' id='chanageorder'>
                                        <BiRefresh id='hanage-order' />
                                        <p id='chanage-order'>Chanage Order</p>
                                    </div>

                                </div>

                                <div id='step-container'>
                                    <select name="" id="booking-container-input">
                                        <option value="volvo">Locations</option>
                                        <option value="audi">Services</option>
                                        <option value="volvo">Service Extras</option>
                                        <option value="audi">Custom Fields for Booking</option>
                                        <option value="volvo">Service Durations</option>
                                        <option value="audi">Total Attendees</option>
                                        <option value="volvo">Agents</option>
                                        <option value="audi">Datepicker</option>
                                        <option value="volvo">Recurring Appointment</option>
                                        <option value="audi">Customer</option>
                                        <option value="volvo">Verify Order</option>
                                        <option value="audi">Payment Time</option>
                                        <option value="volvo">Payment Portion</option>
                                        <option value="audi">Payment Method</option>
                                        <option value="volvo">Payment Processors</option>
                                        <option value="audi">Payment Form</option>
                                        <option value="audi">Confirmation</option>
                                    </select>
                                    <div className='booking-righ-bottom'>
                                        <div className='booking-righ-bottom-hover'>
                                            <div className='booking-righ-bottom-toggle'>
                                                <label className="switch">
                                                    <input type="checkbox" />
                                                    <span className="slider"></span>
                                                </label>
                                                <p id='show-location-categories'>Show location categories</p>
                                            </div>
                                            <p id='show-location-text'>If turned on, locations will be displayed in categories</p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default BookingForm;
