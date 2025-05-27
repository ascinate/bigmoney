import Link from "next/link";

function EditUser() {

  return (
    <>
      <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Edit User</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                
                 <div className="user-div-mains d-inline-block w-100">
                     
                 </div>
                
            </div>
     </div>
 
    </>
  )
}

export default EditUser;
