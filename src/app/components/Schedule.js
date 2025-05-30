"use client"

import { useState } from 'react';
import { TbPencilMinus } from "react-icons/tb";
import { FaPlusCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import CalendarWithDropdown from './CalendarWithDropdown';
import { FiEdit3 } from "react-icons/fi";
import { FaRegPlusSquare } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useToggleManager } from './custom-hook/useToggleManager.js'
import ToggleSwitch from './ToggleSwitch.js';
import WeeklyStartFinish from './WeeklyStartFinish';

function Schedule() {
    const [isChecked, setIsChecked] = useState(true);
    const [monday, setMonday] = useState(false);
    const [tuesday, setTuesday] = useState(false);
    const [wednesday, setWednesday] = useState(false);
    const [thursday, setThursday] = useState(false);
    const [friday, setFriday] = useState(false);
    const [saturday, setSaturday] = useState(false);
    const [sunday, setSunday] = useState(false);


    const { state, toggle } = useToggleManager();

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    const handleMonday = () => {
        setMonday(!monday)
    }

    const handleTuesday = () => {
        setTuesday(!tuesday)
    }
    const handleWednesday = () => {
        setWednesday(!wednesday)
    }
    const handleThursday = () => {
        setThursday(!thursday)
    }
    const handleFriday = () => {
        setFriday(!friday)
    }
    const handleSaturday = () => {
        setSaturday(!saturday)
    }
    const handleSunday = () => {
        setSunday(!sunday)
    }
    const [divs, setDivs] = useState([]);

    return(
        <>
            <section className='general-week-section'>
                <h2 className='cm-head'>General Weekly Schedule</h2>
                <div className='wrapper'>
                    <div className='general-week-container'>
                        
                        <div className='general-weekly-schedule-bottom crm-weeks'>
                            <div id='week-days'>
                                <div className='day-name-time d-flex align-items-center'>
                       
                                    <div className="form-check form-switch ps-0" onClick={handleMonday}>
                                        <ToggleSwitch
                                        id="monday"
                                        label="Monday"
                                        checked={state.monday}
                                        onChange={() => toggle('monday')}
                                        />
                                        
                                    </div>
                                </div>
                                <button type='button' className='btn btn-edits'>
                                    <span> 08:00am-05:00pm </span>
                                    <FiEdit3/>
                                </button>
                            </div>
                             {monday &&

                                <WeeklyStartFinish />
                             }

                            <div id='week-days'>
                                <div className='day-name-time d-flex align-items-center' onClick={handleTuesday}>
                       
                                    <div className="form-check form-switch ps-0">
                                        <ToggleSwitch
                                        id="tuesday"
                                        label="Tuesday"
                                        checked={state.tuesday}
                                        onChange={() => toggle('tuesday')}
                                        />
                                        
                                    </div>
                                </div>
                                <button type='button' className='btn btn-edits'>
                                    <span> 08:00am-05:00pm </span>
                                    <FiEdit3/>
                                </button>
                            </div>
                            {tuesday &&

                                <WeeklyStartFinish />
                            }


                            <div id='week-days'>
                                <div className='day-name-time d-flex align-items-center' onClick={handleWednesday}>
                       
                                    <div className="form-check form-switch ps-0">
                                        <ToggleSwitch
                                        id="wednesday"
                                        label="Wednesday"
                                        checked={state.wednesday}
                                        onChange={() => toggle('wednesday')}
                                       />
                                        
                                    </div>
                                </div>
                                <button type='button' className='btn btn-edits'>
                                    <span> 08:00am-05:00pm </span>
                                    <FiEdit3/>
                                </button>
                            </div>

                            {wednesday &&

                                <WeeklyStartFinish />
                            }

                            <div id='week-days'>
                                <div className='day-name-time d-flex align-items-center' onClick={handleThursday}>
                       
                                    <div className="form-check form-switch ps-0">
                                        <ToggleSwitch
                                        id="thursday"
                                        label="Thursday"
                                        checked={state.thursday}
                                        onChange={() => toggle('thursday')}
                                        />
                                        
                                    </div>
                                </div>
                                <button type='button' className='btn btn-edits'>
                                    <span> 08:00am-05:00pm </span>
                                    <FiEdit3/>
                                </button>
                            </div>
                            {thursday &&

                                <WeeklyStartFinish />
                            }


                             <div id='week-days'>
                                <div className='day-name-time d-flex align-items-center' onClick={handleFriday}>
                       
                                    <div className="form-check form-switch ps-0">
                                        <ToggleSwitch
                                        id="friday"
                                        label="Friday"
                                        checked={state.friday}
                                        onChange={() => toggle('friday')}
                                        />
                                        
                                    </div>
                                </div>
                                <button type='button' className='btn btn-edits'>
                                    <span> 08:00am-05:00pm </span>
                                    <FiEdit3/>
                                </button>
                            </div>

                            {friday &&

                                <WeeklyStartFinish />
                            }
                            <div id='week-days'>
                                <div className='day-name-time d-flex align-items-center' onClick={handleSaturday}>
                       
                                    <div className="form-check form-switch ps-0">
                                        <ToggleSwitch
                                        id="saturday"
                                        label="Saturday"
                                        checked={state.saturday}
                                        onChange={() => toggle('saturday')}
                                        />
                                        
                                    </div>
                                </div>
                                <button type='button' className='btn btn-edits'>
                                    <span> 08:00am-05:00pm </span>
                                    <FiEdit3/>
                                </button>
                            </div>

                            {saturday &&

                                <WeeklyStartFinish />
                            }


                            <div id='week-days-sunday'>
                                <div className='day-name-time d-flex align-items-center' onClick={handleSunday}>
                       
                                    <div className="form-check form-switch ps-0">
                                        <ToggleSwitch
                                        id="sunday"
                                        label="Sunday"
                                        checked={state.sunday}
                                        onChange={() => toggle('sunday')}
                                       />
                                        
                                    </div>
                                </div>
                                <button type='button' className='btn btn-edits'>
                                    <span> 08:00am-05:00pm </span>
                                    <FiEdit3/>
                                </button>
                            </div>

                            {sunday &&

                                <WeeklyStartFinish />
                            }

                          
                            <div className='schedule-save-btn-container mb-5 me-3 mt-4'>
                                <button type='button' className='btn cm-btn'>
                                    Save Weekly Schedule
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='general-week-section mt-5'>
                <h2 className='cm-head'>Days With Custom Schedules</h2>
                <div className='wrapper'>
                    <div className='general-week-container new-padings'>
                        <h5 className='mb-3'>Days With Custom Schedules</h5>
                        <div className='general-weekly-schedule-bottom'>
                            <div className='days-with-custom-schedules'>
                                
                                <div>
                                    <button type='button' id='addDay-btn' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <FaPlusCircle id='addDay-btn-icon' />
                                        Add Day
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            <section className='general-week-section mt-5'>
                <div className='wrapper'>
                    <div className='general-week-container new-padings'>
                        <h5 className='mb-3'>Holidays & Days Off</h5>
                        <div className='general-weekly-schedule-bottom'>
                            <div className='days-with-custom-schedules'>
                                
                                <div>
                                    <button type='button' id='addDay-btn' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <FaPlusCircle id='addDay-btn-icon' />
                                        Add Day
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Custom schedule</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <CalendarWithDropdown/>
                                    </div>
                                    
                                    </div>
                                </div>
              </div>
        </>
    );
}
export default Schedule;