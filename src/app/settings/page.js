
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Payments from "../components/Payments";
import GeneralSettings from "../components/GeneralSettings";
import Footer from "../components/Footer";
import Schedule from "../components/Schedule";


export default function Home() {
  return (
    <div className="full-body-parts">
      <Sidebar/>
      <main className="d-block ms-lg-auto content-parts d-block">
            <Navbar/>

            <div className="home-settings float-start w-100">
                <h3 className="comon-head"> Settings </h3>
                <div className="settings-tabs01 d-block w-100 mt-4">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#general"
                         type="button" role="tab"> General </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#schedule" 
                        type="button" role="tab"> Schedule </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link"  data-bs-toggle="tab" data-bs-target="#tax" 
                        type="button" role="tab"> Tax </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#contact" 
                        type="button" role="tab"> Booking Form </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#payments" 
                        type="button" role="tab"> Payments </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#notifications" 
                        type="button" role="tab"> Notifications </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#roles" 
                        type="button" role="tab"> Roles </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#premium" 
                        type="button" role="tab"> Premium Features </button>
                      </li>
                    </ul>
                    <div className="tab-content pt-3" id="myTabContent">
                      <div className="tab-pane fade show active" id="general" role="tabpanel">
                          <GeneralSettings/>
                      </div>
                      <div className="tab-pane fade" id="schedule" role="tabpanel">
                          <Schedule/>
                      </div>
                      <div className="tab-pane fade" id="tax" role="tabpanel">
                         
                      </div>
                      <div className="tab-pane fade" id="contact" role="tabpanel">
                          
                      </div>
                      <div className="tab-pane fade" id="payments" role="tabpanel">
                         <Payments/>
                      </div>
                      <div className="tab-pane fade" id="notifications" role="tabpanel">
                        
                      </div>
                      <div className="tab-pane fade" id="roles" role="tabpanel">
                           
                      </div>
                      <div className="tab-pane fade" id="premium" role="tabpanel">
                        
                      </div>
                    </div>
                </div>
            </div>
      </main>
      <Footer/>
      
    </div>
  );
}
