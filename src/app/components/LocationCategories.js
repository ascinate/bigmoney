'use client'

import Image from 'next/image';
import React, { useState } from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { PiPencilSimpleLine } from "react-icons/pi";
function LocationCategories() {

    const [selectedImage, setSelectedImage] = useState(null);
    const [toggle, setToggle] = useState(false);
    const [previewImage, setPreviewImage] = useState('/clients-logo.png');

    const handleToggle = () => {
        setToggle(!toggle);
    }
    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            setSelectedImage(file);
            const reader = new FileReader();

            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPreviewImage('/clients-logo.png');
        }
    };


    return (
        <>
                                    <div className="row row-gap">
                                        <div className='col-lg-12 '>
                                            <div className='locationcategories d-flex  align-items-center justify-content-between' onClick={handleToggle}>




                                                <div className='d-flex align-items-center gap-2'>
                                                    <IoReorderThreeOutline className='locationcategoriesIcon' />
                                                    <span>Natural Disasters</span>
                                                </div>
                                                <div>
                                                    <span className='locationcategoriesKey'>ID: 1</span>
                                                    <span className='locationcategoriesKey'>0 Locations Linked</span>
                                                    <PiPencilSimpleLine />
                                                </div>
                                            </div>





                                            {toggle && (
                                                <div className='row'>
                                                    <div className='col-lg-6'>
                                                        <label htmlFor="" className='locationcategories-toggle-text'>Category Name</label>
                                                        <br />
                                                        <input type="text" value='Natural Disasters' className='locationcategories-toggle-input toggle-input' />

                                                    </div>
                                                    <div className='col-lg-6'>
                                                        <label htmlFor="" className='locationcategories-toggle-text'>Short Description</label>
                                                        <br />
                                                        <input type="text" value='Natural Disasters' className='locationcategories-toggle-input toggle-input' />
                                                    </div>

                                                    <div className='col-lg-12'>

                                                        <div className='img-hovers-div01 my-3 text-center d-flex align-items-center justify-content-center'>

                                                            <Image src={previewImage} alt="Preview" width={100} height={61} />
                                                            <input className="form-control locationcategoryImgUpload" type="file" onChange={handleImageChange} id="formFile" />

                                                        </div>
                                                    </div>
                                                    <div className='col-lg-12 d-flex justify-content-between'>
                                                        <button type="button" className='locationCat-Btn location-btn-Save'>Save Category</button>
                                                        <button type="button" className='locationCat-Btn location-btn-Delete'>Delete Category</button>
                                                    </div>



                                                </div>
                                            )}
                                        </div>
                                    </div>
                                
        </>
    )
}

export default LocationCategories;
