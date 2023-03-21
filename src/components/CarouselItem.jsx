import React from 'react';

import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions';

import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png'

const CarouselItem = (props) => {

  const { cover, title, year, contentRating, duration, id } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      //guardo de un elemento su title, year, etc, su info
      cover, title, year, contentRating, duration, id
    })
  }

  const handleDeleteFavorite = (itemID) => {
    //elimina con ese itemID
    props.deleteFavorite(itemID)
  }

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
          {
            //si el componente es una lista (myLisst), renderiza delte, sino plus
            !!(props.isList) ?
              <img
                className="carousel-item__details--img"
                src={removeIcon}
                alt="Delete Icon"
                onClick={() => handleDeleteFavorite(id)}
              />
              :
              <img
                className="carousel-item__details--img"
                src={plusIcon}
                alt="Plus Icon"
                onClick={handleSetFavorite}
              />

          }


        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  )
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

const mapDispachToProps = {
  setFavorite,
  deleteFavorite,
}

export default connect(null, mapDispachToProps)(CarouselItem);