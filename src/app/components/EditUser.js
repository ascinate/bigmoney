import Link from "next/link";
import { RiEditBoxLine } from "react-icons/ri";

function EditUser() {

  return (
    <>
      <div className="offcanvas offcanvas-end new-accounts" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Edit User</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="user-div-mains d-inline-block w-100">
            <div className="admin-container">
              <div className="admin-photo">IMG</div>
              <div className="admin-text">
                <h3>admin</h3>
                <p className="role-admin-email">umakantsonwani@gmail.com</p>
                <span className="administrator">Administrator</span> <span className="admin-wp "> WP User <RiEditBoxLine /></span>
              </div>
            </div>

            <div className="allowedrecords-container">
              <div className="allowedrecords">
                <h3 className="allowedrecords-title">Allowed Records</h3>
              </div>
              <div className="allowedrecords-text">
                <p >This user has &#34;Administrator&#34; role and can access all records</p>
              </div>
            </div>
            <div className="allowedrecords-container">
              <div className="allowedrecords">
                <h3 className="allowedrecords-title">Permitted Actions</h3>
              </div>
              <div className="allowedrecords-text">
                <p >Permitted actions are defined by user&#39;s role settings.</p>
              </div>
            </div>
            <div className="admin-btn-div">

              <button type="button" className="adminSaveChanges" aria-label="Close">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
 
    </>
  )
}

export default EditUser;
