import React from 'react'
import './addproduct.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import Swal from 'sweetalert2'

function index() {
  const formik = useFormik({
    initialValues: {
      name: '',
      image: '',
      price: '',
      category: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('⚠️REQUIRED⚠️'),
      image: Yup.string()
        .min(10, 'Must be 10 characters or more')
        .required('⚠️REQUIRED⚠️'),
      price: Yup.number()
        .typeError('Invalid Price') 
        .positive('Price must be a positive number') 
        .required('⚠️REQUIRED⚠️'), 
      category: Yup.string()
      .min(1, 'Must be 1 characters or more')
      .required('⚠️REQUIRED⚠️'),
    }),
    onSubmit: values => {
      axios.post('http://localhost:3000/products', values)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "The Product Added",
        showConfirmButton: false,
        timer: 1500
      });
    },
  });
  return (
    
    <section id='Addbook'>
      <h1>Add New Product</h1>

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

      <button type="submit">Submit</button>
    </form>
    </section>
  )
}

export default index
