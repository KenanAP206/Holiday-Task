import React from 'react'
import './addbook.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import Swal from 'sweetalert2'

function index() {
  const formik = useFormik({
    initialValues: {
      title: '',
      image: '',
      price: '',
      publishedYear: '',
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('⚠️REQUIRED⚠️'),
      image: Yup.string()
        .min(10, 'Must be 10 characters or more')
        .required('⚠️REQUIRED⚠️'),
      price: Yup.number()
        .typeError('Invalid Price') 
        .positive('Price must be a positive number') 
        .required('⚠️REQUIRED⚠️'), 
      publishedYear: Yup.number()
        .typeError('Invalid Year') 
        .min(1, 'Invalid Year')
        .max(2025, 'Invalid Year')
        .positive('Price must be a positive number') 
        .required('⚠️REQUIRED⚠️'), 
    }),
    onSubmit: values => {
      axios.post('http://localhost:3000/books', values)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "The Book Added",
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
        placeholder='Title'
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
      />
      {formik.touched.title && formik.errors.title ? (
        <div className='validerror'>{formik.errors.title}</div>
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
      placeholder='Publish Year'
        id="publishedYear"
        name="publishedYear"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.publishedYear}
      />
      {formik.touched.publishedYear && formik.errors.publishedYear ? (
        <div className='validerror'>{formik.errors.publishedYear}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
    </section>
  )
}

export default index
