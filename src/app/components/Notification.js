"use client"
import {useState} from 'react'
import Image from "next/image";
import { MdElectricBolt } from "react-icons/md";

function Notification() {
    const [isChecked, setIsChecked] = useState(false);
    const [isSmschecked, setSmschecked] = useState(false);
    const [isSmscheckedW, setSmscheckedW] = useState(false);

    const handleChange = () => {
    setIsChecked(!isChecked);
    };

    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleA, setIsVisibleA] = useState(false);
    const [isVisibleW, setIsVisibleW] = useState(false);

    const toggleVisibility = () => {
      setIsChecked(!isChecked);
      setIsVisible(!isVisible);
    };
    const toggleVisibilitySms = () => {
      setSmschecked(!isSmschecked);
      setIsVisibleA(!isVisibleA);
    };
    const toggleVisibilitywhats = () => {
      setSmscheckedW(!isSmscheckedW);
      setIsVisibleW(!isVisibleW);
    };
  return (
    <>
      <section className='roles-section'>
        <div className='wrapper'>
          <article className='roles-bottom-section'>
            <div className=''>
              <h2 className='cm-head'>Email Processor </h2>
            </div>
            <div className='stripe new-colos-prat10'>
              <div className='stripe-radio'>

                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox"  
                    checked={isChecked}
                    onChange={toggleVisibility}/>
                    
                </div>

                <span className='notification-connect'>Default WordPress Mailer</span>
              </div>
              <div id='stripe-connect'>

              </div>
            </div>

            {isVisible && (
                <div className='crm-border-div015 d-inline-block w-100'>
                  <div className='row align-items-center'>
                     <div className='col-lg-4'>
                         <p> Email Settings </p>
                     </div>
                     <div className='col-lg-8'>
                         <div className='row'>
                            <div className='col-lg-4'>
                                <div className='form-group'>
                                    <label> From Name </label>
                                    <input type='text' className='form-control' placeholder='Latepoint'/>
                                </div>
                            </div>
                            <div className='col-lg-8'>
                                <div className='form-group'>
                                    <label> From Email Address </label>
                                    <input type='text' className='form-control' placeholder='Latepoint'/>
                                </div>
                            </div>
                         </div>
                     </div>
                  </div>
                 
                </div>
              )} 

          </article>

          <article className='roles-bottom-section'>
            <div className=''>
              <h2 className='cm-head'> SMS Processor </h2>
            </div>
            <div className='stripe new-colos-prat10'>
              <div className='stripe-radio'>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox"  
                    checked={isSmschecked}
                    onChange={toggleVisibilitySms}/>
                    
                </div>

                <img src="https://latepoint.appointmentstudio.com/wp-content/plugins/latepoint-sms-twilio/public/images/twilio.svg" alt="" />
              </div>
              <div id='stripe-connect'>

                <h4>Twilio</h4>
              </div>
            </div>

            {isVisibleA && (
                <div className='crm-border-div015 d-inline-block w-100'>
                  <div className='row align-items-center'>
                     <div className='col-lg-4'>
                         <p> Sender </p>
                     </div>
                     <div className='col-lg-8'>
                         <div className='row'>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <input type='text' className='form-control' placeholder='Phone Number'/>
                                </div>
                            </div>
                            
                         </div>
                     </div>
                  </div>

                  <hr/>

                  <div className='row align-items-start mt-4'>
                     <div className='col-lg-4 pt-0'>
                         <p> API Credentials </p>
                     </div>
                     <div className='col-lg-8'>
                         <div className='row'>
                            <div className='col-lg-12'>
                                <div className='form-group mb-3'>
                                    <input type='text' className='form-control' placeholder='Account SID'/>
                                </div>
                                <div className='form-group'>
                                    <input type='text' className='form-control' placeholder=' Auth Token'/>
                                </div>
                            </div>
                            
                         </div>
                     </div>
                  </div>
                 
                </div>
              )} 

          </article>
          <article className='roles-bottom-section'>
            <div className=''>
              <h2 className='cm-head'> WhatsApp Processors </h2>
            </div>
            <div className='stripe new-colos-prat10'>
              <div className='stripe-radio'>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox"  
                    checked={isChecked}
                    onChange={toggleVisibilitywhats}/>
                    
                </div>

                <img src="https://latepoint.appointmentstudio.com/wp-content/plugins/latepoint-sms-twilio/public/images/twilio.svg" alt="" />
              </div>
              <div id='stripe-connect'>

                <h4>Whatsapp by Meta</h4>
              </div>
            </div>

            {isVisibleW && (
                <div className='crm-border-div015 d-inline-block w-100'>
                  <div className='row align-items-center'>
                     <div className='col-lg-2'>
                         <p> API Credentials </p>
                     </div>
                     <div className='col-lg-10'>
                         <div className='row'>
                            <div className='col-lg-3'>
                                <div className='form-group'>
                                  <label> Phone Number ID </label>
                                    <input type='text' className='form-control' placeholder='Phone Number ID'/>
                                </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className='form-group'>
                                  <label> Business Account ID </label>
                                    <input type='text' className='form-control' placeholder='Business Account ID'/>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='form-group'>
                                  <label> System User Access Token </label>
                                    <input type='text' className='form-control' placeholder='System User Access Token'/>
                                </div>
                            </div>
                            
                         </div>
                     </div>
                  </div>

                
                 
                </div>
              )} 

          </article>

          <article className='other-bottom-section mb-4'>
            <div className=''>
              <h2 className='cm-head'> Other Settings </h2>
            </div>
            <div className='stripe new-colos-prat10'>
              <div className='stripe-radio'>

                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox"  
                    checked={isSmscheckedW}
                    onChange={handleChange}/>
                    
                </div>

                <span className='notification-connect'>Default WordPress Mailer</span>
              </div>
              <div id='stripe-connect'>

              </div>
            </div>
          </article>

          <div className='mt-5 mb-4 d-none'>
            <div className='admin-dropdown'>
              <div className='admin-dropdown-flex'>
                <div className='admin-dropdown-flex-left'>
                  <p>Email Layout</p>
                </div>
                <div className='admin-dropdown-flex-right'>
                  <p>This layout is used for your emails. You can customize it below and use variable to insert content of the email that is generated by the Process that was triggered. Go to Automation, Workflows to manage actual content of the email that is being sent.</p>
                  <button className='notification-show-layout-btn flex items-center'> <MdElectricBolt />Show layout variables</button>
                </div>
              </div>
            </div>
          </div>

          <div className='d-none'>
            <div className='admin-dropdown'>
              <div className='admin-dropdown-flex'>
                <div className='admin-dropdown-flex-left'>
                  <p>Password Reset</p>
                </div>
                <div className='admin-dropdown-flex-right'>
                  <p>This layout is used for your emails. You can customize it below and use variable to insert content of the email that is generated by the Process that was triggered. Go to Automation, Workflows to manage actual content of the email that is being sent.</p>
                  <button className='notification-show-layout-btn flex items-center'> <MdElectricBolt />Show layout variables</button>
                </div>
              </div>
            </div>
          </div>



          <article className='other-bottom-section'>
              <h2 className='cm-head'> Chat Notifications </h2>
            
            <div>
              <div className='admin-dropdown p-0'>
                <div className='admin-dropdown-flex'>
                  <div className='admin-dropdown-flex-left'>
                    <p className='mb-0 pb-0'>Settings</p>
                  </div>
                  <div className='admin-dropdown-flex-right'>
                    <div>
                      <div>
                        <input type="checkbox" id="" name="" value="" />
                        <span className='chat-notifications ms-3'>
                          Notify customers about new messages</span>
                      </div>
                      <div>
                        <input type="checkbox" id="" name="" value="" />
                        <span className='chat-notifications ms-3'>
                          Notify customers about new messages</span>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>

          </article>
          <div className='notification-save-changes'>
            <button className='btn crm-btn'>Save Channge</button>
          </div>

        </div>
      </section>
    </>
  )
}

export default Notification;
