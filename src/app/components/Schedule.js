"use client"

import React, { useState } from 'react'
import { TbPencilMinus } from "react-icons/tb";
import { FaPlusCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import CalendarWithDropdown from './CalendarWithDropdown';

function Schedule() {
    const [viewModal, setViewModal] = useState(false)

    const handleAddDay = () => {
        console.log("hello");
        setViewModal(true)
    }

    return(
        <>
            <section className='general-week-section'>
                <div className='wrapper'>
                    <div className='general-week-container'>
                        <div className='' id='general-weekly-schedule'>General Weekly Schedule</div>
                        <div className='general-weekly-schedule-bottom'>
                            <div id='week-days'>
                                <div className='day-name-time'>
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider"></span>
                                    </label>
                                    <p id='day'>Monday</p>
                                </div>
                                <div className='day-name-time'>
                                    <p className='day-time'>08:00am-05:00pm</p>
                                    <TbPencilMinus className='day-name-time-icon' />
                                </div>
                            </div>
                            <div id='week-days'>
                                <div className='day-name-time'>
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider"></span>
                                    </label>
                                    <p id='day'>Tuesday</p>
                                </div>
                                <div className='day-name-time'>
                                    <p className='day-time'>08:00am-05:00pm</p>
                                    <TbPencilMinus className='day-name-time-icon' />
                                </div>
                            </div>

                            <div id='week-days'>
                                <div className='day-name-time'>
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider"></span>
                                    </label>
                                    <p id='day'>Wednesday</p>
                                </div>
                                <div className='day-name-time'>
                                    <p className='day-time'>08:00am-05:00pm</p>
                                    <TbPencilMinus className='day-name-time-icon' />
                                </div>
                            </div>
                            <div id='week-days'>
                                <div className='day-name-time'>
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider"></span>
                                    </label>
                                    <p id='day'>Thursday</p>
                                </div>
                                <div className='day-name-time'>
                                    <p className='day-time'>08:00am-05:00pm</p>
                                    <TbPencilMinus className='day-name-time-icon' />
                                </div>
                            </div>

                            <div id='week-days'>
                                <div className='day-name-time'>
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider"></span>
                                    </label>
                                    <p id='day'>Friday</p>
                                </div>
                                <div className='day-name-time'>
                                    <p className='day-time'>08:00am-05:00pm</p>
                                    <TbPencilMinus className='day-name-time-icon' />
                                </div>
                            </div>

                            <div id='week-days'>
                                <div className='day-name-time'>
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider"></span>
                                    </label>
                                    <p id='day'>Saturday</p>
                                </div>
                                <div className='day-name-time'>
                                    <p className='day-time'>08:00am-05:00pm</p>
                                    <TbPencilMinus className='day-name-time-icon' />
                                </div>
                            </div>
                            <div id='week-days-sunday'>
                                <div className='day-name-time'>
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider"></span>
                                    </label>
                                    <p id='day'>Sunday</p>
                                </div>
                                <div className='day-name-time'>
                                    <p className='day-time'>08:00am-05:00pm</p>
                                    <TbPencilMinus className='day-name-time-icon' />
                                </div>
                            </div>
                            <div className='schedule-save-btn-container'>
                                <button id='schedule-save'>
                                    Save Weekly Schedule
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='general-week-section'>
                <div className='wrapper'>
                    <div className='general-week-container'>
                        <div className='' id='general-weekly-schedule'>Days With Custom Schedules</div>
                        <div className='general-weekly-schedule-bottom'>
                            <div className='days-with-custom-schedules'>
                                <div className='july'>
                                    <button className='july-btn'>
                                        <span className='july-btn-date'>03</span>
                                        <br />
                                        <span>July</span>
                                    </button>
                                </div>
                                <div>
                                    <button id='addDay-btn' onClick={handleAddDay}>
                                        <FaPlusCircle id='addDay-btn-icon' />
                                        Add Day
                                    </button>
                                </div>
                            </div>




                            <div className={` ${viewModal ? 'show' : 'modal'}`}>
                               


                                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                                    <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

                                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                            <section className='calender'>
                                                <article className='Custom-schedule-row-one art'>
                                                    <div className=''>
                                                        <h2 className='calender-heading'>Custom schedule</h2>
                                                    </div>
                                                    <div>
                                                        <IoMdClose />
                                                    </div>
                                                </article>

                                                <article className='Custom-schedule-row-two art'>
                                                    <div className='Custom-schedule-row-two-select'>
                                                        <select name="" className="Custom-schedule-select">
                                                            <option value="singleday">Single Day</option>
                                                            <option value="datarange">Data Range</option>

                                                        </select>
                                                    </div>
                                                </article>

                                                <article className='Custom-schedule-row-three'>
                                                    <div className='pick-date'>
                                                        <p className='pick-text'>Pick a Date</p>
                                                    </div>
                                                    <div className='Custom-schedule-month-year'>
                                                        <div className='Custom-schedule-year'>
                                                            <select name="none" className="Custom-schedule-select-year">
                                                                <option value="2025">2025</option>
                                                                <option value="2026">2026</option>
                                                            </select>
                                                        </div>
                                                        <div className='Custom-schedule-month'>
                                                            <select name="" className="Custom-schedule-select">
                                                                <option value="1">January</option>
                                                                <option value="2">February</option>
                                                                <option value="3">March</option>
                                                                <option value="4">April</option>
                                                                <option value="5">May</option>
                                                                <option value="6" selected="">June</option>
                                                                <option value="7">July</option>
                                                                <option value="8">August</option>
                                                                <option value="9">September</option>
                                                                <option value="10">October</option>
                                                                <option value="11">November</option>
                                                                <option value="12">December</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </article>
                                                <CalendarWithDropdown/>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>


            <section className='general-week-section'>
                <div className='wrapper'>
                    <div className='general-week-container'>
                        <div className='' id='general-weekly-schedule'>Holidays & Days Off</div>
                        <div className='general-weekly-schedule-bottom'>
                            <div className='days-with-custom-schedules'>
                                <div className='july'>
                                    <button className='july-btn'>
                                        <span className='july-btn-date'>03</span>
                                        <br />
                                        <span>July</span>
                                    </button>
                                </div>
                                <div className='july'>
                                    <button className='july-btn'>
                                        <span className='july-btn-date'>03</span>
                                        <br />
                                        <span>July</span>
                                    </button>
                                </div>
                                <div>
                                    <button id='addDay-btn' onClick={handleAddDay}>
                                        <FaPlusCircle id='addDay-btn-icon' />
                                        Add Day
                                    </button>
                                </div>
                            </div>




                            <div className={` ${viewModal ? 'show' : 'modal'}`}>


                                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                                    <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

                                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                            <section className='calender'>
                                                <article className='Custom-schedule-row-one art'>
                                                    <div className=''>
                                                        <h2 className='calender-heading'>Custom schedule</h2>
                                                    </div>
                                                    <div>
                                                        <IoMdClose />
                                                    </div>
                                                </article>

                                                <article className='Custom-schedule-row-two art'>
                                                    <div className='Custom-schedule-row-two-select'>
                                                        <select name="" className="Custom-schedule-select">
                                                            <option value="singleday">Single Day</option>
                                                            <option value="datarange">Data Range</option>

                                                        </select>
                                                    </div>
                                                </article>

                                                <article className='Custom-schedule-row-three'>
                                                    <div className='pick-date'>
                                                        <p className='pick-text'>Pick a Date</p>
                                                    </div>
                                                    <div className='Custom-schedule-month-year'>
                                                        <div className='Custom-schedule-year'>
                                                            <select name="none" className="Custom-schedule-select-year">
                                                                <option value="2025">2025</option>
                                                                <option value="2026">2026</option>
                                                            </select>
                                                        </div>
                                                        <div className='Custom-schedule-month'>
                                                            <select name="" className="Custom-schedule-select">
                                                                <option value="1">January</option>
                                                                <option value="2">February</option>
                                                                <option value="3">March</option>
                                                                <option value="4">April</option>
                                                                <option value="5">May</option>
                                                                <option value="6" selected="">June</option>
                                                                <option value="7">July</option>
                                                                <option value="8">August</option>
                                                                <option value="9">September</option>
                                                                <option value="10">October</option>
                                                                <option value="11">November</option>
                                                                <option value="12">December</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </article>
                                                
                                                <CalendarWithDropdown/>
                                                   
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Schedule;