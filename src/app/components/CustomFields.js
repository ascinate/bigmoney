"use client"
import React, { useState } from 'react'
import { IoMdAddCircle } from "react-icons/io";
import { VscChromeMinimize } from "react-icons/vsc";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { MdOutlinePlayCircle } from "react-icons/md";

function Workflows() {

    const [newTask, setNewTask] = useState([]);
    const [toggleMap, setToggleMap] = useState({});
    const [toggleDropDown, setToggleDropDown] = useState(false);
    const [timeoffset, setTimeoffset] = useState(false);
    const [inputName, setInputname] = useState("");
    const handleToggle = (id) => {
        setToggleMap((prev) => ({ ...prev, [id]: !prev[id] }));
    };
    const handleAddTask = () => {
        const newId = Date.now();
        setNewTask([...newTask, { id: newId }]);
        setToggleMap((prev) => ({ ...prev, [newId]: false }));
    };

    const handleDeleteTask = (idToRemove) => {
        let newWorkflow = "Do you want to delete"
        if (confirm(newWorkflow) == true) {
            setNewTask(newTask.filter((div) => div.id !== idToRemove));
            setToggleMap((prev) => {
                const copy = { ...prev };
                delete copy[idToRemove];
                return copy;
            });
        }
    };

    const hadnleConditionalToggle = () => {
        setToggleDropDown(!toggleDropDown)
    }

    const hadnleTimeOffset = () => {
        setTimeoffset(!timeoffset)
    }
    return (
        <section className='tax-section'>
            <div className='wrapper'>
                <article>
                    {newTask.map((div) => (
                        <div key={div.id}>
                            <div className='tax-section-row-one' onClick={() => handleToggle(div.id)}>
                                <div className='tax-section-row-one-left d-flex align-items-center'>
                                    <div className='tax-section-row-one-left-icon-container'>
                                        <BsThreeDotsVertical className='tax-section-row-one-left-icon' />
                                    </div>
                                    <div>
                                        <span className='putnamcounty'>New Field</span>
                                    </div>
                                </div>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDeleteTask(div.id);
                                    }}
                                    className="btn"
                                >
                                    <VscChromeMinimize className='remove-btn-icon' />
                                </button>
                            </div>


                            {toggleMap[div.id] && (
                                <>
                                    <div className='add-workflow-toggle'>
                                        <div className='toggle-border-bottom' >
                                            <div className='tax-section-toggle-row-one d-flex align-items-center'>
                                                <p className='tax-section-tax-name'>Field Label</p>
                                                <div className='tax-section-tax-input-div w-100 border-left-toggle'>
                                                    <input type="text" className='form-control' placeholder='Enter Field Label' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='toggle-border-bottom' >
                                            <div className='tax-section-toggle-row-one d-flex align-items-center'>
                                                <p className='tax-section-tax-name'>Placeholder</p>
                                                <div className='tax-section-tax-input-div w-100 border-left-toggle'>
                                                    <input type="text" className='form-control' placeholder='Enter Field Placeholder' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='toggle-border-bottom' >
                                            <div className='tax-section-toggle-row-one d-flex align-items-center'>
                                                <p className='tax-section-tax-name'>Field Type</p>
                                                <div className='tax-section-tax-input-div w-100 border-left-toggle'>
                                                    <select name="status" id="status" className='form-control'>
                                                        <option value="order_created">Order Created</option>
                                                        <option value="order_updated">Order Updated</option>
                                                        <option value="booking_created" selected="">Booking Created</option>
                                                        <option value="booking_updated">Booking Updated</option>
                                                        <option value="booking_start">Booking Started</option>
                                                        <option value="booking_end">Booking Ended</option>
                                                        <option value="customer_created">Customer Created</option>
                                                        <option value="transaction_created">Transaction Created</option>
                                                        <option value="payment_request_created">Payment Request Created</option>
                                                        <option value="invoice_created">Invoice Created</option>
                                                        <option value="invoice_updated">Invoice Updated</option>
                                                    </select>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='toggle-border-bottom' >
                                            <div className='tax-section-toggle-row-one d-flex align-items-center'>
                                                <p className='tax-section-tax-name'>Default Value</p>
                                                <div className='tax-section-tax-input-div w-100 border-left-toggle'>
                                                    <input type="text" className='form-control' placeholder='Enter Fieild Default value' />
                                                    {timeoffset && (
                                                        <div className='toggleDropDownTrigger'>
                                                            <p className='trigger-text'>Trigger only if:</p>
                                                            <div className='d-flex justify-content-between'>
                                                                <select name="service" id="service" className='triggerSelect'>
                                                                    <option value="service">Service</option>
                                                                    <option value="Agent">Agent</option>
                                                                    <option value="Status">Status</option>
                                                                </select>

                                                                <select name="isequal" id="isequal" className='triggerSelect'>
                                                                    <option value="is-equal-to">is equal to</option>
                                                                    <option value="is-not-equal-to">is not equal to</option>
                                                                    <input type="text" />
                                                                </select>

                                                                <select name="isequal" id="isequal" className='triggerSelect'>
                                                                    <option value="is-equal-to">Service 1</option>
                                                                    <option value="is-not-equal-to">Service 2</option>
                                                                    <option value="is-equal-to">Full House Cleaning</option>
                                                                    <option value="is-not-equal-to">Express Detail Inside & Outside</option>
                                                                    <option value="is-equal-to">Jeep Gladitor</option>

                                                                    <input type="text" />
                                                                </select>


                                                                <button className='triggerBtn'> <FaPlus /> Add</button>
                                                            </div>

                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='toggle-border-bottom' >
                                            <div className='tax-section-toggle-row-one d-flex align-items-center'>
                                                <p className='tax-section-tax-name'>Field Width</p>
                                                <div className='tax-section-tax-input-div w-100 border-left-toggle'>

                                                    <select name="" id="" className='form-control'>
                                                        <option value="fullWidth">Full Width</option>
                                                        <option value="halfWidth">Half Width</option>
                                                    </select>


                                                    {toggleDropDown && (
                                                        <div className='toggleDropDownTrigger'>
                                                            <div className='d-flex justify-content-between gap-2'>
                                                                <span>Actions will be executed:</span>
                                                                <input type="number" className='time-offset-input' />

                                                                <select name="isequal" id="isequal" className='triggerSelect'>
                                                                    <option value="is-equal-to">minutes</option>
                                                                    <option value="is-not-equal-to">hour</option>
                                                                    <option value="is-not-equal-to">days</option>
                                                                    <input type="text" />
                                                                </select>

                                                                <select name="isequal" id="isequal" className='triggerSelect'>
                                                                    <option value="is-equal-to">before the event</option>
                                                                    <option value="is-not-equal-to">after the event</option>
                                                                    <input type="text" />
                                                                </select>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='toggle-border-bottom' >
                                            <div className='tax-section-toggle-row-one d-flex align-items-center'>
                                                <p className='tax-section-tax-name'>Field Visibility</p>
                                                <div className='tax-section-tax-input-div w-100 border-left-toggle'>
                                                    <select name="" id="" className='form-control'>
                                                        <option value="fullWidth">Visiable to Everyone</option>
                                                        <option value="fullWidth">Admin and Agent only</option>
                                                        <option value="fullWidth">Temporary Hidden</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='toggle-border-bottom' >
                                            <div className='tax-section-toggle-row-one d-flex align-items-center'>
                                                <p className='tax-section-tax-name'>Required</p>
                                                <div className='tax-section-tax-input-div w-100 border-left-toggle'>
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                                        <label class="form-check-label" for="flexSwitchCheckChecked">Make this field required</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='toggle-border-bottom' >
                                            <div className='tax-section-toggle-row-one d-flex align-items-center'>
                                                <p className='tax-section-tax-name'>Hide from Summary</p>
                                                <div className='tax-section-tax-input-div w-100 border-left-toggle'>
                                                       <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                                        <label class="form-check-label" for="flexSwitchCheckChecked">Hide from Summary Panel and Confirmation Step</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='toggle-border-bottom' >
                                            <div className='tax-section-toggle-row-one d-flex justify-content-between align-items-center'>

                                                <button className='automation-delete'>Delete</button>
                                                <div>

                                                    <button type="text" placeholder='name' className='automation-save-workflow-btn'> Save Field</button>

                                                </div>

                                            </div>
                                        </div>
                                    </div>





                                </>
                            )}
                        </div>
                    ))}

                </article>

                <article>
                    <div className='tax-section-addBtn' onClick={handleAddTask}>
                        <IoMdAddCircle />
                        Add Custom Field
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Workflows;
