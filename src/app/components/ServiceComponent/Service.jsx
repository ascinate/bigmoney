'use client'

import React from 'react'
import Image from 'next/image';
import { MdElectricBolt } from 'react-icons/md';
import { FaPencilAlt } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { FaPencil } from "react-icons/fa6";
import { HiMiniPlusCircle } from 'react-icons/hi2';
function Service() {

    const service = [
        {
            name: 'Full House Cleaning',
            schedule: '08:00am - 05:00pm',
            bookings: 0,
            status: 'On Duty',
            duration: 240,
            price: 269,
            capacity: 1,
        },
        {
            name: 'Service 1',
            schedule: '08:00am - 05:00pm',
            bookings: 0,
            status: 'On Duty',
            duration: 240,
            price: 269,
            capacity: 1,
        },
        {
            name: 'Service 2',
            schedule: '08:00am - 05:00pm',
            bookings: 0,
            status: 'On Duty',
            duration: 140,
            price: 269,
            capacity: 1,
        },
    ];


    return (
        <>
            {/* col */}


            <div className="row row-gap">
                <h4 className='Uncategorized'>Uncategorized</h4>
                {service.map((service, index) => (
                    <div className="col-lg-4" key={index}>
                        <div className="card agents-card">
                            <MdElectricBolt className="card-hover-icon" />
                            <div className="d-flex gap-2 justify-content-around">
                                <div>
                                    <h6 className="picture-author-name">{service.name}</h6>
                                    <p className="picture-author-phone">{service.phone}</p>
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="daydiv d-flex justify-content-around">
                                    <p>Agents</p>
                                    <div>
                                        <CgProfile />
                                        <CgProfile />
                                        <CgProfile />
                                    </div>

                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <span className="gray-color">Durration:</span>
                                        <p className="my-2">Price:</p>
                                        <p>Buffer:</p>
                                        <p>Capacity:</p>
                                    </div>
                                    <div className="">
                                        <p className="gray-color">{service.duration}min</p>
                                        <p className="gray-color">${service.price}</p>
                                        <p className="gray-color">{service.duration}min</p>
                                        <p className="gray-color">{service.capacity} person</p>
                                    </div>
                                </div>
                                <button className="edit-btn">
                                    <FaPencilAlt className="mx-2" />Edit Agent
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="col-lg-4 my-4">
                    <div className="card agents-card add-agents-card">
                        <div className='divimg'>
                            <HiMiniPlusCircle className='divimgIcon' />
                            <p className='divimgIconText'>Add Agent</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="row row-gap">
                <h4 className='Uncategorized'>Mobile Detailing</h4>
                {service.map((service, index) => (
                    <div className="col-lg-4" key={index}>
                        <div className="card agents-card">
                            <MdElectricBolt className="card-hover-icon" />
                            <div className="d-flex gap-2 justify-content-around">
                                <div>
                                    <h6 className="picture-author-name">{service.name}</h6>
                                    <p className="picture-author-phone">{service.phone}</p>
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="daydiv d-flex justify-content-around">
                                    <p>Agents</p>
                                    <div>
                                        <CgProfile />
                                        <CgProfile />
                                        <CgProfile />
                                    </div>

                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <span className="gray-color">Durration:</span>
                                        <p className="my-2">Price:</p>
                                        <p>Buffer:</p>
                                        <p>Capacity:</p>
                                    </div>
                                    <div className="">
                                        <p className="gray-color">{service.duration}min</p>
                                        <p className="gray-color">${service.price}</p>
                                        <p className="gray-color">{service.duration}min</p>
                                        <p className="gray-color">{service.capacity} person</p>
                                    </div>
                                </div>
                                <button className="edit-btn">
                                    <FaPencilAlt className="mx-2" />Edit Agent
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="col-lg-4 my-4">
                    <div className="card agents-card add-agents-card">
                        <div className='divimg'>
                            <HiMiniPlusCircle className='divimgIcon' />
                            <p className='divimgIconText'>Add Agent</p>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Service
