import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import "./ProductList.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { productRows } from '../../dummyData';
import { Link } from "react-router-dom";

export default function ProductList() {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 20 },
        {
            field: 'name',
            headerName: 'Product Name',
            width: 150,
            renderCell: (params) => (
                <div className="ProductListUser">
                    <img className="userListImg" src={params.row.avatar} alt="" />
                    {params.row.name}
                </div>
            ),
        },
        { field: 'stock', headerName: 'Stock Quantity', width: 190 },
        { field: 'price', headerName: 'Item Price', width: 90 },
        { field: 'status', headerName: 'Status', width: 90 },
        {
            field: 'action',
            headerName: 'Action',
            width: 120,
            renderCell: (params) => (
                <div className="userActionEdit">
                    <Link to={`/product/${params.row.id}`}>
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
            <div className="userList">Product List</div>
            <Paper sx={{ height: 800, width: '100%' }}>
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
