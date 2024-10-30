import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import "./UserList.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { userRows } from '../../dummyData';
import { Link } from "react-router-dom";

export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'user',
            headerName: 'User',
            width: 130,
            renderCell: (params) => (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt="" />
                    {params.row.username}
                </div>
            ),
        },
        { field: 'email', headerName: 'Email', width: 190 },
        { field: 'status', headerName: 'Status', width: 90 },
        { field: 'transaction', headerName: 'Transaction', width: 90 },
        {
            field: 'action',
            headerName: 'Action',
            width: 120,
            renderCell: (params) => (
                <div className="userActionEdit">
                    <Link to={`/user/${params.row.id}`}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteIcon
                        className="userListDelete"
                        onClick={() => handleDelete(params.row.id)}
                    />
                </div>
            ),
        },
    ];

    return (
        <>
            <div className="userList">User List</div>
            <Paper sx={{ height: 900, width: '100%' }}>
                <DataGrid
                    rows={data}  
                    columns={columns}
                    disableRowSelectionOnClick
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{ border: 0 }}
                />
            </Paper>
        </>
    );
}
