import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
function Communications() {

    const addons = [
        {
            id: 1,
            title: "Payments WooCommerce",
            image: "/twilio.png",
            description: "Accept payments on your site using WooCommerce payments",
            latest: "1.2.1",
            installed: "1.2.0",
        },
        {
            id: 1,
            title: "Payments WooCommerce",
            image: "/twilio.png",
            description: "Accept payments on your site using WooCommerce payments",
            latest: "1.2.1",
            installed: "1.2.0",
        },
      

    ];
  return (
 <>
 
 <div className="row">
                                                {addons.map((addon) => (
                                                    <div className="col-lg-4" key={addon.id}>
                                                        <div className="card my-5">
                                                            <div className="card-body">
                                                                <Image
                                                                    src={addon.image}
                                                                    alt={addon.title}
                                                                    width={300}
                                                                    height={250}
                                                                    className="card-img-top"
                                                                />

                                                                <h5 className="card-title">
                                                                    {addon.title} <FaExternalLinkAlt className="add-on-pack" />
                                                                </h5>
                                                                <p className="card-text">{addon.description}</p>

                                                                <Link href="#" className="add-on-pack">
                                                                    Latest: {addon.latest}
                                                                </Link>
                                                                <br />
                                                                <Link href="#" className="add-on-pack">
                                                                    Installed: {addon.installed}
                                                                </Link>
                                                            </div>

                                                            <div className="card-btn-section">
                                                                <button className="installNow-btn">Install Now</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
 </>
  )
}

export default Communications;
