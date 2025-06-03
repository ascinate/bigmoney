
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Payments from "../components/Payments";
import GeneralSettings from "../components/GeneralSettings";
import Footer from "../components/Footer";
import Schedule from "../components/Schedule";
import Tax from "../components/Tax";
import BookingForm from "../components/BookingForm";
import Role from "../components/Role";
import PremiumFeatures from "../components/PremiumFeatures";
import Notification from "../components/Notification";
import { TfiDownload } from "react-icons/tfi";
import CustomerProfileModal from '../components/CustomerProfileModal';
import Image from "next/image";
import CompletedBtn from '../components/CompletedBtn';

export default function Page() {
  return (
    <div className="full-body-parts">
      <Sidebar/>
      <main className="d-block ms-lg-auto content-parts d-block">
            <Navbar/>
            <div className="home-settings float-start w-100">
                 <div className='calendar-tab'>
                    <div className='calender-container'>
                        <div className="container">
                            <div className='row'>
                                <div className='col-lg-12 '>
                                    <div className='calendar'>
                                        <div className='order-row'>
                                            <div>
                                                <h2>Order</h2>
                                                <p>Showing 1-3 of 3</p>
                                            </div>
                                            <a href='/' download className='csvbtn'> <TfiDownload /> Download .csv</a>
                                        </div>
                                        <div className='table-row'>
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">id</th>
                                                        <th scope="col">Customer</th>
                                                        <th scope="col">total</th>
                                                        <th scope="col">status</th>
                                                        <th scope="col">payment status</th>
                                                        <th scope="col">Fulfillment Statu</th>
                                                        <th scope="col">conformation</th>
                                                        <th scope="col">date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row"><input type="number" placeholder='id' /></th>
                                                        <td><input type="text" placeholder='customer name' /></td>
                                                        <td><input type="text" placeholder='total' /></td>
                                                        <td>
                                                            <select name="" id="">
                                                                <option value="">Show All</option>
                                                                <option value="">Open</option>
                                                                <option value="">Cancelled</option>
                                                                <option value="" className=''>Complete</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <select name="" id="">
                                                                <option value="">Show All</option>
                                                                <option value="">not paid</option>
                                                                <option value="">partially paid</option>
                                                                <option value="">fully paid</option>
                                                                <option value="">processing</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <select name="" id="">
                                                                <option value="">Show All</option>
                                                                <option value="">not fulfilled</option>
                                                                <option value="">fulfilled</option>
                                                                <option value="">partially fulfilled</option>

                                                            </select>
                                                        </td>
                                                        <td>
                                                            <input type="text" placeholder='conformation' />
                                                        </td>
                                                        <td>
                                                            <input type="date" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>
                                                            <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample2" role="button" aria-controls="offcanvasExample">
                                                                Martha Stewart
                                                            </a>
                                                            <CustomerProfileModal />
                                                        </td>
                                                        <td>$190.00</td>
                                                        <td>

                                                            <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                                                completed
                                                            </a>
                                                            <CompletedBtn />
                                                        </td>
                                                        <td><button className=''>Not paid</button></td>
                                                        <td><button className=''>Fullfilled</button></td>
                                                        <td>UHNJL7P</td>
                                                        <td>2025-05-21 13:23:18</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Martha Stewart</td>
                                                        <td>$212.00</td>
                                                        <td><button className='table-btn'>completed</button></td>
                                                        <td><button className=''>Not paid</button></td>
                                                        <td><button className=''>Fullfilled</button></td>
                                                        <td>V2ULNRT</td>
                                                        <td>2025-05-21 13:23:18</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Mike Jones</td>
                                                        <td>$190.00</td>
                                                        <td><button className='table-btn'>completed</button></td>
                                                        <td><button className=''>Not paid</button></td>
                                                        <td><button className=''>Fullfilled</button></td>
                                                        <td>HZMT442</td>
                                                        <td>2025-05-20 21:00:56</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className='page-row'>
                                            <div>

                                                <p>Showing 1-3 of 3</p>
                                            </div>
                                            <select name="" id="">
                                                <option>1</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </main>
      <Footer/>
      
    </div>
  );
}
