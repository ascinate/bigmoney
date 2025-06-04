'use client'
import * as React from 'react';
import { FiExternalLink } from "react-icons/fi";
import { ImEqualizer2 } from "react-icons/im";
import { DataGrid } from '@mui/x-data-grid';
import { IoReload } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

import Link from 'next/link';

    const rows = [
        {
            event: "Booking Created",
            workflow: 'New Booking Notification [Deleted]',
            objectid: 5,
            actions: "send email",
            status: "error",
            runtime: "2025-05-28 21:02:54",
            runinfo: "4 days ago",
            runagain: "runagain"
        },
        {
            event: "Booking Created",
            workflow: 'New Booking Notification [Deleted]',
            objectid: 5,
            actions: "send email",
            status: "error",
            runtime: "2025-05-28 21:02:54",
            runinfo: "4 days ago",
            runagain: "runagain"
        },
        {
            event: "Booking Created",
            workflow: 'New Booking Notification [Deleted]',
            objectid: 5,
            actions: "send email",
            status: "error",
            runtime: "2025-05-28 21:02:54",
            runinfo: "4 days ago",
            runagain: "runagain"
        },
        {
            event: "Booking Created",
            workflow: 'New Booking Notification [Deleted]',
            objectid: 5,
            actions: "send email",
            status: "error",
            runtime: "2025-05-28 21:02:54",
            runinfo: "4 days ago",
            runagain: "runagain"
        },

    ];

function ScheduledJobs() {
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
        {
            field: 'event',
            headerName: 'Event',
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
                    {params.row.event}
                </Link>
            ),
        },

        {
            field: 'workflow',
            headerName: 'Workflow',
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
                    {params.row.workflow}
                </Link>
            ),
        },
        {
            field: 'objectid',
            headerName: 'Object Id',
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
                    {params.row.objectid}
                </Link>
            ),
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 200,
            sortable: false,
            filterable: false,
            editable: true,
            renderCell: (params) => (
                <Link
                    className="status-btn"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample6"
                    role="button"
                    aria-controls="offcanvasExample"
                    onClick={() => setSelectedRow(params.row)}
                >
                    <CiMail />
                    {params.row.actions}
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
                    className="status-btn"
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
            field: 'runtime',
            headerName: 'Run Time (UTC)',
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
                    {params.row.runtime}
                </Link>
            ),
        },
        {
            field: 'runinfo',
            headerName: 'Run Info',
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
                    {params.row.runinfo}
                </Link>
            ),
        },
        {
            field: 'runagain',
            headerName: '',
            width: 200,
            sortable: false,
            filterable: false,
            editable: true,
            renderCell: (params) => (
                <Link
                    className=""
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample3"
                    role="button"
                    aria-controls="offcanvasExample"
                    onClick={() => setSelectedRow(params.row)}
                >
                    <IoReload className='reloadicon' />
                    {params.row.runagain}
                </Link>
            ),
        },
    ];

    return (
        <>
            <section className='calendar-tab'>
                <div className='calender-container'>
                    <div className="container">
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div style={{ height: 400, width: '100%' }}>
                                    <DataGrid
                                        rows={rowData}
                                        columns={columns}
                                        processRowUpdate={processRowUpdate}
                                        experimentalFeatures={{ newEditingApi: true }}
                                        getRowId={(row) => row.objectid}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="offcanvas offcanvas-start w-75" tabindex="-1" id="offcanvasExample6" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Send Email</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className='send-email-canvas'>
                            <p><span>Status:</span>Error<span>Processed on: </span>2025-05-28 21:02:54 <span>Error: </span>Email notifications are disabled</p>
                        </div>
                        <p className='offcanvas-body-status'>Subject: <span>New Appointment Received</span></p>
                        <p className='offcanvas-body-status'>To <span>Lynn Nicely &#60;lnicely&#64;me.com&#62;</span></p>
                    </div>
                </div>


            </section>
        </>
    );
}

export default ScheduledJobs;