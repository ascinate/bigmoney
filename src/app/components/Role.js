"use client";
import { useState } from 'react'
import { GoDatabase } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { LuPencil } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { VscChromeMinimize } from "react-icons/vsc";
import { useToggleManager } from './custom-hook/useToggleManager.js'
import ToggleSwitch from './ToggleSwitch.js';
import EditUser from './EditUser.js';


function Role() {

  const { state, toggle } = useToggleManager();


  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [latePoint, setLatePoint] = useState(false);





  const hanldeFeatures = () => {
    setFeaturesOpen(!featuresOpen);
  };

  const handleLatePoint = () => {
    setLatePoint(!latePoint)
  }



  const [newTask, setNewTask] = useState([]);
  const [toggleMap, setToggleMap] = useState({});

  const handleAddTask = () => {
    const newId = Date.now();
    setNewTask([...newTask, { id: newId }]);
    setToggleMap((prev) => ({ ...prev, [newId]: false }));
  };

  const handleDeleteTask = (idToRemove) => {
    setNewTask(newTask.filter((div) => div.id !== idToRemove));
    setToggleMap((prev) => {
      const copy = { ...prev };
      delete copy[idToRemove];
      return copy;
    });
  };

  const handleToggle = (id) => {
    setToggleMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };




  return (
    <>
      <section className='roles-section'>
        <div className='wrapper'>
          <article className='default-bottom-section'>
            <div className=''>
              <h2 className='cm-head'> Default Roles </h2>
            </div>





            <div className='admin-bottom-row' onClick={hanldeFeatures} >
              <div className='roles-features-flex'>
                <div className='role-container-row'>
                  <div className='role-container-row-icon-div'>
                    <BsThreeDotsVertical />
                  </div>
                  <div>
                    <div className='role-container-row-text'>
                      <span className='administrator-span'>Administrator</span>
                      <span className='user-span'>1 user</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <LuPencil />
              </div>
            </div>
            <div>
              {featuresOpen && (
                <div>
                  <div className='admin-dropdown mb-4 p-0'>
                    <div className='admin-dropdown-flex'>
                      <div className='admin-dropdown-flex-left'>
                        <p className='mb-0'>User</p>
                      </div>
                      <div className='admin-dropdown-flex-right'>

                        <button data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" className='btn admin-dropdown-flex-right-card'>
                          <div className='admin-dropdown-flex-right-card-img'>
                            <p>IMG</p>
                          </div>
                          <div>
                            <p>admin</p>
                            <p>umakantsonwani@gmail.com</p>
                          </div>

                        </button>

                      </div>
                    </div>
                  </div>
                  <div className='admin-dropdown mb-4 p-0'>
                    <div className='admin-dropdown-flex'>
                      <div className='admin-dropdown-flex-left'>
                        <p>Allowed Records</p>
                      </div>
                      <div className='admin-dropdown-flex-right'>
                        <p>Users with Administrator role are allowed to perform all available actions on any agent, location and service records.</p>
                      </div>
                    </div>
                  </div>
                  <div className='admin-dropdown mb-4 p-0'>
                    <div className='admin-dropdown-flex'>
                      <div className='admin-dropdown-flex-left'>
                        <p>Permitted Actions</p>
                      </div>
                      <div className='admin-dropdown-flex-right'>
                        <p>Users with Administrator role are permitted to execute all available actions in the system.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </article>


          <article className='roles-bottom-section'>
            <div className='admin-bottom-row' onClick={handleLatePoint} >
              <div className='roles-features-flex'>
                <div className='role-container-row'>
                  <div className='role-container-row-icon-div'>
                    <BsThreeDotsVertical />
                  </div>
                  <div>
                    <div className='role-container-row-text'>
                      <span className='administrator-span'>LatePoint Agent
                      </span>
                      <span className='user-span'>0 users</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <LuPencil />
              </div>
            </div>
            <div>
              {latePoint && (
                <div>
                  <div className='admin-dropdown mb-4 p-0'>
                    <div className='admin-dropdown-flex'>
                      <div className='admin-dropdown-flex-left'>
                        <p>Users</p>
                      </div>
                      <div className='admin-dropdown-flex-right'>
                        <p>You have not assigned any WordPress users to this role. Create a new WP user or edit existing user and assign them a role called: LatePoint Agent</p>
                      </div>
                    </div>
                  </div>
                  <div className='admin-dropdown mb-4 p-0'>
                    <div className='admin-dropdown-flex'>
                      <div className='admin-dropdown-flex-left'>
                        <p>Allowed Records</p>
                      </div>
                      <div className='admin-dropdown-flex-right'>
                        <p>Users with Administrator role can execute permitted actions only on records that belong to a LatePoint agent they are connected to.</p>
                      </div>
                    </div>
                  </div>
                  <div className='admin-dropdown mb-4 p-0'>
                    <div className='admin-dropdown-flex'>
                      <div className='admin-dropdown-flex-left'>
                        <p>Permitted Actions</p>
                      </div>
                      <div className='admin-radio-botton-container col-lg-9 agents01'>

                        <div className='admin-dropdown-flex-right radio-botton-flex'>
                          <div className='agents-margin'>
                            <p>Agents</p>
                          </div>
                          <div className='radio-btn-width'>
                            <div>
                                <ToggleSwitch
                                  id="agentView"
                                  label="View"
                                  checked={state.agentView}
                                  onChange={() => toggle('agentView')}
                                />
                            </div>
                            <div>
                              <ToggleSwitch
                                id="agentDelete"
                                label="Delete"
                                checked={state.agentDelete}
                                onChange={() => toggle('agentDelete')}
                              />
                            </div>
                            <div>
                              <ToggleSwitch
                                id="agentEdit"
                                label="Edit"
                                checked={state.agentEdit}
                                onChange={() => toggle('agentEdit')}
                              />
                            </div>
                            <div>
                              <ToggleSwitch
                                id="servicesView"
                                label="View"
                                checked={state.servicesView}
                                onChange={() => toggle('servicesView')}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='admin-dropdown-flex-right radio-botton-flex'>
                          <div className='agents-margin'>
                            <p>Services</p>
                          </div>
                          <div className='radio-btn-width'>
                            <div>
                              <ToggleSwitch
                                  id="servicesDelete"
                                  label="Delete"
                                  checked={state.servicesDelete}
                                  onChange={() => toggle('servicesDelete')}
                                />
                            </div>
                            <div>
                              <ToggleSwitch
                                id="servicesCreate"
                                label="Create"
                                checked={state.servicesCreate}
                                onChange={() => toggle('servicesCreate')}
                              />
                            </div>
                            <div>
                              <ToggleSwitch
                                id="servicesEdit"
                                label="Edit"
                                checked={state.servicesEdit}
                                onChange={() => toggle('servicesEdit')}
                              />
                            </div>

                            <div>
                              <ToggleSwitch
                                id="locationView"
                                label="View"
                                checked={state.locationView}
                                onChange={() => toggle('locationView')}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='admin-dropdown-flex-right radio-botton-flex'>
                          <div className='agents-margin'>
                            <p>Locations</p>
                          </div>
                          <div className='radio-btn-width'>
                            <div>
                              <ToggleSwitch
                                id="locationDelete"
                                label="Delete"
                                checked={state.locationDelete}
                                onChange={() => toggle('locationDelete')}
                              />
                            </div>
                            <div>
                              <ToggleSwitch
                                id="locationCreate"
                                label="Create"
                                checked={state.locationCreate}
                                onChange={() => toggle('locationCreate')}
                              />
                            </div>
                            <div>
                              <ToggleSwitch
                                id="locationEdit"
                                label="Edit"
                                checked={state.locationEdit}
                                onChange={() => toggle('locationEdit')}
                              />
                            </div>

                            <div>
                              <ToggleSwitch
                                id="bookingView"
                                label="View"
                                checked={state.bookingView}
                                onChange={() => toggle('bookingView')}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='admin-dropdown-flex-right radio-botton-flex'>
                          <div className='agents-margin'>
                            <p>Bookings & Orders</p>
                          </div>
                          <div className='radio-btn-width'>
                            <div>
                              <ToggleSwitch
                                id="bookingDelete"
                                label="Delete"
                                checked={state.bookingDelete}
                                onChange={() => toggle('bookingDelete')}
                              />
                            </div>
                            <div>
                              <ToggleSwitch
                                id="bookingView"
                                label="View"
                                checked={state.bookingView}
                                onChange={() => toggle('bookingView')}
                              />
                            </div>
                            <div>
                              <ToggleSwitch
                                id="bookingCreate"
                                label="Create"
                                checked={state.bookingCreate}
                                onChange={() => toggle('bookingCreate')}
                              />
                            </div>

                            <div>
                              <ToggleSwitch
                                id="bookingEdit"
                                label="Edit"
                                checked={state.bookingEdit}
                                onChange={() => toggle('bookingEdit')}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='admin-dropdown-flex-right radio-botton-flex'>
                          <div className='agents-margin'>
                            <p>Customers</p>
                          </div>
                          <div className='radio-btn-width'>
                            <div>
                              <ToggleSwitch
                                id="customersView"
                                label="View"
                                checked={state.customersView}
                                onChange={() => toggle('customersView')}
                              />
                            </div>
                            <div>
                              <ToggleSwitch
                                id="customersDelete"
                                label="Delete"
                                checked={state.customersDelete}
                                onChange={() => toggle('customersDelete')}
                              />
                            </div>
                            <div>
                              <ToggleSwitch
                                id="customersCreate"
                                label="Create"
                                checked={state.customersCreate}
                                onChange={() => toggle('customersCreate')}
                              />
                            </div>

                            <div>
                              <ToggleSwitch
                                id="customersEdit"
                                label="Edit"
                                checked={state.customersEdit}
                                onChange={() => toggle('customersEdit')}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='admin-dropdown-flex-right radio-botton-flex'>
                          <div className='agents-margin'>
                            <p>Payments</p>
                          </div>
                          <div className='radio-btn-width'>
                            <div>
                              <ToggleSwitch
                                id="paymentView"
                                label="View"
                                checked={state.paymentView}
                                onChange={() => toggle('paymentView')}
                              />
                            </div>
                            <div>
                              <ToggleSwitch
                                id="paymentDelete"
                                label="Delete"
                                checked={state.paymentDelete}
                                onChange={() => toggle('paymentDelete')}
                              />
                            </div>
                            <div>
                               <ToggleSwitch
                                id="paymentCreate"
                                label="Create"
                                checked={state.paymentCreate}
                                onChange={() => toggle('paymentCreate')}
                              />
                            </div>

                            <div>
                               <ToggleSwitch
                                id="paymentEdit"
                                label="Edit"
                                checked={state.paymentEdit}
                                onChange={() => toggle('paymentEdit')}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='admin-dropdown-flex-right radio-botton-flex'>
                          <div className='agents-margin'>
                            <p>Invoice</p>
                          </div>
                          <div className='radio-btn-width'>
                            <div>
                              <ToggleSwitch
                                id="invoiceView"
                                label="View"
                                checked={state.invoiceView}
                                onChange={() => toggle('invoiceView')}
                              />
                            </div>
                            <div>
                              <ToggleSwitch
                                id="invoiceDelete"
                                label="Delete"
                                checked={state.invoiceDelete}
                                onChange={() => toggle('invoiceDelete')}
                              />
                            </div>
                            <div>
                              <ToggleSwitch
                                id="invoiceCreate"
                                label="Create"
                                checked={state.invoiceCreate}
                                onChange={() => toggle('invoiceCreate')}
                              />
                            </div>

                            <div>
                              <ToggleSwitch
                                id="invoiceEdit"
                                label="Edit"
                                checked={state.invoiceEdit}
                                onChange={() => toggle('invoiceEdit')}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='admin-dropdown-flex-right radio-botton-flex'>
                          <div className='agents-margin'>
                            <p>Activity Logs</p>
                          </div>
                          <div className='radio-btn-width'>
                            <div>
                              <ToggleSwitch
                                id="activityView"
                                label="View"
                                checked={state.activityView}
                                onChange={() => toggle('activityView')}
                              />
                            </div>
                            <div>
                              <ToggleSwitch
                                id="activityDelete"
                                label="Delete"
                                checked={state.activityDelete}
                                onChange={() => toggle('activityDelete')}
                              />
                            </div>
                            <div>
                              <ToggleSwitch
                                id="activityCreate"
                                label="Create"
                                checked={state.activityCreate}
                                onChange={() => toggle('activityCreate')}
                              />
                            </div>

                            <div>
                              <ToggleSwitch
                                id="activityEdit"
                                label="Edit"
                                checked={state.activityEdit}
                                onChange={() => toggle('activityEdit')}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='admin-dropdown-flex-right radio-botton-flex'>
                          <div className='agents-margin'>
                            <p>Chat</p>
                            <p className='agents-margin-sub-text'>Ability to send messages to customers (available with chat addon).</p>
                          </div>
                          <div className='radio-btn-width'>

                            <div>
                              <ToggleSwitch
                                id="chatEdit"
                                label="Edit"
                                checked={state.chatEdit}
                                onChange={() => toggle('chatEdit')}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='admin-dropdown-flex-right radio-botton-flex'>
                          <div className='agents-margin'>
                            <p>Resource Schedules</p>
                            <p className='agents-margin-sub-text'>Edit custom schedule of individual agent, location or service.</p>
                          </div>
                          <div className='radio-btn-width'>

                            <div>
                              <ToggleSwitch
                                id="resourceSchedulesEdit"
                                label="Edit"
                                checked={state.resourceSchedulesEdit}
                                onChange={() => toggle('resourceSchedulesEdit')}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='admin-dropdown-flex-right radio-botton-flex'>
                          <div className='agents-margin'>
                            <p>Settings</p>
                            <p className='agents-margin-sub-text'>Access to all settings pages, including general schedule and booking steps.</p>
                          </div>
                          <div className='radio-btn-width'>


                            <div>
                              <ToggleSwitch
                                id="settingsEdit"
                                label="Edit"
                                checked={state.settingsEdit}
                                onChange={() => toggle('settingsEdit')}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='admin-dropdown-flex-right radio-botton-flex'>
                          <div className='agents-margin'>
                            <p>Connections</p>
                            <p className='agents-margin-sub-text'>Ability to connect agents to services and locations.</p>
                          </div>
                          <div className='radio-btn-width'>


                            <div>
                              <ToggleSwitch
                                id="connectionsEdit"
                                label="Edit"
                                checked={state.connectionsEdit}
                                onChange={() => toggle('connectionsEdit')}
                              />
                            </div>
                          </div>
                        </div>

                        <div className='admin-dropdown-flex-right radio-botton-flex'>
                          <div className='agents-margin'>
                            <p>Coupons</p>
                          </div>
                          <div className='radio-btn-width'>
                            <div>
                              <ToggleSwitch
                                id="couponsView"
                                label="Edit"
                                checked={state.couponsView}
                                onChange={() => toggle('couponsView')}
                              />
                            </div>
                            <div>
                              <ToggleSwitch
                                id="couponsDelete"
                                label="Edit"
                                checked={state.couponsDelete}
                                onChange={() => toggle('couponsDelete')}
                              />
                            </div>
                            <div>
                              <ToggleSwitch
                                id="couponsCreate"
                                label="Edit"
                                checked={state.couponsCreate}
                                onChange={() => toggle('couponsCreate')}
                              />
                            </div>

                            <div>
                              <ToggleSwitch
                                id="couponsEdit"
                                  label="Edit"
                                  checked={state.couponsEdit}
                                onChange={() => toggle('couponsEdit')}
                              />
                            </div>
                          </div>
                        </div>
                       

                      </div>

                    </div>

                  </div>
                </div>
              )}
            </div>
          </article>
        </div>
      </section>
      <div className="save-change-botton-div">
           <button type='button'  className="btn save-change-botton">Save Change</button>
      </div>


      <section className='tax-section'>
        <div className='wrapper'>
          <article>
            <div className=''>
              <h2 className='cm-head'>Custom Roles</h2>
            </div>

            {newTask.map((div) => (
              <div key={div.id}>
                <div className='tax-section-row-one' onClick={() => handleToggle(div.id)}>
                  <div className='tax-section-row-one-left d-flex align-items-center'>
                    <div className='tax-section-row-one-left-icon-container'>
                      <BsThreeDotsVertical className='tax-section-row-one-left-icon' />
                    </div>
                    <div>
                      <span className='putnamcounty'>Putnam County</span>
                      <span className='percentage'> percentage</span>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteTask(div.id);
                    }}
                    className="btn"
                  >
                    <VscChromeMinimize />
                  </button>
                </div>


                {toggleMap[div.id] && (
                  <>
                    <div className='tax-section-toggle'>
                      <div className='tax-section-toggle-row-one d-flex align-items-center'>
                        <div className='tax-section-tax-name'>Tax Name</div>
                        <div className='tax-section-tax-input-div w-100'>
                          <input type="text" placeholder='text' className='form-control' />
                        </div>
                      </div>
                    </div>

                    <div className='tax-section-toggle'>
                      <div className='tax-section-toggle-row-one'>
                        <div className='tax-section-tax-type'>Tax Type</div>
                        <div className='tax-section-toggl-right-part'>
                          <select className="Custom-schedule-select">
                            <option value="singleday">Single Day</option>
                            <option value="datarange">Data Range</option>
                          </select>
                          <div>
                            <input type="text" placeholder='input' />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='tax-section-toggle'>
                      <div className='tax-section-toggle-row-three'>
                        <button>Delete</button>
                        <button className='saveTax'>Save Tax</button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}

          </article>

          <article>
            <div className='tax-section-addBtn' onClick={handleAddTask}>
              <IoMdAddCircle />
              Add Tax
            </div>
          </article>
        </div>
      </section>

      <EditUser/>
      
    </>
  )
}

export default Role;
