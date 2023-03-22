import React from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../actions'
import { Link } from 'react-router-dom'
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png'
import '../assets/styles/components/Login.scss'
import Header from '../components/Header';

function Login(props) {

  //state to store inputs
  const [form, setValues] = React.useState({
    email: '',
  });

  //function to store the inputs into the state

  const handleInput = event => {
    setValues({
      ...form,
      //toma del event el name y el valor que tiene el input
      [event.target.name]: event.target.value
    })

  }

  const handleSubmit = event => {
    event.preventDefault();

    //le mando el el email del input
    props.loginRequest(form)

    //si hizo login, al home
    props.history.push('/')
  }

  return (


    <>

      <Header isLogin />

      <section className="login" >

        <section className="login__container">
          <h2>Inicia sesión</h2>
          <form className="login__container--form" onSubmit={handleSubmit}>
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Correo"
              onChange={handleInput}
            />
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Contraseña"
              onChange={handleInput}
            />
            <button className="button">Iniciar sesión</button>
            <div className="login__container--remember-me">
              <label>
                <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
              </label>
              <a href="/">Olvidé mi contraseña</a>
            </div>
          </form>

          <section className="login__container--social-media">
            <div><img src={googleIcon} /> Inicia sesión con Google</div>
            <div><img src={twitterIcon} /> Inicia sesión con Twitter</div>
          </section>

          <p className="login__container--register">
            No tienes ninguna cuenta {' '}
            <Link to='/register'>
              Regístrate
            </Link>
          </p>
        </section>

      </section>
    </>

  )
}

const mapDispatchToProps = {
  loginRequest,
}
export default connect(null, mapDispatchToProps)(Login)
