"use client"
import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { FaRegPlusSquare } from "react-icons/fa";
function WeeklyStartFinish() {
 const [divs, setDivs] = useState ([]);

    const handleAddDiv = () => {
        const newDiv = { id: Date.now() };
        setDivs([...divs, newDiv]);
    };

 const handleRemoveDiv = (idToRemove) => {
        setDivs(divs.filter((div) => div.id !== idToRemove));
    };
    return (
        <>


                <div className='daytogglediv'>
                    <div className='start-row start-row-start d-flex justify-content-between align-items-center'>
                        <p className='start-text'>Start</p>
                        <div className='d-flex gap-2 mb-3'>
                            <input type='text' value='08:00' placeholder='start' className='start-time-input' id='' />


                            <label className="ampm-toggle">

                                <input type="checkbox" id="" name="" value="" />
                                <div className="toggle-button"></div>
                                <div className="toggle-off-txt"></div>
                            </label>
                        </div>
                    </div>
                    <div className='start-row  start-row-finish d-flex justify-content-between align-items-center'>
                        <p className='start-text'>Finish</p>
                        <div className='d-flex gap-2 mb-3'>
                            <input type='text' value='08:00' placeholder='start' className='start-time-input' id='' />
                            <label className="ampm-toggle">
                                <input type="checkbox" id="" name="" value="" />
                                <div className="toggle-button"></div>
                                <div className="toggle-off-txt"></div>
                            </label>
                        </div>
                    </div>




                        {divs.map((div) => (
                                        <div
                                            key={div.id}
                                            className="start-row-cross-icon-parent"
                                        >

                                            <div className='start-row mb-2 start-row-start d-flex justify-content-between align-items-center'>
                                                <p className='start-text '>Start</p>
                                                <div className='d-flex gap-2'>
                                                    <input type='text' value='08:00' placeholder='start' className='start-time-input' id='' />
                                                    <label className="ampm-toggle">
                                                        <input type="checkbox" id="" name="" value="" />
                                                        <div className="toggle-button"></div>
                                                        <div className="toggle-off-txt"></div>
                                                    </label>
                                                </div>
                                            </div>
                                            <RxCross1 className='start-row-cross-icon' onClick={() => handleRemoveDiv(div.id)} />
                                            <div className='start-row mb-2 start-row-finish d-flex justify-content-between align-items-center'>
                                                <p className='start-text'>Finish</p>
                                                <div className='d-flex gap-2'>
                                                    <input type='text' value='08:00' placeholder='start' className='start-time-input' id='' />
                                                    <label className="ampm-toggle">
                                                        <input type="checkbox" id="" name="" value="" />
                                                        <div className="toggle-button"></div>
                                                        <div className="toggle-off-txt"></div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    ))}



                    <div className='add-another-work' onClick={handleAddDiv}>
                        <FaRegPlusSquare className='add-another-work-icon' />
                        <p className='add-another-work-text mb-0'>Add another work period for Monday</p>

                    </div>
                </div>
    

        </>
    )
}

export default WeeklyStartFinish
