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
import { FaPlus } from "react-icons/fa6";


const rows = [
    { id: 1, fullname: 'Johnathan smith', phone: "+912374636738", email: "jafajdFWoadldl@aoool.com", totalapps: "Lynn Nicely", nextapp: "Main Location", timetonext: "johnathan smith", registeredon: "Approved" },
    { id: 2, fullname: 'Johnathan smith', phone: "+912374636738", email: "aafajdFWoadldl@aoool.com", totalapps: "Lynn Nicely", nextapp: "Main Location", timetonext: "johnathan smith", registeredon: "Approved" },
    { id: 3, fullname: 'Johnathan smith', phone: "+912374636738", email: "jafajdFWoadldl@aoool.com", totalapps: "Lynn Nicely", nextapp: "Main Location", timetonext: "johnathan smith", registeredon: "Approved" },
    { id: 4, fullname: 'Johnathan smith', phone: "+912374636738", email: "jafajdFWoadldl@aoool.com", totalapps: "Lynn Nicely", nextapp: "Main Location", timetonext: "johnathan smith", registeredon: "Approved" },
    { id: 5, fullname: 'Johnathan smith', phone: "+912374636738", email: "tafajdFWoadldl@aoool.com", totalapps: "Lynn Nicely", nextapp: "Main Location", timetonext: "johnathan smith", registeredon: "Approved" },
    { id: 6, fullname: 'Johnathan smith', phone: "+912374636738", email: "jafajdFWoadldl@aoool.com", totalapps: "Lynn Nicely", nextapp: "Main Location", timetonext: "johnathan smith", registeredon: "Approved" },
    { id: 7, fullname: 'Johnathan smith', phone: "+912374636738", email: "dafajdFWoadldl@aoool.com", totalapps: "Lynn Nicely", nextapp: "Main Location", timetonext: "johnathan smith", registeredon: "Approved" },
    { id: 8, fullname: 'Johnathan smith', phone: "+912374636738", email: "jafajdFWoadldl@aoool.com", totalapps: "Lynn Nicely", nextapp: "Main Location", timetonext: "johnathan smith", registeredon: "Approved" },
    { id: 9, fullname: 'Johnathan smith', phone: "+912374636738", email: "deafajdFWoadldl@aoool.com", totalapps: "Lynn Nicely", nextapp: "Main Location", timetonext: "johnathan smith", registeredon: "Approved" },
    { id: 10, fullname: 'Johnathan smith', phone: "+912374636738", email: "jafajdFWoadldl@aoool.com", totalapps: "Lynn Nicely", nextapp: "Main Location", timetonext: "johnathan smith", registeredon: "Approved" },
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
            field: 'fullname',
            headerName: 'Full Name',
            width: 200,
            sortable: false,
            filterable: true,
            editable: true,
            renderCell: (params) => (
                <Link
                    className="service"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample2"
                    role="button"
                    aria-controls="offcanvasExample"
                    onClick={() => setSelectedRow(params.row)}
                >
                    {params.row.fullname}
                </Link>
            ),
        },
        {
            field: 'phone',
            headerName: 'Phone',
            width: 200,
            sortable: false,
            filterable: false,
            editable: true,

            renderCell: (params) => (
                <Link
                    className=""
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample2"
                    role="button"
                    aria-controls="offcanvasExample"
                    onClick={() => setSelectedRow(params.row)}
                >
                    {params.row.phone}
                </Link>
            ),
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
            sortable: false,
            filterable: true,
            editable: true,
            renderCell: (params) => (
                <Link
                    className="service"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample2"
                    role="button"
                    aria-controls="offcanvasExample"
                    onClick={() => setSelectedRow(params.row)}
                >
                    {params.row.email}
                </Link>
            ),
        },
        {
            field: 'totalapps',
            headerName: 'Total Apps',
            width: 200,
            sortable: false,
            filterable: false,
            editable: true,
            renderCell: (params) => (
                <Link
                    className=""
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasExample"
                    onClick={() => setSelectedRow(params.row)}
                >
                    {params.row.totalapps}
                </Link>
            ),
        },
        {
            field: 'nextapp',
            headerName: 'Next App',
            width: 200,
            sortable: false,
            filterable: false,
            editable: true,
            renderCell: (params) => (
                <Link
                    className=""
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasExample"
                    onClick={() => setSelectedRow(params.row)}
                >
                    {params.row.nextapp}
                </Link>
            ),
        },
        {
            field: 'timetonext',
            headerName: 'Time to Next',
            width: 200,
            sortable: false,
            filterable: false,
            editable: true,
            renderCell: (params) => (
                <Link
                    className=""
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasExample"
                    onClick={() => setSelectedRow(params.row)}
                >
                    {params.row.timetonext}
                </Link>
            ),
        },
        {
            field: 'registered-on',
            headerName: 'Registered On',
            width: 200,
            sortable: false,
            filterable: false,
            editable: true,
            renderCell: (params) => (
                <Link
                    className=""
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasExample"
                    onClick={() => setSelectedRow(params.row)}
                >
                    {params.row.registeredon}
                </Link>
            ),
        },

    ];
  return (
    <div className="full-body-parts">
      <Sidebar/>
      <main className="d-block ms-lg-auto content-parts d-block">
            <Navbar/>
            <div className="home-settings float-start w-100">
                 <div className='calendar-tab'>
                    <div className='d-flex align-items-center justify-content-between w-100'>
                          <h2>Customer
                            <span className='d-block shoingtext'> Showing {rowData.length} of {rowData.length} </span>
                          </h2>
                          <div className='d-flex justify-content-end align-items-center'>
                            <Link href='/customers' className='btn btn-outline-secondary table-settings-btn'>
                                                <FaPlus /> New Customers
                            </Link>
                            <Link href='/' download className='btn ms-3 btn-donload'>
                                                    <TfiDownload /> Download .csv
                            </Link>
                           </div>
                    </div>
                    <div className='calender-container mt-4'>
                        <div className='calendar w-100'>
                            

                            <div>
                                 <DataGrid
                                     rows={rowData}
                                     columns={columns}
                                     processRowUpdate={processRowUpdate}
                                     experimentalFeatures={{ newEditingApi: true }}
                                />
                            </div>

                            <div className='page-row mt-3 d-flex justify-content-between'>
                                <p>Showing 1-{rowData.length} of {rowData.length}</p>
                                <select className='form-select w-auto'>
                                    <option>1</option>
                                </select>
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
