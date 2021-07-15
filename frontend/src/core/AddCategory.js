import React, { useState } from 'react';
import Navigation from '../layout/Navigation';
import Navigation2 from '../layout/Navigation2';
import  { Link } from 'react-router-dom';
import { isAuthenticated, createCategory } from './apiCore';
import video from '../images/video.mp4';

const AddCategory = () => {
    const [name, setName] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const {user, token} = isAuthenticated();  // El  usuario no puede crear una nueva categoria si no se ha logeado
    const handleChange = (event) => { // Cada que se escriba una nueva categoria (tecla x tecla) se iran cambiando los valores
        setError('');
        setName(event.target.value);
    }

    const clickSubmit = (event) => { // Previene-valida que se este creando una misma categoria 
        event.preventDefault();
        setError('');
        setSuccess(false);
        // Hacemos una nueva petición a nuestro API
        createCategory(user._id, token, {name})
        .then(data => {
            if(data.error) {
                setError(true)
            } else {
                setError('');
                setSuccess(true);
            }
        })
    }

    const showSuccess = () => {
        if (success) {
            return <h5 className="text-success">¡La Categoría "{name}" ha sido creada correctamente!</h5>
        }
    }

    const showError = () => { //JS
          if (error) {
              return <h5 className="text-danger">"{name}" ya existe, intentalo una vez más...</h5>
          }
      }

    const newCategoryFrom = () => (  // Función para crear el form addCategory (HTML)
        <form onSubmit={clickSubmit}> 
            <div className="form-group">
                <label className="text-muted">Nombre:</label>
                <input type="text" className="form-control"
                onChange={handleChange} value={name} required autoFocus/>
            </div>
            <button className="btn btn-success col-12">
                Crear Categoría
            </button>
        </form>
    )    
      
    return (
        <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
        <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" />
        <Navigation />
        <Navigation2 />
                <video className="video-container" src={video} autoPlay poster="" loop></video>
            <div className="container">
                <div className="form-category">
                    <h2 className="text-category col-12">Agregar una nueva Categoría</h2>
                {showSuccess()}
                {showError()}
                {newCategoryFrom()}
                </div>
            </div>
        </div>
    )
}

export default AddCategory;