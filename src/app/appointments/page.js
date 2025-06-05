'use client'
import * as React from 'react';
import { ImEqualizer2 } from "react-icons/im";
import { DataGrid } from '@mui/x-data-grid';
import format from "date-fns/format";
import Navbar from '../components/Navbar.js';
import Sidebar from '../components/Sidebar.js';
import Footer from '../components/Footer.js';
import { TfiDownload } from "react-icons/tfi";
import CustomerProfileModal from '../components/CustomerProfileModal';
import CompletedBtn from '../components/CompletedBtn';
import Link from 'next/link';


const rows = [
    { id: 1, service: 'Johnathan smith', datetime: "May 28,2025 01:00pm", timeleft: "past", agent: "Lynn Nicely", location: "Main Location", customer: "johnathan smith", status: "Approved", paymentstatus: "not paid", createdon: "May 28, 2025 9:02 pm" },
    { id: 2, service: 'Marth stuart', datetime: "May 28,2025 01:00pm", timeleft: "past", agent: "Lynn Nicely", location: "Main Location", customer: "johnathan smith", status: "Approved", paymentstatus: "not paid", createdon: "May 28, 2025 9:02 pm" },
    { id: 3, service: 'Martha Stewart', datetime: "May 28,2025 01:00pm", timeleft: "past", agent: "Lynn Nicely", location: "Main Location", customer: "johnathan smith", status: "Approved", paymentstatus: "not paid", createdon: "May 28, 2025 9:02 pm" },
    { id: 4, service: 'Martha Stewart', datetime: "May 28,2025 01:00pm", timeleft: "past", agent: "Lynn Nicely", location: "Main Location", customer: "johnathan smith", status: "Approved", paymentstatus: "not paid", createdon: "May 28, 2025 9:02 pm" },
    { id: 5, service: 'Mike Jones', datetime: "May 28,2025 01:00pm", timeleft: "past", agent: "Lynn Nicely", location: "Main Location", customer: "johnathan smith", status: "Approved", paymentstatus: "not paid", createdon: "May 28, 2025 9:02 pm" },
    { id: 6, service: 'Mike Jones', datetime: "May 28,2025 01:00pm", timeleft: "past", agent: "Lynn Nicely", location: "Main Location", customer: "johnathan smith", status: "Approved", paymentstatus: "not paid", createdon: "May 28, 2025 9:02 pm" },
    { id: 7, service: 'Marth stuart', datetime: "May 28,2025 01:00pm", timeleft: "past", agent: "Lynn Nicely", location: "Main Location", customer: "johnathan smith", status: "Approved", paymentstatus: "not paid", createdon: "May 28, 2025 9:02 pm" },
    { id: 8, service: 'Martha Stewart', datetime: "May 28,2025 01:00pm", timeleft: "past", agent: "Lynn Nicely", location: "Main Location", customer: "johnathan smith", status: "Approved", paymentstatus: "not paid", createdon: "May 28, 2025 9:02 pm" },
    { id: 9, service: 'Martha Stewart', datetime: "May 28,2025 01:00pm", timeleft: "past", agent: "Lynn Nicely", location: "Main Location", customer: "johnathan smith", status: "Approved", paymentstatus: "not paid", createdon: "May 28, 2025 9:02 pm" },
    { id: 10, service: 'Mike Jones', datetime: "May 28,2025 01:00pm", timeleft: "past", agent: "Lynn Nicely", location: "Main Location", customer: "johnathan smith", status: "Approved", paymentstatus: "not paid", createdon: "May 28, 2025 9:02 pm" },
    { id: 11, service: 'Mike Jones', datetime: "May 28,2025 01:00pm", timeleft: "past", agent: "Lynn Nicely", location: "Main Location", customer: "johnathan smith", status: "Approved", paymentstatus: "not paid", createdon: "May 28, 2025 9:02 pm" },

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
            field: 'service',
            headerName: 'Service',
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
                    {params.row.service}
                </Link>
            ),
        },
        { field: 'datetime', headerName: 'Date', width: 130, editable: true },
        {
            field: 'timeleft',
            headerName: 'Time/Left',
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
                    {params.row.timeleft}
                </Link>
            ),
        },
        {
            field: 'agent',
            headerName: 'Agent',
            width: 200,
            sortable: false,
            filterable: true,
            editable: true,
            renderCell: (params) => (
                <div className='d-flex align-items-center'>
                    <Link
                        className="service"
                        data-bs-toggle="offcanvas"
                        href="#offcanvasExample2"
                        role="button"
                        aria-controls="offcanvasExample"
                        onClick={() => setSelectedRow(params.row)}
                    >
                        {params.row.agent}
                    </Link>
                    
                    
                </div>
            ),
        },
        {
            field: 'location',
            headerName: 'Location',
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
                    {params.row.location}
                </Link>
            ),
        },
        {
            field: 'customer',
            headerName: 'Customer',
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
                    {params.row.customer}
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
            field: 'createdon',
            headerName: 'Created On',
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
                    {params.row.createdon}
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
                <div className='d-flex align-items-center w-100 justify-content-between'>
                     <h2>Appointments
                       <span className='d-block shoingtext'> Showing {rowData.length} of {rowData.length} </span>
                     </h2>

                     <div className='left-bgh d-flex align-items-center justify-content-end'>
                          <Link href='/' className='btn all-btn table-settings-btn'>
                               <ImEqualizer2 /> Table Settings
                          </Link>
                          <Link href='/' download className='btn all-btn ms-3 btn-donload'>
                               <TfiDownload /> Download .csv
                          </Link>
                     </div>

                </div>
              
              <div className='calendar-tab crm-datatables01 mt-4'>
                <div className='calender-container'>
                        <div className='calendar min-hegiht w-100'>
                            

                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    rows={rowData}
                                    columns={columns}
                                    processRowUpdate={processRowUpdate}
                                    experimentalFeatures={{ newEditingApi: true }}
                                />
                            </div>


                        </div>
                </div>

                <CustomerProfileModal />
                <CompletedBtn />

              </div>
                
            </div>
      </main>
      <Footer/>
      
    </div>
  );
}
