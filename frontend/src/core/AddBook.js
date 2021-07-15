import React, {useEffect, useState} from 'react';
import FooterPage from '../layout/FooterPage';
import Navigation from '../layout/Navigation';
import Navigation2 from '../layout/Navigation2';
import { getCategories, isAuthenticated, createBook } from './apiCore';
import Jumbotron from 'react-bootstrap/Jumbotron';
import model_product from '../images/model_product.png';

const AddBook = () => {
    const [values, setValues] = useState({ // Asignamos los nuevos estados
        name: '',
        status: '',
        quantity: '',
        description: '',
        photo: '',
        price: '',
        categories: [],
        category: '',
        author: '',
        pages: '',
        category_book: '',
        loading: false,
        error: '',
        createdBook: '',
        redirectToProfile: false,
        formData: ''
    })

    const { user, token } = isAuthenticated()
    const {
        name,
        status,
        quantity,
        description,
        photo,
        price,
        categories,
        category,
        author,
        pages,
        category_book,
        loading,
        error,
        createdBook,
        redirectToProfile,
        formData
    } = values; // values.formData, values.Photo Ayuda a manipular valores de forma mas sencilla

    const init = () => { // Nos ayuda a requerir todas las categorias en cuanto se inicialice la página
        getCategories().then(data =>{
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                setValues({ ...values, categories: data, formData: new FormData() })
            }
        })
    }

    useEffect(() => { // Se inicializa en cuanto iniciamos nuestro componente de AddBook
        setValues({...values, formData: new FormData()});
        init();
    }, []);

    const handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value
        formData.set(name, value)
        setValues({...values, [name]: value})
    }

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
          {error}
        </div>
      )

      const showSuccess = () => (
        <div className='alert alert-info' style={{ display: createdBook ? '' : 'none' }}>  
        <h5>{`${createdBook} ha sido creado correctamente`}</h5>
        </div>
      )
    
      const showLoading = () => (
        loading && (
          <div className="alert alert-success">
            <h5>Cargando...</h5>
          </div>
        )
      )

      const clickSubmit = event => {
        event.preventDefault()  // Previene que se haga un submit sin haber llenado el form
        setValues({ ...values, error: '', loading: true })
        createBook(user._id, token, formData).then(data => {
          if (data.error) {
            setValues({ ...values, error: data.error })
          } else {
            setValues({
              ...values,
              name: '',
              status: '',
              quantity: '',
              description: '',
              photo: '',
              price: '',
              author: '',
              pages: '',
              category_book: '',
              loading: false,
              createdBook: data.name
            })
          }
        })
      }
    
      const newProductForm = () => (
        <div className="container">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <form className='m-5' onSubmit={clickSubmit}>
            <h5>Elige la imagen de tu producto...</h5>
              <div className='form-group'>
                <label className='btn btn-secondary col-lg-7 col-md-8 col-sm-12'>
                  <input
                    onChange={handleChange('photo')}
                    type='file'
                    name='photo'
                    accept='image/*'
                    required autoFocus
                  />
                </label>
              </div>
          <div className='form-group'>
            <label className='text-muted'>Nombre</label>
            <input
              onChange={handleChange('name')}
              type='text'
              className='form-control'
              value={name}
              required autoFocus
            />
          </div>
          <div className='form-group'>
            <label className='text-muted'>Estado</label>
            <input
              onChange={handleChange('status')}
              type='text'
              className='form-control'
              value={status}
              required autoFocus
            />
          </div>
          <div className='form-group'>
            <label className='text-muted'>Descripción</label>
            <input
              onChange={handleChange('description')}
              type='text'
              className='form-control'
              value={description}
              required autoFocus
            />
          </div>
          <div className='form-group'>
            <label className='text-muted'>Precio</label>
            <input
              onChange={handleChange('price')}
              type='text'
              className='form-control'
              value={price}
              required autoFocus
            />
          </div>
          <div className='form-group'>
            <label className='text-muted'>Cantidad</label>
            <input
              onChange={handleChange('quantity')}
              type='number'
              className='form-control'
              value={quantity}
              required autoFocus
            />
          </div>
          <div className='form-group'>
            <label className='text-muted'>Nombre del autor</label>
            <input
              onChange={handleChange('author')}
              type='text'
              className='form-control'
              value={author}
              required autoFocus
            />
          </div>
          <div className='form-group'>
            <label className='text-muted'>No. Paginas</label>
            <input
              onChange={handleChange('pages')}
              type='number'
              className='form-control'
              value={pages}
              required autoFocus
            />
          </div>
          <div className='form-group'>
            <label className='text-muted'>Genero Literario</label>
            <input
              onChange={handleChange('category_book')}
              type='text'
              className='form-control'
              value={category_book}
              required autoFocus
            />
          </div>

          <button className='btn btn-success col-12'>Crear Producto</button>
        </form>
        </div>
        </div>
      )     

    return (
      <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
            <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" />
            <Navigation />
            <Navigation2 />
            <div className="container">
                  <img className="flayer-product-book" src={model_product} alt="Model Product" />
              <div className="row">
                <div className="col-md-12">
                <Jumbotron>
                  <h3 className="col-12">Libros, revistas y más</h3>
                    <div className="m-1">
                      {showLoading()}
                      {showSuccess()}
                      {showError()}
                    </div>
                </Jumbotron>
                  {newProductForm()}
                </div>
              </div>
            </div>
              {FooterPage()}
      </div>
    )
}

export default AddBook;