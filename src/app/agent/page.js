'use client'
import * as React from 'react';
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
import { DataGrid } from '@mui/x-data-grid';
import Link from 'next/link';
import { MdElectricBolt } from 'react-icons/md';
import { FaPencilAlt } from "react-icons/fa";
import { HiMiniPlusCircle } from "react-icons/hi2";


const rows = [
    { id: 1, name: 'Johnathan smith', total: "$ " + 267.00, paymentstatus: "not paid",  fulfillmentstatus: "not fulfilled", status: "open", confromation: "XW9F5LU", date: "2022-01-01" },
    { id: 2, name: 'Marth stuart', total: "$ " + 456.00, paymentstatus: "not paid",  fulfillmentstatus: "not fulfilled", status: "open", confromation: "UHNJL7P", date: "2022-01-01" },
    { id: 3, name: 'Martha Stewart', total: "$ " + 672.00, paymentstatus: "not paid",  fulfillmentstatus: "not fulfilled",status: "open", confromation: "4NWN4V4", date: "2022-01-01" },
    { id: 4, name: 'Martha Stewart', total: "$ " + 712.00, paymentstatus: "not paid", fulfillmentstatus: "not fulfilled", status: "completed", confromation: "XW9F5LU", date: "2022-01-01" },
    { id: 5, name: 'Mike Jones', total: "$ " + 912.00, paymentstatus: "not paid", fulfillmentstatus: "not fulfilled", status: "open", confromation: "4NWN4V4", date: "2022-01-01" },
    { id: 5, name: 'Mike Jones', total: "$ " + 234.00, paymentstatus: "not paid", fulfillmentstatus: "not fulfilled", status: "open", confromation: "4NWN4V4", date: "2022-01-01" },

];

export default function Page() {
    const [rowData, setRowData] = React.useState(rows);
    const [selectedRow, setSelectedRow] = React.useState(null);


    const processRowUpdate = (newRow) => {
        const updatedRows = rowData.map((row) =>
            row.id === newRow.id ? newRow : row
        );
        setRowData(updatedRows);
        return newRow;
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'customername',
            headerName: 'Customer Name',
            width: 200,
            sortable: false,
            filterable: true,
            editable: true,
            renderCell: (params) => (
                <Link
                    className="customername"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample2"
                    role="button"
                    aria-controls="offcanvasExample"
                    onClick={() => setSelectedRow(params.row)}
                >
                    {params.row.name}
                </Link>


            ),
        },
        { field: 'total', headerName: 'Total', width: 130, editable: true },
        {
            field: 'status',
            headerName: 'status',
            width: 200,
            sortable: false,
            filterable: false,
            editable: true,

            renderCell: (params) => (
                <Link
                    className="status-btn"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample2"
                    role="button"
                    aria-controls="offcanvasExample"
                    onClick={() => setSelectedRow(params.row)}
                >
                    {params.row.status}
                </Link>
            ),
        },
        {
            field: 'paymentstatus',
            headerName: 'Payment Status',
            width: 200,
            sortable: false,
            filterable: false,
            editable: true,
            renderCell: (params) => (
                <Link
                    className="status-btn"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasExample"
                    onClick={() => setSelectedRow(params.row)}
                >
                    {params.row.paymentstatus}
                </Link>
            ),
        },
        {
            field: 'fulfillmentstatus',
            headerName: 'Fulfillment Status',
            width: 200,
            sortable: false,
            filterable: false,
            editable: true,
            renderCell: (params) => (
                <Link
                    className="status-btn"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasExample"
                    onClick={() => setSelectedRow(params.row)}
                >
                    {params.row.fulfillmentstatus}
                </Link>
            ),
        },
        { field: 'confromation', headerName: 'Conformation', width: 130, editable: true },
        { field: 'date', headerName: 'Date', width: 130, editable: true },
    ];
  return (
    <div className="full-body-parts">
      <Sidebar/>
      <main className="d-block ms-lg-auto content-parts d-block">
            <Navbar/>
            <div className="home-settings float-start w-100">
                 <div className='calendar-tab'>
                    
                    <div className='calender-container mt-4'>
                                <div className='calendar ca-agents'>
                                    <h2>Agents </h2>
                                    <div className="row row-cols-1 g-lg-4 mt-2 row-cols-lg-3">
                                        <div className="col">
                                            <div className="card agents-card">
                                                <MdElectricBolt className="card-hover-icon" />
                                                <div className='d-flex gap-2 justify-content-around'>
                                                    <div>
                                                        <Image
                                                            src="/map010.jpg"
                                                            width={50}
                                                            height={50}
                                                            alt="Picture of the author"
                                                            className='picture-author' />
                                                    </div>
                                                    <div>
                                                        <h6 className='picture-author-name'>Lynn Nicely</h6>
                                                        <p className='picture-author-phone'>+19048267288</p>
                                                    </div>
                                                </div>

                                                <div className="card-body">
                                                    <div className='daydiv d-flex justify-content-around'>
                                                        <p className='dayActivity'>Mon</p>
                                                        <p className='dayActivity'>Tue</p>
                                                        <p className='dayActivity'>Wed</p>
                                                        <p className='dayActivity'>Thu</p>
                                                        <p className='dayActivity'>Fri</p>
                                                        <p className='dayActivity'>Sat</p>
                                                        <p className='dayActivity'>Sun</p>
                                                    </div>
                                                    <div className='d-flex justify-content-between align-items-center'>
                                                        <div>
                                                            <span className='gray-color'>Today</span>
                                                            <span className='badge mx-2'>On Duty</span>
                                                            <p className='my-2'>08:00am - 05:00pm</p>
                                                        </div>
                                                        <div className='text-center today-div'>
                                                            <p className='gray-color'>Booking</p>
                                                            <p className='zerosize'>0</p>
                                                        </div>
                                                    </div>
                                                    <button className='edit-btn'><FaPencilAlt className='mx-2' />Edit Agent</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card agents-card">
                                                <MdElectricBolt className="card-hover-icon" />
                                                <div className='d-flex gap-2 justify-content-around'>
                                                    <div>
                                                        <Image
                                                            src="/map010.jpg"
                                                            width={50}
                                                            height={50}
                                                            alt="Picture of the author"
                                                            className='picture-author' />
                                                    </div>
                                                    <div>
                                                        <h6 className='picture-author-name'>Lynn Nicely</h6>
                                                        <p className='picture-author-phone'>+19048267288</p>
                                                    </div>
                                                </div>

                                                <div className="card-body">
                                                    <div className='daydiv d-flex justify-content-around'>
                                                        <p className='dayActivity'>Mon</p>
                                                        <p className='dayActivity'>Tue</p>
                                                        <p className='dayActivity'>Wed</p>
                                                        <p className='dayActivity'>Thu</p>
                                                        <p className='dayActivity'>Fri</p>
                                                        <p className='dayActivity'>Sat</p>
                                                        <p className='dayActivity'>Sun</p>
                                                    </div>
                                                    <div className='d-flex justify-content-between align-items-center'>
                                                        <div>
                                                            <span className='gray-color'>Today</span>
                                                            <span className='badge mx-2'>On Duty</span>
                                                            <p className='my-2'>08:00am - 05:00pm</p>
                                                        </div>
                                                        <div className='text-center today-div'>
                                                            <p className='gray-color'>Booking</p>
                                                            <p className='zerosize'>0</p>
                                                        </div>
                                                    </div>
                                                    <button className='edit-btn'><FaPencilAlt className='mx-2' />Edit Agent</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card agents-card">
                                                <MdElectricBolt className="card-hover-icon" />
                                                <div className='d-flex gap-2 justify-content-around'>
                                                    <div>
                                                        <Image
                                                            src="/map010.jpg"
                                                            width={50}
                                                            height={50}
                                                            alt="Picture of the author"
                                                            className='picture-author' />
                                                    </div>
                                                    <div>
                                                        <h6 className='picture-author-name'>Lynn Nicely</h6>
                                                        <p className='picture-author-phone'>+19048267288</p>
                                                    </div>
                                                </div>

                                                <div className="card-body">
                                                    <div className='daydiv d-flex justify-content-around'>
                                                        <p className='dayActivity'>Mon</p>
                                                        <p className='dayActivity'>Tue</p>
                                                        <p className='dayActivity'>Wed</p>
                                                        <p className='dayActivity'>Thu</p>
                                                        <p className='dayActivity'>Fri</p>
                                                        <p className='dayActivity'>Sat</p>
                                                        <p className='dayActivity'>Sun</p>
                                                    </div>
                                                    <div className='d-flex justify-content-between align-items-center'>
                                                        <div>
                                                            <span className='gray-color'>Today</span>
                                                            <span className='badge mx-2'>On Duty</span>
                                                            <p className='my-2'>08:00am - 05:00pm</p>
                                                        </div>
                                                        <div className='text-center today-div'>
                                                            <p className='gray-color'>Booking</p>
                                                            <p className='zerosize'>0</p>
                                                        </div>
                                                    </div>
                                                    <button className='edit-btn'><FaPencilAlt className='mx-2' />Edit Agent</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="card agents-card">
                                                <MdElectricBolt className="card-hover-icon" />
                                                <div className='d-flex gap-2 justify-content-around'>
                                                    <div>
                                                        <Image
                                                            src="/map010.jpg"
                                                            width={50}
                                                            height={50}
                                                            alt="Picture of the author"
                                                            className='picture-author' />
                                                    </div>
                                                    <div>
                                                        <h6 className='picture-author-name'>Lynn Nicely</h6>
                                                        <p className='picture-author-phone'>+19048267288</p>
                                                    </div>
                                                </div>

                                                <div className="card-body">
                                                    <div className='daydiv d-flex justify-content-around'>
                                                        <p className='dayActivity'>Mon</p>
                                                        <p className='dayActivity'>Tue</p>
                                                        <p className='dayActivity'>Wed</p>
                                                        <p className='dayActivity'>Thu</p>
                                                        <p className='dayActivity'>Fri</p>
                                                        <p className='dayActivity'>Sat</p>
                                                        <p className='dayActivity'>Sun</p>
                                                    </div>
                                                    <div className='d-flex justify-content-between align-items-center'>
                                                        <div>
                                                            <span className='gray-color'>Today</span>
                                                            <span className='badge mx-2'>On Duty</span>
                                                            <p className='my-2'>08:00am - 05:00pm</p>
                                                        </div>
                                                        <div className='text-center today-div'>
                                                            <p className='gray-color'>Booking</p>
                                                            <p className='zerosize'>0</p>
                                                        </div>
                                                    </div>
                                                    <button className='edit-btn'><FaPencilAlt className='mx-2' />Edit Agent</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="card agents-card">
                                                <MdElectricBolt className="card-hover-icon" />
                                                <div className='d-flex gap-2 justify-content-around'>
                                                    <div>
                                                        <Image
                                                            src="/map010.jpg"
                                                            width={50}
                                                            height={50}
                                                            alt="Picture of the author"
                                                            className='picture-author' />
                                                    </div>
                                                    <div>
                                                        <h6 className='picture-author-name'>Lynn Nicely</h6>
                                                        <p className='picture-author-phone'>+19048267288</p>
                                                    </div>
                                                </div>

                                                <div className="card-body">
                                                    <div className='daydiv d-flex justify-content-around'>
                                                        <p className='dayActivity'>Mon</p>
                                                        <p className='dayActivity'>Tue</p>
                                                        <p className='dayActivity'>Wed</p>
                                                        <p className='dayActivity'>Thu</p>
                                                        <p className='dayActivity'>Fri</p>
                                                        <p className='dayActivity'>Sat</p>
                                                        <p className='dayActivity'>Sun</p>
                                                    </div>
                                                    <div className='d-flex justify-content-between align-items-center'>
                                                        <div>
                                                            <span className='gray-color'>Today</span>
                                                            <span className='badge mx-2'>On Duty</span>
                                                            <p className='my-2'>08:00am - 05:00pm</p>
                                                        </div>
                                                        <div className='text-center today-div'>
                                                            <p className='gray-color'>Booking</p>
                                                            <p className='zerosize'>0</p>
                                                        </div>
                                                    </div>
                                                    <button className='edit-btn'><FaPencilAlt className='mx-2' />Edit Agent</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>



                                  

                                    
                                </div>
                    </div>
                </div>
                 <CustomerProfileModal />
                <CompletedBtn />
            </div>
      </main>
      <Footer/>
      
    </div>
  );
}
