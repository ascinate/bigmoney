import React from 'react'

import { CgProfile } from "react-icons/cg";
import { FaPencil } from "react-icons/fa6";
import { HiMiniPlusCircle } from 'react-icons/hi2';
import Image from 'next/image';

function LocationDefault() {
    return (
        <>
        <h4 className='Uncategorized '>Uncategorized</h4>
            <div className="row g-lg-4 mt-2">
                
                <div className='col-4'>
                    <div className="card location-card">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"  className='iframe-tag'></iframe>
                        <div className="card-body">
                            <div className='card-title-header'>

                                <h5 className="card-title">Main Location</h5>
                            </div>
                            <div>
                                <p className="agents-photo">Agents: </p>
                                <div className='d-flex agents-photo-icon'>
                                    <Image
                                        src="/image.png"
                                        width={100}
                                        height={34}
                                        alt="Picture of the author"
                                    />
                                </div>
                            </div>
                            <button className='btn all-btn edit-btn'><FaPencil className='me-2' />Edit location</button>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className="card location-card">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"  className='iframe-tag'></iframe>
                        <div className="card-body">
                            <div className='card-title-header'>

                                <h5 className="card-title">Home</h5>
                            </div>
                            <div>
                                <p className="agents-photo">Agents: </p>
                                <div className='d-flex agents-photo-icon'>
                                    <Image
                                        src="/image.png"
                                        width={100}
                                        height={34}
                                        alt="Picture of the author"
                                    />
                                </div>
                            </div>
                            <button className='btn all-btn edit-btn'><FaPencil className='me-2' />Edit location</button>
                        </div>
                    </div>
                </div>
                <div className='col-4 addAgent-col-main'>
                    <div className="card location-card location-add-card">

                        <div className="card-body addAgent-col d-flex flex-column justify-content-center align-items-center">
                            <div className='divimg '>
                                <HiMiniPlusCircle className='divimgIcon' />
                                <p className='divimgIconText'>Add Agent</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        <h4 className='natural-disasters mt-5'>Natural Disasters</h4>
            <div className="row g-lg-4 row-gap mt-2 ">
               
                <div className='col-4'>
                    <div className="card location-card">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"  className='iframe-tag'></iframe>
                        <div className="card-body">
                            <div className='card-title-header'>

                                <h5 className="card-title"></h5>
                            </div>
                            <div>
                                <p className="agents-photo">Agents: </p>
                                <div className='d-flex agents-photo-icon'>
                                    <Image
                                        src="/image.png"
                                        width={100}
                                        height={34}
                                        alt="Picture of the author"
                                    />
                                </div>
                            </div>
                            <button className='btn all-btn edit-btn'><FaPencil className='me-2' />Edit location</button>
                        </div>
                    </div>
                </div>

                <div className='col-4'>
                    <div className="card location-card location-add-card">

                        <div className="card-body addAgent-col d-flex flex-column justify-content-center align-items-center">
                            <div className='divimg '>
                                <HiMiniPlusCircle className='divimgIcon ' />
                                <p className='divimgIconText'>Add Agent</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LocationDefault;
