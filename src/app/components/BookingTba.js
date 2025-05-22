"use client"

import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsWindowDesktop } from "react-icons/bs";
import { VscThreeBars } from "react-icons/vsc";
import { BiRefresh } from "react-icons/bi";

function BookingTba() {
    const [viewModal, setViewModal] = useState(false)

    const handleAddDay = () => {
        console.log("hello");
        setViewModal(true)
    }

    return(
        <>
           <section className='booking-section'>
                <div className='wrapper '>
                    <div className='booking-mycard'>
                        {/* left card */}
                        <div className='booking-contaner'>
                            <div className="booking-left">
                                
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 73">
					<path class="latepoint-step-svg-highlight" d="M60.3884583,4.85921c-2.8716431-0.2993164-5.8259277,0.557373-7.9927979,2.197998 c-1.0095825,0.6467285-1.8696899,1.4177246-2.4382935,2.2561035c-1.7146873,2.5291042-2.5220757,6.3280535-1.3348999,10.835206 c-5.2646828-1.1404552-4.7828903-1.0880737-4.9659424-1.052002l-2.1259766,0.4560547 c-18.4231091,3.9559402-16.4117718,3.5059223-16.6292133,3.5698242 C4.8973494,18.9566498,6.1634111,19.1396389,5.8543382,19.2293282c0.0001221-0.0048828,0.0001221-0.0097656,0.0002441-0.0146484 c-0.0184326,0.012207-0.0371094,0.0292969-0.055603,0.0419922c-0.2596664,0.100153-0.2317972,0.1285801-0.3178711,0.2409668 c-0.388855,0.3278809-0.7800293,0.7553711-1.1567383,1.2041016c-0.3962412,0.4718437-0.1706734-1.9064941,0.5690308,41.3483887 c0.0057373,0.3037109,0.1334229,0.597168,0.3482666,0.8115234c0.3456421,0.3449707,0.5272217,0.5529785,0.7957764,0.7592773 c0.0950928,0.2109375,0.2803345,0.3754883,0.5170288,0.4277306c20.0937347,4.4312515,18.6302357,4.2767105,19.0541992,3.9326172 c0.0049438-0.0039063,0.0066528-0.010498,0.0114746-0.0146484c0.10186-0.0230865,15.3084774-3.4694977,17.9484882-4.0644493 c0.0352173-0.0078125,0.0643921-0.0273438,0.0973511-0.0397949c19.0996971,4.4957237,18.2303658,4.3366661,18.4299927,4.3366661 c0.4144669,0,0.7473717-0.3352814,0.75-0.7451172c0.0791321-12.2700005,0.2286911-24.8520088,0.3359375-36.9809532 c3.2604828-5.2970676,7.2790756-13.97159,5.0361328-19.7866211C67.0105286,7.553546,63.8635559,5.2127256,60.3884583,4.85921z M24.2595501,66.4368439c-0.1054153-0.0233917-14.3338861-3.1805725-16.8095703-3.727047 C7.0617967,48.3806953,6.8420701,33.9500313,6.8132615,20.8670235c5.8759589,1.233469,11.3363876,2.3809967,17.2407227,3.6113281 C24.3160305,51.6952362,24.2979584,58.1465149,24.2595501,66.4368439z M42.6662903,62.5681953 c-2.7329216,0.6163788-16.6759109,3.7770119-16.7893696,3.8027306c-0.1231174-12.0390549-0.0782604-29.8359985-0.02948-41.9248009 c5.5739422-1.1885509,11.055666-2.3654537,17.2197285-3.6884766C43.0675392,20.8666286,42.96418,48.7001991,42.6662903,62.5681953z M61.3523254,66.5017853c-5.4633789-1.2939453-11.2871094-2.6728477-16.8710938-3.989254 c-0.1817551-17.4268951-0.0330315-7.6905823,0.1430664-41.7041016c1.5129585,0.33918,2.9774971,0.6543026,4.5148926,0.9870605 c1.2711296,3.5923672,4.1154442,8.24547,6.2368164,10.9348145c0.510498,0.6472168,1.4362793,1.4404297,2.2056885,1.7519531 c0.8912773,0.6281052,1.8476524,0.4962959,2.5943604-0.1904297c0.5303345-0.4863281,1.022644-1.03125,1.4845581-1.6137695 C61.5390205,45.8931503,61.4254494,55.6076279,61.3523254,66.5017853z M64.0022278,25.9051094 c-1.2943535,2.4604969-2.8116989,5.4206085-4.840332,7.28125c-0.1386719,0.1279297-0.296875,0.1855469-0.4130859,0.2011719 c-0.7806473-0.0199814-5.2463379-5.6790333-7.6728516-13.1708984c-0.5771484-1.7861328-1.190918-4.1210938-0.8085938-6.3457041 c0.3496094-2.03125,0.9931641-3.5849609,1.9125977-4.6152344c1.8496094-2.0751953,5.0126953-3.2119141,8.0566406-2.9042969 c2.9272461,0.2978516,5.5722656,2.2568359,6.5820313,4.8740234C68.454361,15.4667559,66.1138763,21.8956394,64.0022278,25.9051094z "></path>
					<path class="latepoint-step-svg-base" d="M54.1091614,12.0506163c-2.088459,3.2326937,0.0606689,7.85254,4.3237305,7.85254 c3.6078873,0,5.8475189-3.5880222,4.8115234-6.6953135C61.9358063,9.2799187,56.3691139,8.5516081,54.1091614,12.0506163z M58.170929,18.3797188c-0.8803711-0.0610352-1.743103-0.4106445-2.3566895-1.0410156 c-1.1245117-1.1542969-1.3198242-3.1201181-0.4453125-4.4736338c0.8155251-1.2618265,2.428051-1.8824129,4.0743408-1.404541 c0.5652466,0.5754395,1.0892944,1.170166,1.3425903,1.8354492C61.5309181,15.2528019,60.553997,17.7360039,58.170929,18.3797188z"></path></svg>
                    
                                <h2 id='location' >Location Selections</h2>
                                <p id='location-info'>Please select a location for
                                    your appointment</p>
                                <p id='questions'>Questions?</p>
                                <p id='location-info'>Call (858) 939-3746 for help</p>

                            </div>
                            <div className="booking-right">
                                <h2>Locations</h2>

                                <input type="email" className='booking-input' /><br />
                                <div className='booking-input flex items-center'>
                                    <Image
                                        src="/bookingpageImg.png"
                                        alt="My Logo"
                                        width={20}
                                        height={20}
                                        id='woman-working-laptop-high' />
                                    <p>Main Location</p>
                                </div>
                                <input type="password" className='booking-input' id='password-input' />
                                <div className='location-btn'>
                                    <button id='discard-btn'>X Discard</button>
                                    <button id='save-btn'>Save Changes</button>
                                </div>
                            </div>
                        </div>


                        {/*right card */}
                        <div className='booking-contaner-rightCard'>

                            <div className="booking-righ-rightPart">
                                <div id='booking-righ-top'>


                                    <div id='appearance'>
                                        <BsWindowDesktop id='appearance-icon' />
                                        <h2>Appearance</h2>

                                    </div>
                                    <div id='color-select'>
                                        <input type="color" id="" name="" value="#1d7bff" className='booking-container-right-input' />
                                        <input type="color" id="" name="" value="#F34747" />
                                        <input type="color" id="" name="" value="#222222" />
                                        <input type="color" id="" name="" value="#0f8c77" />
                                        <input type="color" id="" name="" value="#1ca00f" />
                                        <input type="color" id="" name="" value="#a32f96" />
                                        <input type="color" id="" name="" value="#cc7424" />
                                        <input type="color" id="multicolor" name="" value="" />
                                        <div>
                                        </div>

                                        <label htmlFor="" id='border-style'>Border Style</label><br />

                                        <select name="" id="booking-container-input">
                                            <option value="volvo">Flat</option>
                                            <option value="audi">Rounded Corners</option>
                                        </select>
                                    </div>
                                </div>
                                <div className=' flex items-center justify-between' id="step">
                                    <div className='flex items-center'>
                                        <VscThreeBars id='step-icon' />
                                        <p>Step</p>
                                    </div>
                                    <div className='flex items-center' id='chanageorder'>
                                        <BiRefresh id='hanage-order' />
                                        <p id='chanage-order'>Chanage Order</p>
                                    </div>

                                </div>

                                <div id='step-container'>
                                    <select name="" id="booking-container-input">
                                        <option value="volvo">Locations</option>
                                        <option value="audi">Services</option>
                                        <option value="volvo">Service Extras</option>
                                        <option value="audi">Custom Fields for Booking</option>
                                        <option value="volvo">Service Durations</option>
                                        <option value="audi">Total Attendees</option>
                                        <option value="volvo">Agents</option>
                                        <option value="audi">Datepicker</option>
                                        <option value="volvo">Recurring Appointment</option>
                                        <option value="audi">Customer</option>
                                        <option value="volvo">Verify Order</option>
                                        <option value="audi">Payment Time</option>
                                        <option value="volvo">Payment Portion</option>
                                        <option value="audi">Payment Method</option>
                                        <option value="volvo">Payment Processors</option>
                                        <option value="audi">Payment Form</option>
                                        <option value="audi">Confirmation</option>
                                    </select>
                                    <div className='booking-righ-bottom'>
                                        <div className='booking-righ-bottom-hover'>
                                            <div className='booking-righ-bottom-toggle'>
                                                <label className="switch">
                                                    <input type="checkbox" />
                                                    <span className="slider"></span>
                                                </label>
                                                <p id='show-location-categories'>Show location categories</p>
                                            </div>
                                            <p id='show-location-text'>If turned on, locations will be displayed in categories</p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
export default BookingTba;