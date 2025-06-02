import React from 'react'
import { TfiDownload } from "react-icons/tfi";

import { MdOutlineAccessTime } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { RiResetRightFill } from "react-icons/ri";
import { IoDocumentOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiUnlock } from "react-icons/fi";
import Image from 'next/image';

function CustomerProfileModal() {
    return (
        <>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample2" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Edit Order</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">

                    <div className='row order-row'>
                        <div className='col-lg-6'>
                            <p className='orderid'>Customer ID: 4</p>
                        </div>
                        <div className='col-lg-6'>
                            <p className='orderid'> <span><MdOutlineAccessTime /> History</span></p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='inputLabelMargin'>
                                <Image
                                    src="/"
                                    width={50}
                                    height={50}
                                    alt="profilePhoto"
                                />
                            </div>

                        </div>
                        <div className='col-lg-4 '>
                            <div className='inputLabelMargin'>
                                <label htmlFor="" className='inputDropLabel'>First Name</label>
                                <input type="text" />
                            </div>

                        </div>
                        <div className='col-lg-4 '>
                            <div className='inputLabelMargin'>
                                <label htmlFor="" className='inputDropLabel'>Last Name</label>
                                <input type="text" />
                            </div>

                        </div>
                        <div className='row'>
                            <div className="allowedrecords d-flex justify-content-between">
                                <h3 className="order-header">Contact info</h3>
                                <p><span className='orderplus-iocn'><FaPlus /></span> <span className='ordericon-text' >Add Another Item</span> </p>

                            </div>
                            <div className='row order-row'>
                                <div className='col-lg-12'>
                                    <label htmlFor="">Email address</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='row order-row'>
                                <div className='col-lg-12'>
                                    <label htmlFor="">Phone Number</label>
                                    <input type="text" />
                                </div>
                            </div>



                        </div>

                        <div className='row'>
                            <div className="orderitem d-flex justify-content-between">
                                <h3 className="orderitem-title">Notes</h3>
                            </div>

                            <div className='row'>
                                <div className='col-lg-12'>
                                    <label htmlFor="" className='inputDropLabel'>Notes left by the customer</label>
                                    <br />
                                    <textarea type="text" placeholder='Notes left by the customer' />
                                </div>

                            </div>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <label htmlFor="" className='inputDropLabel'>Admin notes &#40;visible only to admins&#41;</label>
                                    <br />
                                    <textarea type="text" placeholder='Admin notes (visible only to admins)' />
                                </div>

                            </div>


                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='inputLabelMargin'>
                                        <p> <FiUnlock />Notes left by the customer</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='row'>
                            <div className="orderitem d-flex justify-content-between">
                                <h3 className="orderitem-title">Appointments</h3>
                                <button><span> <FaPlus /></span><span>Add</span></button>
                            </div>

                            <div className='row'>
                                <div className='col-lg-12 '>
                                    <div className='d-flex'>
                                        <div>
                                            <Image
                                                src="/"
                                                width={50}
                                                height={50}
                                                alt="photo"
                                            />
                                        </div>
                                        <div>
                                            <p>Service 1</p>
                                            <span>May 28, 2025, 01:00pm-02:00pm</span>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="row">
                                <div className='col-lg-8'>

                                    <button>Save Changes</button>
                                </div>
                                <div className='col-lg-4'>

                                    <button><RiDeleteBin6Line /></button>
                                </div>
                            </div>
                        </div>




                    </div>

                    <div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default CustomerProfileModal
