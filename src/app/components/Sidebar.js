'use client';
import { useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';



function Sidebar() {
    const handleClick = () => {
        document.body.classList.add('slider-off');
      };
    const mianmenu = [
        { id: 1, title: 'Dashboard' , link: '/', icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M6 19H18V9.15745L12 3.7029L6 9.15745V19ZM19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM7.5 13H9.5C9.5 14.3807 10.6193 15.5 12 15.5C13.3807 15.5 14.5 14.3807 14.5 13H16.5C16.5 15.4853 14.4853 17.5 12 17.5C9.51472 17.5 7.5 15.4853 7.5 13Z"></path></svg>,  },
        { id: 2, title: 'About Us' , link: '/',  icon:'',  },
        { id: 3, title: 'Blog' , link: '/',  icon:'', },
    ];
    return(
        <>
         <aside className="slider-bars float-start position-fixed">
            <Image src='/logo.png' width={173} height={37} alt="logo"/>
            <div className='menu-list'>

                               
                <ul>
                   
                   {mianmenu.map((page) => (
                        <li key={page.id}>
                            <Link href={page.link} className='d-flex align-items-center'> {page.icon} {page.title} <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(0,0,0,1)"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg> </span> </Link>
                        </li>
                   ))}
                </ul>
            </div>
                <button type='button' className='btn' onClick={handleClick}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.47365 11.7183C8.11707 12.0749 8.11707 12.6531 8.47365 13.0097L12.071 16.607C12.4615 16.9975 12.4615 17.6305 12.071 18.021C11.6805 18.4115 11.0475 18.4115 10.657 18.021L5.83009 13.1941C5.37164 12.7356 5.37164 11.9924 5.83009 11.5339L10.657 6.707C11.0475 6.31653 11.6805 6.31653 12.071 6.707C12.4615 7.09747 12.4615 7.73053 12.071 8.121L8.47365 11.7183Z" fill-opacity="0.9"></path>
                            <path d="M14.3584 11.8336C14.0654 12.1266 14.0654 12.6014 14.3584 12.8944L18.071 16.607C18.4615 16.9975 18.4615 17.6305 18.071 18.021C17.6805 18.4115 17.0475 18.4115 16.657 18.021L11.6819 13.0459C11.3053 12.6693 11.3053 12.0587 11.6819 11.6821L16.657 6.707C17.0475 6.31653 17.6805 6.31653 18.071 6.707C18.4615 7.09747 18.4615 7.73053 18.071 8.121L14.3584 11.8336Z" fill-opacity="0.4"></path>
                        </svg>
                </button>
         </aside>
        </>
    );
    
}
export default Sidebar;