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


const rows = [
    { id: 1, token: 'Johnathan smith', orderid: "May 28,2025 01:00pm", customer: "past", processor: "Lynn Nicely", method: "Main Location", amount: "johnathan smith", status: "Approved", type: "not paid", date: "May 28, 2025 9:02 pm" },
    { id: 2, token: 'Johnathan smith', orderid: "May 28,2025 01:00pm", customer: "past", processor: "Lynn Nicely", method: "Main Location", amount: "johnathan smith", status: "Approved", type: "not paid", date: "May 28, 2025 9:02 pm" },
    { id: 3, token: 'Johnathan smith', orderid: "May 28,2025 01:00pm", customer: "past", processor: "Lynn Nicely", method: "Main Location", amount: "johnathan smith", status: "Approved", type: "not paid", date: "May 28, 2025 9:02 pm" },
    { id: 4, token: 'Johnathan smith', orderid: "May 28,2025 01:00pm", customer: "past", processor: "Lynn Nicely", method: "Main Location", amount: "johnathan smith", status: "Approved", type: "not paid", date: "May 28, 2025 9:02 pm" },
    { id: 5, token: 'Johnathan smith', orderid: "May 28,2025 01:00pm", customer: "past", processor: "Lynn Nicely", method: "Main Location", amount: "johnathan smith", status: "Approved", type: "not paid", date: "May 28, 2025 9:02 pm" },
    { id: 6, token: 'Johnathan smith', orderid: "May 28,2025 01:00pm", customer: "past", processor: "Lynn Nicely", method: "Main Location", amount: "johnathan smith", status: "Approved", type: "not paid", date: "May 28, 2025 9:02 pm" },
    { id: 7, token: 'Johnathan smith', orderid: "May 28,2025 01:00pm", customer: "past", processor: "Lynn Nicely", method: "Main Location", amount: "johnathan smith", status: "Approved", type: "not paid", date: "May 28, 2025 9:02 pm" },
    { id: 8, token: 'Johnathan smith', orderid: "May 28,2025 01:00pm", customer: "past", processor: "Lynn Nicely", method: "Main Location", amount: "johnathan smith", status: "Approved", type: "not paid", date: "May 28, 2025 9:02 pm" },
    { id: 9, token: 'Johnathan smith', orderid: "May 28,2025 01:00pm", customer: "past", processor: "Lynn Nicely", method: "Main Location", amount: "johnathan smith", status: "Approved", type: "not paid", date: "May 28, 2025 9:02 pm" },
    { id: 10, token: 'Johnathan smith', orderid: "May 28,2025 01:00pm", customer: "past", processor: "Lynn Nicely", method: "Main Location", amount: "johnathan smith", status: "Approved", type: "not paid", date: "May 28, 2025 9:02 pm" },
    { id: 11, token: 'Johnathan smith', orderid: "May 28,2025 01:00pm", customer: "past", processor: "Lynn Nicely", method: "Main Location", amount: "johnathan smith", status: "Approved", type: "not paid", date: "May 28, 2025 9:02 pm" },
    { id: 12, token: 'Johnathan smith', orderid: "May 28,2025 01:00pm", customer: "past", processor: "Lynn Nicely", method: "Main Location", amount: "johnathan smith", status: "Approved", type: "not paid", date: "May 28, 2025 9:02 pm" },
    { id: 13, token: 'Johnathan smith', orderid: "May 28,2025 01:00pm", customer: "past", processor: "Lynn Nicely", method: "Main Location", amount: "johnathan smith", status: "Approved", type: "not paid", date: "May 28, 2025 9:02 pm" },
    { id: 14, token: 'Johnathan smith', orderid: "May 28,2025 01:00pm", customer: "past", processor: "Lynn Nicely", method: "Main Location", amount: "johnathan smith", status: "Approved", type: "not paid", date: "May 28, 2025 9:02 pm" },
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
            field: 'token',
            headerName: 'Token',
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
                    {params.row.token}
                </Link>
            ),
        },
        {
            field: 'orderid',
            headerName: 'Order Id',
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
                    {params.row.orderid}
                </Link>
            ),
        },
        {
            field: 'customer',
            headerName: 'Customer',
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
                    {params.row.customer}
                </Link>
            ),
        },
        {
            field: 'processor',
            headerName: 'Processor',
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
                    {params.row.processor}
                </Link>
            ),
        },
        {
            field: 'method',
            headerName: 'Method',
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
                    {params.row.method}
                </Link>
            ),
        },
        {
            field: 'amount',
            headerName: 'Amount',
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
                    {params.row.amount}
                </Link>
            ),
        },
        {
            field: 'status',
            headerName: 'Status',
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
                    {params.row.status}
                </Link>
            ),
        },
        {
            field: 'type',
            headerName: 'Type',
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
                    {params.row.type}
                </Link>
            ),
        },
        {
            field: 'date',
            headerName: 'Date',
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
                    {params.row.date}
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
                          <h2> Payments
                            <span className='d-block shoingtext'> Showing {rowData.length} of {rowData.length} </span>
                          </h2>
                           <a href='/' download className='btn btn-donload'>
                                    <TfiDownload /> Download .csv
                           </a>
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
