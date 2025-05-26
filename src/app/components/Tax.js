"use client"

import React, { useState } from 'react';
import { LuPencilLine } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { VscChromeMinimize } from "react-icons/vsc";

function Tax() {
    const [newTask, setNewTask] = useState([]);
    const [toggleMap, setToggleMap] = useState({});

    const handleAddTask = () => {
        const newId = Date.now();
        setNewTask([...newTask, { id: newId }]);
        setToggleMap((prev) => ({ ...prev, [newId]: false }));
    };

    const handleDeleteTask = (idToRemove) => {
        setNewTask(newTask.filter((div) => div.id !== idToRemove));
        setToggleMap((prev) => {
            const copy = { ...prev };
            delete copy[idToRemove];
            return copy;
        });
    };

    const handleToggle = (id) => {
        setToggleMap((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <>
            <section className='tax-section'>
                <div className='wrapper'>
                    <article>
                        <div className='tax-section-header'>
                            <h2 className='cm-head'> Payment Process </h2>
                        </div>
                        {newTask.map((div) => (
                            <div key={div.id}>
                                <div className='tax-section-row-one' onClick={() => handleToggle(div.id)}>
                                    <div className='tax-section-row-one-left'>
                                        <div className='tax-section-row-one-left-icon-container'>
                                            <BsThreeDotsVertical className='tax-section-row-one-left-icon' />
                                        </div>
                                        <div>
                                            <span className='putnamcounty'>Putnam County</span>
                                            <span className='percentage'> percentage</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDeleteTask(div.id);
                                        }}
                                        className="bg-red-500 text-white px-3 py-1 rounded ml-4"
                                    >
                                        <VscChromeMinimize />
                                    </button>
                                </div>


                                {toggleMap[div.id] && (
                                    <>
                                        <div className='tax-section-toggle'>
                                            <div className='tax-section-toggle-row-one'>
                                                <div className='tax-section-tax-name'>Tax Name</div>
                                                <div className='tax-section-tax-input-div'>
                                                    <input type="text" placeholder='text' className='tax-section-tax-input' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='tax-section-toggle'>
                                            <div className='tax-section-toggle-row-one'>
                                                <div className='tax-section-tax-type'>Tax Type</div>
                                                <div className='tax-section-toggl-right-part'>
                                                    <select className="Custom-schedule-select">
                                                        <option value="singleday">Single Day</option>
                                                        <option value="datarange">Data Range</option>
                                                    </select>
                                                    <div>
                                                        <input type="text" placeholder='input' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='tax-section-toggle'>
                                            <div className='tax-section-toggle-row-three'>
                                                <button>Delete</button>
                                                <button className='saveTax'>Save Tax</button>
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
                            <button>Add Tax</button>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}

export default Tax;
