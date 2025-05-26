import Image from "next/image";
import Link from "next/link";


function Footer() {
    return(
        <>
          <footer className="footer-divs01">
              <div className="row row-cols-1 row-cols-lg-2">
                  <div className="col">
                     <p> © 2025 , made with <span>
                          <Image src='/ft-copy.png' width={129} height={41} alt="slo"/>
                        </span>  </p>
                  </div>
                  <div className="col d-flex justify-content-end pe-4">
                      
                  </div>
              </div>
          </footer>
        </>
    );
    
}
export default Footer;