import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

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
                    <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade show active" id="general" role="tabpanel">
                           General
                      </div>
                      <div className="tab-pane fade" id="schedule" role="tabpanel">schedule</div>
                      <div className="tab-pane fade" id="tax" role="tabpanel">tax</div>
                      <div className="tab-pane fade" id="contact" role="tabpanel">contact</div>
                      <div className="tab-pane fade" id="payments" role="tabpanel">payments</div>
                      <div className="tab-pane fade" id="notifications" role="tabpanel">notifications</div>
                      <div className="tab-pane fade" id="roles" role="tabpanel">roles</div>
                      <div className="tab-pane fade" id="premium" role="tabpanel">premium</div>
                    </div>
                </div>
            </div>
      </main>
      
    </div>
  );
}
