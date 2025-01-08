import {React, useState, useEffect} from 'react'
import './editproduct.css'
import { useParams } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import Swal from 'sweetalert2'

function index() {

    let [data,setData]=useState([])
    let { id } = useParams(); 
    useEffect(() => {
      axios
        .get(`http://localhost:3000/products/${id}`)
        .then((res) => {
            setData(res.data); 
            formik.setValues({
              name: res.data.name,
              description: res.data.description,
              author: res.data.author,
              status: res.data.status,
              category: res.data.category,
              image: res.data.image,
              price: res.data.price,
              publishedYear: res.data.publishedYear,
            });
          });
      
    }, [id]);

    const formik = useFormik({
        initialValues: {
          name: '',
          description: '',
          author: '',
          status: '',
          image: '',
          price: '',
          publishedYear: '',
        },
        validationSchema: Yup.object({
          name: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .required('⚠️REQUIRED⚠️'),
          status: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .min(3, 'Must be 3 characters or more')
            .required('⚠️REQUIRED⚠️'),
          category: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .min(3, 'Must be 3 characters or more')
            .required('⚠️REQUIRED⚠️'),
          image: Yup.string()
            .min(10, 'Must be 10 characters or more')
            .required('⚠️REQUIRED⚠️'),
    
        }),
        onSubmit: values => {
        axios.put(`http://localhost:3000/products/${id}`, values)
             Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "The Product Edited",
                    showConfirmButton: false,
                    timer: 1500
                  });
        },
      });
      return (
        
        <section id='editbook'>
          <h1>Edit Product</h1>
    
        <form onSubmit={formik.handleSubmit}>
    
          <input
            placeholder='Name'
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className='validerror'>{formik.errors.name}</div>
          ) : null}

       

        <input
            placeholder='Status'
            id="status"
            name="status"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.status}
          />
          {formik.touched.status && formik.errors.status ? (
            <div className='validerror'>{formik.errors.status}</div>
          ) : null}
            
            <input
            placeholder='Category'
            id="category"
            name="category"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
          />
          {formik.touched.category && formik.errors.category ? (
            <div className='validerror'>{formik.errors.category}</div>
          ) : null}
            
            

          <input
            placeholder='Image URL'
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image}
          />
          {formik.touched.image && formik.errors.image ? (
            <div className='validerror'>{formik.errors.image}</div>
          ) : null}
    
          <input
          placeholder='Price'
            id="price"
            name="price"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price ? (
            <div className='validerror'>{formik.errors.price}</div>
          ) : null}
    
        
    
          <button type="submit">Submit</button>
        </form>
        </section>
      )
}

export default index
