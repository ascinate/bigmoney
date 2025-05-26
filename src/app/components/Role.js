"use client"
import React, { useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from 'next/image';


function Role() {


    const [adminToggle, setAdminToggle] = useState(false);


    const handleAdminToggle = () => {
        setAdminToggle(!adminToggle)
    }
    return (
        <>
            <section className='roles-section'>
                <div className='wrapper'>
                    <article className='roles-container'>
                        <div className='roles-section-header'>
                            <h2 className='cm-head'>Default Roles</h2>
                        </div>
                        <div className='roles-section-row-one' onClick={handleAdminToggle}>
                            <div className='roles-section-row-one-left'>
                                <div className='roles-section-row-one-left-icon-container'>
                                    <BsThreeDotsVertical className='roles-section-row-one-left-icon' />
                                </div>
                                <div>
                                    <span className='administrator'>Administrator</span>
                                    <span className='userOne'> 1 user</span>
                                </div>
                            </div>

                        </div>
                        {adminToggle && (
                            <div className='administrator-dropdown-row-one'>
                                <div className='administrator-users'>Users</div>
                                <div className='administrator-admin-card-container'>
                                    <div className='administrator-admin-card-container-right'>
                                        <div className='administrator-admin-card'>
                                        <Image
                                            src="/https://secure.gravatar.com/avatar/a006a75e14b17897c67b35391dccea0722971fe6a9bb85ffb0b523377e90424a?s=96&d=mm&r=g"
                                            alt="My Logo"
                                            width={20}
                                            height={20}
                                            className='administrator-admin-card-profileImage' />
                                    </div>
                                    
                                    <div>
                                        <p>admin</p>
                                        <p>umakantsonwani@gmail.com</p>
                                    </div>
                                    </div>
                                    
                                </div>
                            </div>
                        )}
                    </article>
                </div >
            </section > 
        </>
    )
}

export default Role;
