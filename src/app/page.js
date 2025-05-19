import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="full-body-parts login-page015 position-relative">
      <main className="d-block ms-lg-auto content-parts">
        <Link href="/" className="logo-login">
           <Image src="/logo.png" width={173} height={37} alt="logo"/>
        </Link>
        {/* <figure>
           <Image src='/auth-login-illustration-light.png' width={1392} height={1346} alt="l"/>
        </figure> */}
           <div className="form-div015-logins bg-white">
                <h2> Welcome to Materialize! 👋 </h2>
                <p> Please sign-in to your account and start the adventure </p>
                <div className="form-sections01 mt-4">
                   <div className="form-group">
                       <input type="text" className="form-control" placeholder="Email or username"/>
                   </div>
                  <div className="form-group mt-4">
                       <input type="text" className="form-control" placeholder="Password"/>
                   </div>
                   <div className="form-group d-flex align-items-center justify-content-between w-100">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                          Default checkbox
                        </label>
                      </div>
                      <Link href='/'>Forgot Password?</Link>
                   </div>
                   <p className="text-center"> New on our platform? Create an account </p>
                </div>
           </div>
      </main>
      
    </div>
  );
}
