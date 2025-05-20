import Image from "next/image";
import Link from "next/link";
import { FaFacebookF , FaTwitter , FaGithub, FaGoogle } from "react-icons/fa";

export default function Home() {
  return (
    <div className="full-body-parts login-page015 position-relative">
      <main className="d-block ms-lg-auto content-parts">
        <Link href="/settings" className="logo-login">
           <Image src="/logo.png" width={173} height={37} alt="logo"/>
        </Link>
        <figure>
           <Image src='/auth-login-illustration-light-2.png' width={886} height={857} alt="l"/>
        </figure>
           <div className="form-div015-logins bg-white">
                <h2> Welcome to Big Money Booking! 👋 </h2>
                <p> Please sign-in to your account and start the adventure </p>
                <div className="form-sections01 mt-4">
                 
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="Email or username"/>
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                      <label for="floatingPassword">Password</label>
                    </div>
                 
                   <div className="form-group remooter d-flex align-items-center justify-content-between w-100 mt-4">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                          Remember Me
                        </label>
                      </div>
                      <Link href='/'>Forgot Password?</Link>
                   </div>

                   <Link href='/settings' className="btn btn-signup comon-btn mt-4 text-center w-100 d-block"> Sign in </Link>

                   <p className="text-center platform-text mt-4"> New on our platform?
                    <Link href="/"> Create an account </Link> </p>
                   <p className="or-text-p position-relative w-100 text-center mx-auto d-table">
                    <span className="bg-white mx-auto d-table px-3 py-2 mx-auto mt-4">  or </span></p>
                   <div className="scoial-list01 mt-0">
                      <ul className="d-flex align-items-center justify-content-center">
                         <li>
                            <button type="button" className="btn btn-face"> <FaFacebookF/> </button>
                         </li>
                         <li>
                            <button type="button" className="btn btn-iw"> <FaTwitter/> </button>
                         </li>
                         <li>
                            <button type="button" className="btn btn-git"> <FaGithub/> </button>
                         </li>
                         <li>
                            <button type="button" className="btn btn-gog"> <FaGoogle/> </button>
                         </li>
                      </ul>
                   </div>
                </div>
           </div>
      </main>
      
    </div>
  );
}
