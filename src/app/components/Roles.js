"use client";
import { useState } from 'react'
import { GoDatabase } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { LuPencil } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { VscChromeMinimize } from "react-icons/vsc";


function Roles() {


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
            {/* head */}
            <div className='roles-section-header'>
              <h3 className='default-heading'>DEFAULT ROLES</h3>
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
                  <div className='admin-dropdown'>
                    <div className='admin-dropdown-flex'>
                      <div className='admin-dropdown-flex-left'>
                        <p>User</p>
                      </div>
                      <div className='admin-dropdown-flex-right'>
                        <div className='admin-dropdown-flex-right-card'>
                          <div className='admin-dropdown-flex-right-card-img'>
                            <p>IMG</p>
                          </div>
                          <div>
                            <p>admin</p>
                            <p>umakantsonwani@gmail.com</p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='admin-dropdown'>
                    <div className='admin-dropdown-flex'>
                      <div className='admin-dropdown-flex-left'>
                        <p>Allowed Records</p>
                      </div>
                      <div className='admin-dropdown-flex-right'>
                        <p>Users with "Administrator" role are allowed to perform all available actions on any agent, location and service records.</p>
                      </div>
                    </div>
                  </div>
                  <div className='admin-dropdown'>
                    <div className='admin-dropdown-flex'>
                      <div className='admin-dropdown-flex-left'>
                        <p>Permitted Actions</p>
                      </div>
                      <div className='admin-dropdown-flex-right'>
                        <p>Users with "Administrator" role are permitted to execute all available actions in the system.</p>
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
                  <div className='admin-dropdown'>
                    <div className='admin-dropdown-flex'>
                      <div className='admin-dropdown-flex-left'>
                        <p>Users</p>
                      </div>
                      <div className='admin-dropdown-flex-right'>
                        <p>You have not assigned any WordPress users to this role. Create a new WP user or edit existing user and assign them a role called: "LatePoint Agent"</p>
                      </div>
                    </div>
                  </div>
                  <div className='admin-dropdown'>
                    <div className='admin-dropdown-flex'>
                      <div className='admin-dropdown-flex-left'>
                        <p>Allowed Records</p>
                      </div>
                      <div className='admin-dropdown-flex-right'>
                        <p>Users with "Administrator" role can execute permitted actions only on records that belong to a LatePoint agent they are connected to.</p>
                      </div>
                    </div>
                  </div>
                  <div className='admin-dropdown'>
                    <div className='admin-dropdown-flex'>
                      <div className='admin-dropdown-flex-left'>
                        <p>Permitted Actions</p>
                      </div>
                      <div className='admin-radio-botton-container'>
                        {/* LatePoint Agent Permitted Actions section */}

                        <div className='admin-dropdown-flex-right radio-botton-flex'>
                          <div className='agents-margin'>
                            <p>Agents</p>
                          </div>
                          {/* radio button */}
                          <div className='radio-btn-width'>
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>View</span>
                            </div>
                            {/* radio button */}
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Delete</span>
                            </div>
                            {/* radio button */}
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Create</span>
                            </div>
                            {/* radio button */}

                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Edit</span>
                            </div>
                          </div>
                        </div>
                        {/* LatePoint Agent Permitted Actions section */}
                        <div className='admin-dropdown-flex-right radio-botton-flex'>
                          <div className='agents-margin'>
                            <p>Services</p>
                          </div>
                          {/* radio button */}
                          <div className='radio-btn-width'>
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>View</span>
                            </div>
                            {/* radio button */}
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Delete</span>
                            </div>
                            {/* radio button */}
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Create</span>
                            </div>
                            {/* radio button */}

                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Edit</span>
                            </div>
                          </div>
                        </div>
                        {/* LatePoint Agent Permitted Actions section */}
                        <div className='admin-dropdown-flex-right radio-botton-flex'>
                          <div className='agents-margin'>
                            <p>Locations</p>
                          </div>
                          {/* radio button */}
                          <div className='radio-btn-width'>
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>View</span>
                            </div>
                            {/* radio button */}
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Delete</span>
                            </div>
                            {/* radio button */}
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Create</span>
                            </div>
                            {/* radio button */}

                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Edit</span>
                            </div>
                          </div>
                        </div>
                        {/* LatePoint Agent Permitted Actions section */}
                        <div className='admin-dropdown-flex-right radio-botton-flex'>
                          <div className='agents-margin'>
                            <p>Bookings & Orders</p>
                          </div>
                          {/* radio button */}
                          <div className='radio-btn-width'>
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>View</span>
                            </div>
                            {/* radio button */}
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Delete</span>
                            </div>
                            {/* radio button */}
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Create</span>
                            </div>
                            {/* radio button */}

                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Edit</span>
                            </div>
                          </div>
                        </div>{/* LatePoint Agent Permitted Actions section */}
                        <div className='admin-dropdown-flex-right radio-botton-flex'>
                          <div className='agents-margin'>
                            <p>Customers</p>
                          </div>
                          {/* radio button */}
                          <div className='radio-btn-width'>
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>View</span>
                            </div>
                            {/* radio button */}
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Delete</span>
                            </div>
                            {/* radio button */}
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Create</span>
                            </div>
                            {/* radio button */}

                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Edit</span>
                            </div>
                          </div>
                        </div>
                        {/* LatePoint Agent Permitted Actions section */}
                        <div className='admin-dropdown-flex-right radio-botton-flex'>
                          <div className='agents-margin'>
                            <p>Payments</p>
                          </div>
                          {/* radio button */}
                          <div className='radio-btn-width'>
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>View</span>
                            </div>
                            {/* radio button */}
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Delete</span>
                            </div>
                            {/* radio button */}
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Create</span>
                            </div>
                            {/* radio button */}

                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Edit</span>
                            </div>
                          </div>
                        </div>
                        {/* LatePoint Agent Permitted Actions section */}
                        <div className='admin-dropdown-flex-right radio-botton-flex'>
                          <div className='agents-margin'>
                            <p>Invoice</p>
                          </div>
                          {/* radio button */}
                          <div className='radio-btn-width'>
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>View</span>
                            </div>
                            {/* radio button */}
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Delete</span>
                            </div>
                            {/* radio button */}
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Create</span>
                            </div>
                            {/* radio button */}

                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Edit</span>
                            </div>
                          </div>
                        </div>
                        {/* LatePoint Agent Permitted Actions section */}
                        <div className='admin-dropdown-flex-right radio-botton-flex'>
                          <div className='agents-margin'>
                            <p>Activity Logs</p>
                          </div>
                          {/* radio button */}
                          <div className='radio-btn-width'>
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>View</span>
                            </div>
                            {/* radio button */}
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Delete</span>
                            </div>
                            {/* radio button */}
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Create</span>
                            </div>
                            {/* radio button */}

                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Edit</span>
                            </div>
                          </div>
                        </div>
                        {/* LatePoint Agent Permitted Actions section */}
                        <div className='admin-dropdown-flex-right radio-botton-flex'>
                          <div className='agents-margin'>
                            <p>Chat</p>
                            <p className='agents-margin-sub-text'>Ability to send messages to customers (available with chat addon).</p>
                          </div>
                          {/* radio button */}
                          <div className='radio-btn-width'>

                            {/* radio button */}

                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Edit</span>
                            </div>
                          </div>
                        </div>
                        {/* LatePoint Agent Permitted Actions section */}
                        <div className='admin-dropdown-flex-right radio-botton-flex'>
                          <div className='agents-margin'>
                            <p>Resource Schedules</p>
                            <p className='agents-margin-sub-text'>Edit custom schedule of individual agent, location or service.</p>
                          </div>
                          {/* radio button */}
                          <div className='radio-btn-width'>

                            {/* radio button */}

                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Edit</span>
                            </div>
                          </div>
                        </div>
                        {/* LatePoint Agent Permitted Actions section */}
                        <div className='admin-dropdown-flex-right radio-botton-flex'>
                          <div className='agents-margin'>
                            <p>Settings</p>
                            <p className='agents-margin-sub-text'>Access to all settings pages, including general schedule and booking steps.</p>
                          </div>
                          {/* radio button */}
                          <div className='radio-btn-width'>

                            {/* radio button */}

                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Edit</span>
                            </div>
                          </div>
                        </div>
                        {/* LatePoint Agent Permitted Actions section */}
                        <div className='admin-dropdown-flex-right radio-botton-flex'>
                          <div className='agents-margin'>
                            <p>Connections</p>
                            <p className='agents-margin-sub-text'>Ability to connect agents to services and locations.</p>
                          </div>
                          {/* radio button */}
                          <div className='radio-btn-width'>

                            {/* radio button */}

                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Edit</span>
                            </div>
                          </div>
                        </div>

                        {/* LatePoint Agent Permitted Actions section */}
                        <div className='admin-dropdown-flex-right radio-botton-flex'>
                          <div className='agents-margin'>
                            <p>Coupons</p>
                          </div>
                          {/* radio button */}
                          <div className='radio-btn-width'>
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>View</span>
                            </div>
                            {/* radio button */}
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Delete</span>
                            </div>
                            {/* radio button */}
                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Create</span>
                            </div>
                            {/* radio button */}

                            <div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>

                              </label>
                              <span>Edit</span>
                            </div>
                          </div>
                        </div>
                        <div className="save-change-botton-div">
                          <button className="save-change-botton">Save Change</button>
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


      <section className='tax-section'>
        <div className='wrapper'>
          <article>
            {/* heading */}
            <div className='tax-section-header'>
              <h3 className='tax-section-heading'>CUSTOM ROLES</h3>
            </div>

            {/* Tasks */}
            {newTask.map((div) => (
              <div key={div.id}>
                <div className='tax-section-row-one' onClick={() => handleToggle(div.id)}>
                  <div className='tax-section-row-one-left'>
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
                    className="bg-red-500 text-white px-3 py-1 rounded ml-4"
                  >
                    <VscChromeMinimize />
                  </button>
                </div>


                {toggleMap[div.id] && (
                  <>
                    <div className='tax-section-toggle'>
                      <div className='tax-section-toggle-row-one'>
                        <div className='tax-section-tax-name'>Tax Name</div>
                        <div className='tax-section-tax-input-div'>
                          <input type="text" placeholder='text' className='tax-section-tax-input' />
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
              <button>Add Tax</button>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default Roles;
