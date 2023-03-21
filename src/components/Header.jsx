import React from 'react';
import { connect } from 'react-redux'

import gravatar from '../utils/gravatar'

import { logoutRequest } from '../actions';

import { Link } from 'react-router-dom'
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {

  const { user } = props;

  //valido si tengo usaurio, veo la length de sus keys
  const hasUser = Object.keys(user).length > 0;

  //funcion para cerrar sesino
  const handleLogout = () => {
    //envio usuario vacio, para asi tener logout
    props.logoutRequest({})
  }

  return (
    <header className="header">


      <Link to='/'>
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>


      <div className="header__menu">
        <div className="header__menu--profile">
          {
            //validacion para saber si muestro o no el avatar
            !!hasUser ?
              <img src={gravatar(user.email)} alt={user.email} />
              :
              <img src={userIcon} alt="" />

          }

          <p>Perfil</p>
        </div>
        <ul>

          {
            //si hay usaurio muestor cuenta, sino nada
            !!hasUser ?
              <li><a href="/">{user.name}</a></li>
              : null
          }

          {
            //validacion si muestro login o cerrar sesion
            !!hasUser ?
              <li><a href="#ogout" onClick={handleLogout}>Cerrar SEsion</a></li>
              :
              <li>
                <Link to='/login'>
                  Iniciar Sesión
                </Link>
              </li>

          }


        </ul>
      </div>
    </header>
  );

}




const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDistachToProps = {
  logoutRequest
}

export default connect(mapStateToProps, mapDistachToProps)(Header)
