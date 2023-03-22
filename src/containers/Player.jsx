import React from 'react'

import { connect } from 'react-redux'
import { getVideoSource } from '../actions';


import { Redirect } from 'react-router-dom';
import '../assets/styles/components/Player.scss'
import { NotFound } from './NotFound';

function Player(props) {

  //recibo el id del URL
  const { id } = props.match.params;

  //primero, veo si hay un video a reproducir
  const hasPlaying = Object.keys(props.playing).length > 0;

  //vamos a usar hooks para mandar el id al reducer, y que ponga ese video en playing
  //solo se ejecuta 1 vez,antes del render
  React.useEffect(() => {
    props.getVideoSource(id)
  }, [])

  // si hay video, muestra el reproductor, sino redirecciona a ruta
  return !hasPlaying ? <NotFound />
    : (
      <div>
        <video controls autoPlay>
          <source src={props.playing.source} type='video/mp4' />

        </video>

        <div className="Player-back">
          <button type='button' onClick={() => props.history.goBack()}>
            Regresar
          </button>
        </div>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    playing: state.playing,
  }
}

const mapDispatchToProps = {
  getVideoSource
}

//obtengo el playing del estado
//pero previamente, obtengo el get de el

export default connect(mapStateToProps, mapDispatchToProps)(Player)
