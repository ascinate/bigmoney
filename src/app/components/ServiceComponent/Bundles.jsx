import React from 'react'
import { FaPencilAlt } from 'react-icons/fa'

function Bundles() {
    return (
        <>

            <div className="row">
                <div className="col-lg-3">
                    <div className="card my-4">
                        <div className="card-body">
                            <div className='d-flex justify-content-between'>
                                <h5 className="card-title">Combined</h5>
                                <p>$75</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <span className="gray-color">Durration:</span>
                                    <p className="my-2">Price:</p>
                                    <p>Buffer:</p>
                                    <p>Capacity:</p>
                                </div>
                                <div className="">
                                    <p className="gray-color">min</p>
                                    <p className="gray-color">$</p>
                                    <p className="gray-color">min</p>
                                    <p className="gray-color"> person</p>
                                </div>
                            </div>
                            <button className='edit-btn'><FaPencilAlt className='mx-2' />Edit Agent</button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Bundles
