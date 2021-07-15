import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Navigation from '../layout/Navigation';
import Navigation2 from '../layout/Navigation2';
import FooterPageSign from '../layout/FooterPageSign';
import { signin, authenticate, isAuthenticated } from './apiCore';
import '../core/styles/Signin.css';
import video from '../images/pexels-max-fischer-5889074.mp4';

const Signin = () => {

  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    redirectToReferrer: false
  });

  const { email, password, loading, error, redirectToReferrer } = values;
  const { user } = isAuthenticated();

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value })
  }

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true })
    signin({ email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false })
        } else {
          authenticate(
            data, () => {
              setValues({
                ...values,
                redirectToReferrer: true
              })
            }
          )
        }
      })
  }


  const signInForm = () => (
    <form className="sign-box">
    <h4 className="text-center mb-5">Iniciar sesión</h4>
      <div className="form-group">
        <h6>Correo electrónico</h6>
        <input
          onChange={handleChange('email')}
          type="email"
          className="form-control"
          value={email}
          required autoFocus
        />
      </div>
      <div className="form-group">
        <h6>Contraseña</h6>
        <input
          onChange={handleChange('password')}
          type="password"
          className="form-control"
          value={password}
          required autoFocus
        />
      </div>
      <button onClick={clickSubmit} className="btn btn-warning py-2 col-12"> Iniciar sesión </button><br /><br />
      <label className='text-muted text-right'>Al crear una cuenta, aceptas las Condiciones de Uso y el Aviso de Privacidad de CUTVENTAS.</label>
      <br /><hr className="line_form" />
      <div className="a-row">
          ¿Eres nuevo en CUTVENTAS?
          <a className="a-link-emphasis" href="/signup"> Crea tu cuenta </a>
        </div><br /><br /><br /><br /><br /><br />
        <FooterPageSign />
    </form>
  )

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />
      } else {
        return <Redirect to="/" />
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />
    }
  }

  const showError = () => (
    <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
      {error}
    </div>
  )

  const showLoading = () => (
    loading && (
      <div className="alert alert-info">
        <h5>Loading...</h5>
      </div>
    )
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
              {showLoading()}
              {signInForm()}
              {redirectUser()}
            </div>
          </div>
        </div>
    </>
  )
}

export default Signin;