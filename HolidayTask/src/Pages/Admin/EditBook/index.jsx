import {React, useState, useEffect} from 'react'
import './editbook.css'
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
              title: res.data.title,
              description: res.data.description,
              author: res.data.author,
              genre: res.data.genre,
              language: res.data.language,
              image: res.data.image,
              price: res.data.price,
              publishedYear: res.data.publishedYear,
            });
          });
      
    }, [id]);

    const formik = useFormik({
        initialValues: {
          title: '',
          description: '',
          author: '',
          genre: '',
          image: '',
          price: '',
          publishedYear: '',
        },
        validationSchema: Yup.object({
          title: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .required('⚠️REQUIRED⚠️'),
          description: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .min(20, 'Must be 20 characters or more')
            .required('⚠️REQUIRED⚠️'),
          author: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .min(3, 'Must be 3 characters or more')
            .required('⚠️REQUIRED⚠️'),
          genre: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .min(3, 'Must be 3 characters or more')
            .required('⚠️REQUIRED⚠️'),
          language: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .min(3, 'Must be 3 characters or more')
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
        axios.put(`http://localhost:3000/products/${id}`, values)
             Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "The Book Edited",
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
            placeholder='Description'
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className='validerror'>{formik.errors.description}</div>
          ) : null}
        
        <input
            placeholder='Author'
            id="author"
            name="author"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.author}
          />
          {formik.touched.author && formik.errors.author ? (
            <div className='validerror'>{formik.errors.author}</div>
          ) : null}

        <input
            placeholder='Genre'
            id="genre"
            name="genre"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.genre}
          />
          {formik.touched.genre && formik.errors.genre ? (
            <div className='validerror'>{formik.errors.genre}</div>
          ) : null}
            
            <input
            placeholder='Language'
            id="language"
            name="language"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.language}
          />
          {formik.touched.language && formik.errors.language ? (
            <div className='validerror'>{formik.errors.language}</div>
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
