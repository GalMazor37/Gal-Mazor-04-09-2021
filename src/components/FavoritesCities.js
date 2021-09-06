import React from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import FavoritesCitiesCard from './FavoritesCitiesCard.js';
import { connect } from 'react-redux';
import { removeCityFromFavorites } from '../reducersActions/favoritesActions.js';
import '../styles/FavoritesCities.css';

export const FavoritesCities = (props) => {
  const removeCityFromFavorites = (e) => {
    props.removeCityFromFavorites(e);
  };
  return (
    <React.Fragment>
      <div className='card'>
        {props.favorites.map((favoriteCity, idx) => {
          return (
            <div className='singleFavoriteCity' key={'favoriteCity' + idx} id={'favoriteCity' + idx}>
              <FavoritesCitiesCard item={favoriteCity} callback={removeCityFromFavorites} />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state, props) => ({
  favorites: state.favorites,
});

const mapDispatchToProps = (dispatch, props) => ({
  removeCityFromFavorites: (key) => dispatch(removeCityFromFavorites(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesCities);
