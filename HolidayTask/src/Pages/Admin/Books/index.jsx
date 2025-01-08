import React, { useEffect, useState } from 'react'
import './Books.css'
import Table from '@mui/material/Table';
import {Link, NavLink} from 'react-router-dom'
import axios from 'axios';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';


function index() {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);
  
    function HandleDelete(a){
      axios.delete(`http://localhost:3000/products/${a}`) 
      .then(()=> setRows((prevRows) => prevRows.filter((row) => row.id !== a)))
    }

    useEffect(() => {
      axios.get('http://localhost:3000/products') 
        .then((response) => {
          setRows(response.data);
        })
        .finally(() => setLoading(false));
    }, []);
  
    if (loading) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Box>
      );
    }
    return (
      <div>
        <section id='AdminBooks'>
        <TableContainer component={Paper} sx={{ maxWidth: 800, margin: 'auto', mt: 4 }}>
        <Typography
          variant="h6"
          sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold', color: 'primary.main' }}
        >
          Product List
        </Typography>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'primary.main' }}>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>ID</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Title</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Price</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Published Year</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Functions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.publishedYear}</TableCell>
                <TableCell>
                  <NavLink to={`/admin/books/edit/${row.id}`}><Button sx={{color: 'orange' }}>Edit</Button></NavLink> 
                  <Button onClick={()=>HandleDelete(row.id)} sx={{color: 'red' }}>Delete</Button>
                  <NavLink to={`/admin/books/${row.id}`}><Button>Details</Button></NavLink>
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </section>
      </div>
    )
  }

export default index