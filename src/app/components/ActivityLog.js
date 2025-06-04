'use client'
import * as React from 'react';
import { FiExternalLink } from "react-icons/fi";
import { ImEqualizer2 } from "react-icons/im";
import { DataGrid } from '@mui/x-data-grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { IoReload } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { TfiDownload } from "react-icons/tfi";

import Link from 'next/link';
const rows = [
    {
        id: 1,
        type: "error",
        actionby: 'admin',
        datetime: "May 30, 2025 5:33am",
        action: "view",
    },

];

function ActivityLog() {
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
            field: 'type',
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
                    {params.row.type}
                </Link>
            ),
        },
        {
            field: 'actionby',
            headerName: 'Action by',
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
                    {params.row.actionby}
                </Link>
            ),
        },
        {
            field: 'datetime',
            headerName: 'Date/Time',
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
                    {params.row.datetime}
                </Link>
            ),
        },
        {
            field: 'action',
            headerName: 'Actions',
            width: 200,
            sortable: false,
            filterable: false,
            editable: true,
            renderCell: (params) => (
                <Link
                    className="status-btn"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample5"
                    role="button"
                    aria-controls="offcanvasExample"
                    onClick={() => setSelectedRow(params.row)}
                >
                    <CiMail />
                    {params.row.action}
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
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="offcanvas offcanvas-start w-50 " tabindex="-1" id="offcanvasExample5" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Error</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div>
                            <span>Error Message: Error checking status of server token | stripe_connect_error</span>
                            <div className='errorDetailtag'>
                                <details >
                                    <summary>1 item</summary>
                                    <p>&#123;
                                        <br /> 
                                        error_message: <span> &#34;The resource ID cannot be null or whitespace.&#34; </span>
                                        <br />
                                        &#125;
                                    </p>
                                </details>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default ActivityLog;