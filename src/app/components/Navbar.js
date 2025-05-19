import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiClock , FiInbox } from "react-icons/fi";

function Navbar() {
    return(
        <>
          <div className="search-sections01 w-100 float-start">
              <div className="row justicy-content-between">
                 <div className="col-lg-5">
                     <div className="form-group search-list d-flex align-items-center">
                        <FiSearch />
                        <input type="text" className="form-control ms-2" placeholder="Search"/>
                     </div>
                 </div>
                 <div className="col-lg-7 d-flex align-items-center justify-content-end">
                      <Link href="/"> <IoChatbubbleOutline /> </Link>
                      <Link href="/"> <FiClock /> </Link>
                      <Link href="/"> <FiInbox /> </Link>
                      <Link href="/" className="btn cm-btnop"> + New Booking </Link>
                 </div>
              </div>
          </div>
        </>
    );
    
}
export default Navbar;