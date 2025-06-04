"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt } from "react-icons/fa";
import Calendar from './Calendar';
import ShowAll from './ShowAll';
import Communications from './Communications';
import Extensions from './Extensions'
import Marketing from './Marketing';
import Payments from './Payments';
import VideoMeetings from './VideoMeetings';
function AddonMain() {
    return (
        <>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Show All</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Calendars</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Communications</button>
                </li>

                <li className="nav-item" role="presentation1">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact1" type="button" role="tab" aria-controls="contact" aria-selected="false">Extensions</button>
                </li>
                <li className="nav-item" role="presentation1">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact2" type="button" role="tab" aria-controls="contact" aria-selected="false">Marketing</button>
                </li>
                <li className="nav-item" role="presentation1">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact3" type="button" role="tab" aria-controls="contact" aria-selected="false">Payments
                    </button>
                </li>
                <li className="nav-item" role="presentation1">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact4" type="button" role="tab" aria-controls="contact" aria-selected="false">Video Meetings
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                    <ShowAll />

                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <Calendar />
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><Communications /> </div>
                <div className="tab-pane fade" id="contact1" role="tabpanel" aria-labelledby="contact-tab"><Extensions /></div>
                <div className="tab-pane fade" id="contact2" role="tabpanel" aria-labelledby="contact-tab"> <Marketing /> </div>
                <div className="tab-pane fade" id="contact3" role="tabpanel" aria-labelledby="contact-tab"><Payments /> </div>
                <div className="tab-pane fade" id="contact4" role="tabpanel" aria-labelledby="contact-tab"><VideoMeetings /></div>
            </div>
        </>
    )
}

export default AddonMain
