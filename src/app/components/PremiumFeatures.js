"use client";
import { useState } from 'react'
import { FaRegNewspaper } from "react-icons/fa";
import { MdBlock } from "react-icons/md";
import { GoDatabase } from "react-icons/go";
import { CiCircleInfo } from "react-icons/ci";
import { GrInstall } from "react-icons/gr";
import { BiRecycle } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { PiRecycleLight } from "react-icons/pi";
import { TfiReload } from "react-icons/tfi";


function PremiumFeatures() {

    const [featuresOpen, setFeaturesOpen] = useState(false);
    const [systemInfo, setSystemInfo] = useState(false);
    const [installAddons, setInstallAddons] = useState(false);
    const [taskDue, setTaskDue] = useState(false); 

    const hanldeFeatures = () => {
        setFeaturesOpen(!featuresOpen);
    };
    const hanldeSystemInfo = () => {
        setSystemInfo(!systemInfo);
    }


    const handleInstallAddons = () => {
        setInstallAddons(!installAddons);
    }
      const handleTaskDue = () => {
        setTaskDue(!taskDue);
    }
    return (
        <>

            <section className='premium-features-section pt-5'>
              <div className='com-div-border'>
                <div className='wrapper'>
                    <div className='premium-features-container'>
                        <div className='' id='premium-features'>
                            <div id='license-status-div'>
                                <div id="blink">
                                </div>
                                <p id='license-status'>License Status: Active</p>
                            </div>
                            <div id='license-status-info' >Thank you for using LatePoint</div>

                        </div>
                        <div className=' premium-features-container-bottom'>
                            <div className='license-div'>
                                <p><FaRegNewspaper /></p>
                                <p>License Info</p>
                            </div>
                            <div className='deactivate-div'>
                                <p> <MdBlock /></p>
                                <p>Deactivate</p>
                            </div>

                        </div>
                    </div>

                </div>
              </div>

            </section>




            <section className='premium-features-section-features'>
                <div className='wrapper'>
                    <div className='premium-bottom-section cm-btn-div015'>
                        <div className='premium-bottom-row  pt-4 position-relative d-flex align-items-center w-100' onClick={hanldeFeatures} >
                            <div className='premium-features-flex d-flex align-items-center'>
                                <p id='premium-features-flex-icon'><GoDatabase /></p>
                                <p className='ms-2'>Features</p>

                            </div>
                        </div>
                        <div>
                            {featuresOpen && (
                                <div className='features-dropdown'>
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider"></span>
                                    </label>
                                    <p>Chat With Customers</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='premium-bottom-section  cm-btn-div015'>
                        <div className='premium-bottom-row  pt-4 position-relative d-flex align-items-center w-100' onClick={hanldeSystemInfo} >
                            <div className='premium-features-flex d-flex align-items-center'>
                                <p id='premium-features-flex-icon'><GoDatabase /></p>
                                <p className='ms-2'>System info</p>

                            </div>
                        </div>
                        <div>
                            {systemInfo && (
                                <div className='system-dropdown'>
                                    <p>LatePoint Plugin Version: 5.1.93</p>
                                    <p className='flex items-center'>LatePoint Database Version: 2.2.1 <span className='reset flex items-center'> <PiRecycleLight id='reset-icon' />reset</span></p>
                                    <p>PHP Version: 8.2.28</p>
                                    <p>MySQL Version: 8.0.42</p>
                                    <p>WordPress Version: 6.8.1</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='premium-bottom-section cm-btn-div015'>
                        <div className='premium-bottom-row pt-4 position-relative d-flex align-items-center w-100' onClick={handleInstallAddons} >
                            <div className='premium-features-flex d-flex align-items-center'>
                                <p id='premium-features-flex-icon'><GoDatabase /></p>
                                <p className='ms-2'>Installed Addons</p>

                            </div>
                        </div>
                        <div>
                            {installAddons && (
                                <div className='install-dropdown row row-cols-1 row-cols-lg-3 y-4 mb-5 mt-3'>
                                    <div className='col'>
                                    
                                        <div className='install-col-one cm-border01'>
                                            <p>Pro Features</p>
                                            <div className='install-col-one-text d-flex align-items-center install-col-one-text-bottom'>
                                                <div className=''>
                                                    <p>Core:1.1.9</p>
                                                </div>
                                                <div className='install-col-one-text-bottom'>
                                                    <p className='flex items-center ' id="install-database">Database:1.1.1 <span className='flex items-center' id='install-database-icon'><PiRecycleLight id="install-database-icon" /> RESET</span></p>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className='col'>
                                        <div className='install-col-one cm-border01'>
                                            <p>Pro Features</p>
                                            <div className='install-col-one-text install-col-one-text-bottom'>
                                                <div className=''>
                                                    <p>Core:1.1.9</p>
                                                </div>
                                                <div className='install-col-one-text-bottom'>
                                                    <p className='flex items-center ' id="install-database">Database:1.1.1 <span className='flex items-center' id='install-database-icon'><PiRecycleLight id="install-database-icon" /> RESET</span></p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='install-col-one cm-border01'>
                                            <p>Pro Features</p>
                                            <div className='install-col-one-text install-col-one-text-bottom'>
                                                <div className=''>
                                                    <p>Core:1.1.9</p>
                                                </div>
                                                <div className='install-col-one-text-bottom'>
                                                    <p className='flex items-center ' id="install-database">Database:1.1.1 <span className='flex items-center' id='install-database-icon'><PiRecycleLight id="install-database-icon" /> RESET</span></p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>


                    <div className='premium-bottom-section cm-btn-div015'>
                        <div className='premium-bottom-row pt-4 position-relative' onClick={handleTaskDue} >
                            <div className='premium-features-flex d-flex align-items-center'>
                                <p id='premium-features-flex-icon'><TfiReload /></p>
                                <p className='ms-2'>Tasks Due</p>

                            </div>
                        </div>
                        <div>
                            {taskDue && (
                                <div className='system-dropdown sm-parat'>
                                 <p> <small> Nothing to do  </small> </p>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </section>

        </>

    )
}

export default PremiumFeatures;
