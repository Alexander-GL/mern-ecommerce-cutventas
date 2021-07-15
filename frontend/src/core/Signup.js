import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../layout/Navigation';
import Navigation2 from '../layout/Navigation2';
import FooterPageSign from '../layout/FooterPageSign';
import "./styles/Signup.css"
import { signup } from './apiCore';
import video from '../images/pexels-thirdman-6238179.mp4';

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false
  })

  const { name, email, password, success, error } = values

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value })
  }

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false })
    signup({ name, email, password }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false })
      } else {
        setValues({
          ...values,
          name: '',
          email: '',
          password: '',
          error: '',
          success: true
        })
      }
    })
  }

  const signUpForm = () => (
    <form className="sign-box">
    <h4 className="text-center mb-5">Crear cuenta</h4>
      <div className='form-group'>
        <h6>Tu nombre</h6>
        <input
          onChange={handleChange('name')}
          value={name}
          type='text'
          className='form-control' 
          required autoFocus
          />
      </div>
      <div className='form-group'>
        <h6>Correo electrónico</h6>
        <input
          onChange={handleChange('email')}
          type='email'
          value={email}
          className='form-control' 
          required autoFocus
          />
      </div>
      <div className='form-group'>
        <h6>Contraseña</h6>
        <input
          onChange={handleChange('password')}
          value={password}
          type='password'
          className='form-control' 
          required autoFocus
          />
          <i className="fa fa-info-circle py-2 col-2"></i><label className='text-muted text-right info_pass'>La contraseña debe contener al menos seis caracteres.</label>
      </div>
      <button onClick={clickSubmit} className='btn btn-warning py-2 col-12'>
        Crea tu cuenta de CUTVENTAS
      </button>
      <label className='text-muted text-right'>Al crear una cuenta, aceptas las Condiciones de Uso y el Aviso de Privacidad de CUTVENTAS.</label>
      <hr className="line_form" />
      <div className="a-row">
          ¿Ya tienes una cuenta?
          <a className="a-link-emphasis" href="/signin"> Iniciar sesión </a>
        </div>
        <FooterPageSign />
    </form>
  );

  const showError = () => (
    <div className='alert alert-danger' style={{ display: error ? '' : 'none' }}>
      {error}
    </div>
  )

  const showSuccess = () => (
    <div className='alert alert-info' style={{ display: success ? '' : 'none' }}>  ¡Cuenta creada con Exito! Da click
      <Link to='/signin'> aquí</Link> para comenzar a comprar todo lo que necesites.
    </div>
  )

  return (
    <>
    <div id="capa">
      <Navigation />
      <Navigation2 />
      <video className="video-container" src={video} autoPlay poster="" loop></video>
        <div className="container py-4">
          <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" />
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
              integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
              crossorigin="anonymous"
            />
            <div className="mt-5">
              {showError()}
              {showSuccess()}
              {signUpForm()}
            </div>
          </div>
        </div>
    </>
  )
}

export default Signup;