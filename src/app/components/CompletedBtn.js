import React from 'react'
import { TfiDownload } from "react-icons/tfi";
import { MdOutlineAttachment } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { RiResetRightFill } from "react-icons/ri";
import { IoDocumentOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiUnlock } from "react-icons/fi";
import Image from 'next/image';
function CompletedBtn() {
    return (
        <>


            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Edit Order</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">

                    <div className='row order-row'>
                        <div className='col-lg-6'>
                            <p className='orderid'>Order ID: 3 Code: UHNJL7P</p>
                        </div>
                        <div className='col-lg-6'>
                            <p className='orderid'> <span><MdOutlineAttachment /> Share</span> <span><MdOutlineAccessTime /> History</span></p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='inputLabelMargin'>
                                <label htmlFor="" className='inputDropLabel'>Order Status</label>
                                <select name="" id="" className='offcanvasDropdown'>
                                    <option value="">Set status</option>
                                    <option value="">Open</option>
                                    <option value="">cancelled</option>
                                    <option value="">Completed</option>
                                </select>
                            </div>

                        </div>
                        <div className='col-lg-6 '>
                            <div className='inputLabelMargin'>
                                <label htmlFor="" className='inputDropLabel'>Fullfillment status</label>
                                <select name="" id="" className='offcanvasDropdown'>
                                    <option value="">Set status</option>
                                    <option value="">Not fulfilled</option>
                                    <option value="">Fulfilled</option>
                                    <option value="">Partially fulfilled</option>
                                </select>
                            </div>

                        </div>
                        <div className='row'>
                            <div className="allowedrecords d-flex justify-content-between">
                                <h3 className="order-header">Order Item</h3>
                                <p><span className='orderplus-iocn'><FaPlus /></span> <span className='ordericon-text' >Add Another Item</span> </p>

                            </div>
                            <div className='row order-row'>
                                <div className='col-lg-6'>
                                    <p className='orderid'>ID: 3 Code: UFATDFZQ</p>
                                </div>
                                <div className='col-lg-6'>
                                    <p className='orderid'> <span><MdOutlineAttachment /> Share</span> <span><MdOutlineAccessTime /> History</span></p>
                                </div>
                            </div>
                            <div className='row order-row'>
                                <div className='col-lg-12'>
                                    <label htmlFor="" className='inputDropLabel'>Order Status</label>
                                    <select name="cars" id="cars" className='orderitem-service uncategorized '>
                                        <optgroup label="Uncategorized" className='uncategorized'>
                                            <option value="setstatus" className='service-1'>Service 1</option>
                                            <option value="notfulfilled">Service 2</option>
                                            <option value="fulfilled">Full house cleaning</option>

                                        </optgroup>
                                        <optgroup label="Mobile Detailing">
                                            <option value="mercedes">Express Detail Inside & Outside</option>
                                        </optgroup>
                                    </select>
                                </div>
                            </div>
                            <div className='row order-row'>
                                <div className='col-lg-12'>
                                    <label htmlFor="" className='inputDropLabel'>Location</label>
                                    <select name="cars" id="cars" className='orderitem-service uncategorized '>

                                        <option value="setstatus" className='service-1'>Home</option>
                                        <option value="notfulfilled">HospitaL</option>
                                        <option value="fulfilled">Main Manu</option>
                                    </select>
                                </div>
                            </div>


                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='inputLabelMargin'>
                                        <label htmlFor="" className='inputDropLabel'>Agent</label>
                                        <select name="" id="" className='offcanvasDropdown'>
                                            <option value="">Set status</option>
                                            <option value="">Open</option>
                                            <option value="">cancelled</option>
                                            <option value="">Completed</option>
                                        </select>
                                    </div>

                                </div>
                                <div className='col-lg-6 '>
                                    <div className='inputLabelMargin'>
                                        <label htmlFor="" className='inputDropLabel'>Status</label>
                                        <select name="" id="" className='offcanvasDropdown'>
                                            <option value="">Set status</option>
                                            <option value="">Not fulfilled</option>
                                            <option value="">Fulfilled</option>
                                            <option value="">Partially fulfilled</option>
                                        </select>
                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <div className='col-lg-6'>
                                    <div className='inputLabelMargin'>
                                        <label htmlFor="" className='inputDropLabel'>Order Status</label>
                                        <input type="date" />
                                    </div>

                                </div>
                                <div className='col-lg-6 '>
                                    <div className='inputLabelMargin'>
                                        <label htmlFor="" className='inputDropLabel'>Fullfillment status</label>
                                        <button>Availability <IoIosArrowRoundForward /></button>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className='col-lg-6'>
                                    <div className='inputLabelMargin'>
                                        <label htmlFor="" className='inputDropLabel'>Start time</label>
                                        <input type="text" placeholder='' value='11:00' />
                                    </div>

                                </div>
                                <div className='col-lg-6 '>
                                    <div className='inputLabelMargin'>
                                        <label htmlFor="" className='inputDropLabel'>End time</label>
                                        <input type="text" placeholder='' value='11:00' />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-lg-6'>
                                    <div className='inputLabelMargin'>
                                        <label htmlFor="" className='inputDropLabel'>Buffer before</label>
                                        <input type="text" placeholder='' value='11:00' />
                                    </div>

                                </div>
                                <div className='col-lg-6 '>
                                    <div className='inputLabelMargin'>
                                        <label htmlFor="" className='inputDropLabel'>Buffer after</label>
                                        <input type="text" placeholder='' value='11:00' />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <button>Start Chatting</button>
                            </div>


                        </div>

                        <div className='row'>
                            <div className="orderitem d-flex justify-content-between">
                                <h3 className="orderitem-title">Customer</h3>
                                <div className='customer-font d-flex gap-2'>
                                    <p className='orderitem-para d-flex align-items-center'> <FaPlus /> New</p>
                                    <p className='orderitem-para d-flex align-items-center'> <IoIosSearch />Find</p>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-lg-6'>
                                    <label htmlFor="" className='inputDropLabel'>First name</label>
                                    <br />
                                    <input type="text" />
                                </div>
                                <div className='col-lg-6'>
                                    <label htmlFor="" className='inputDropLabel'>Last name</label>
                                    <br />
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='row '>
                                <div className='col-lg-12'>
                                    <label htmlFor="" className='inputDropLabel'>Email</label>
                                    <br />
                                    <input type="text" />
                                </div>
                            </div>


                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='inputLabelMargin'>
                                        <label htmlFor="" className='inputDropLabel'>number</label>
                                        <br />
                                        <input type="number" />
                                    </div>

                                </div>

                            </div>

                            <div className="row">
                                <div className='col-lg-12'>
                                    <div className='inputLabelMargin'>
                                        <label htmlFor="" className='inputDropLabel'>Customer Notes</label>
                                        <input type="text" />
                                    </div>

                                </div>

                            </div>




                        </div>


                        <div className='row'>
                            <div className="orderitem d-flex justify-content-between">
                                <h3 className="orderitem-title">Price Breakdown</h3>
                                <div className='customer-font d-flex gap-2'>
                                    <p className='orderitem-para d-flex align-items-center'> <RiResetRightFill /> Recalculate</p>

                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-lg-6'>
                                    <span className='inputDropLabel'>Fully House cleaning</span>

                                </div>
                                <div className='col-lg-6'>

                                    <input type="text" value='$180' />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <span className='inputDropLabel'>sub total</span>

                                </div>
                                <div className='col-lg-6'>

                                    <input type="text" value='$180' />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <span className='inputDropLabel'>Putnam County (6%)</span>

                                </div>
                                <div className='col-lg-6'>

                                    <input type="text" value='$160' />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <span className='inputDropLabel'>total</span>

                                </div>
                                <div className='col-lg-6'>

                                    <input type="text" value='$190' />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                        <label className="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className='row'>
                            <div className="orderitem d-flex justify-content-between">
                                <h3 className="orderitem-title">Balance & Payments</h3>
                                <div className='customer-font d-flex gap-2'>
                                    <select name="" id="">
                                        <option value="">Show All</option>
                                        <option value="">not paid</option>
                                        <option value="">partially paid</option>
                                        <option value="">fully paid</option>
                                        <option value="">processing</option>
                                    </select>

                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-lg-6'>
                                    <span className='inputDropLabel'>$190.80</span>

                                </div>
                                <div className='col-lg-6'>

                                    <input type="text" value='$0.00' />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <span className='inputDropLabel'>total payment</span>

                                </div>
                                <div className='col-lg-6'>

                                    <span className='inputDropLabel'>Total Balance Due</span>
                                </div>
                            </div>


                        </div>
                        <div className='row'>
                            <div className="orderitem d-flex justify-content-between">
                                <h3 className="orderitem-title">Transactions</h3>
                                <div>
                                    <Image
                                        src="/"
                                        width={50}
                                        height={50}
                                        alt="stripe-logo"
                                    />
                                    <button>successed</button>
                                </div>

                            </div>

                            <div className='row'>
                                <div className='col-lg-6'>
                                    <span className='inputDropLabel'>$190.80</span>

                                </div>
                                <div className='col-lg-6'>

                                    <input type="text" value='$0.00' />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <span className='inputDropLabel'>total payment</span>

                                </div>
                                <div className='col-lg-6'>

                                    <span className='inputDropLabel'>Total Balance Due</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <span className='inputDropLabel'>May 21,2025</span>

                                </div>

                            </div>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <button className=''><FaPlus />Add Transaction</button>

                                </div>

                            </div>

                        </div>
                        <div className='row'>
                            <div className="orderitem d-flex justify-content-between">
                                <h3 className="orderitem-title">Invoices</h3>


                            </div>

                            <div className='row'>
                                <div className='col-lg-6'>
                                    <span className='inputDropLabel'>$0.00</span>

                                </div>
                                <div className='col-lg-6'>

                                    <button><IoDocumentOutline />paid</button>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <span className='inputDropLabel'>Invoice Number: INV-1000003</span>

                                </div>
                                <div className='col-lg-6'>

                                    <span className='inputDropLabel'>Due: May 21, 2025</span>
                                </div>
                            </div>
                            <div className='row'>
                                <button><FaPlus /> New Invoice</button>

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

export default CompletedBtn
