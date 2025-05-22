import Image from "next/image";
import { FiSearch ,FiClock , FiInbox , FiUser } from "react-icons/fi";
import Link from "next/link";
import { IoChatbubbleOutline } from "react-icons/io5";
import { MdOutlineChatBubbleOutline , MdLogout } from "react-icons/md";
import { LuSettings , LuCircleDollarSign } from "react-icons/lu";
import { FaRegFileLines } from "react-icons/fa6";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import ActiveLink from "./ActiveLink";

function Navbar() {

      const mianmenu = [
             { id: 1, title: 'Home' , href: '/'  },
             { id: 2, title: 'About' , href: '/about'  },
       ];

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
                 <div className="col-lg-7 rt-oio-div d-flex align-items-center justify-content-end">
                      <Link href="/"> <MdOutlineChatBubbleOutline /> </Link>
                      <Link href="/"> <FiClock /> </Link>
                      <Link href="/"> <FiInbox /> </Link>

                      <div className="dropdown position-relative">
                        <button className="btn userpic p-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                           <Image src="/1.png" width={200} height={200} alt="sm"/>
                        </button>



                        
                        <ul className="dropdown-menu drops-menus01" aria-labelledby="dropdownMenuButton1">
                            <li className="d-flex align-items-center">
                               <Link href='/' className="d-flex align-items-center">
                                   <figure className="m-0">
                                        <Image src="/1.png" width={200} height={200} alt="sm"/>
                                   </figure>
                                   <div className="user-textr">
                                        <h5> John Doe 
                                            <span className="d-block"> Admin </span>
                                        </h5>
                                   </div>
                               </Link>
                            </li>
                            <li className="crm-lisk01">
                                <Link className="dropdown-item" href="#">
                                  <FiUser/> My Profile   
                               </Link></li>

                            <li className="crm-lisk01">
                                <Link href="/settings">
                                  <LuSettings /> Settings  
                               </Link>
                               
                            </li>
                            <li className="crm-lisk01 position-relative">
                                <Link className="dropdown-item" href="#">
                                  <FaRegFileLines /> Billing Plan  
                                  <span className="no-plas">10</span>
                               </Link>
                               
                            </li>
                            <li>
                                <hr/>
                            </li>
                            <li className="crm-lisk01">
                                <Link className="dropdown-item" href="#">
                                  <LuCircleDollarSign /> Pricing  
                               </Link>
                               
                            </li>
                            <li className="crm-lisk01">
                                <Link className="dropdown-item" href="#">
                                  <AiOutlineQuestionCircle /> FAQ 
                               </Link>
                               
                            </li>
                            <li>
                                <button type="button" className="btn btn-logout mx-auto"> Logout <MdLogout/> </button>
                            </li>
                            
                        </ul>
                       </div>
                     
                 </div>
              </div>
          </div>
        </>
    );
    
}
export default Navbar;