import React from 'react';
import '../styles/FavoritesCities.css';

const FavoritesCitiesCard = function (props) {
  const removeCityFromFavorites = (event) => {
    if (props.callback instanceof Function) {
      props.callback(event.target.value);
    }
  };

  return (
    <React.Fragment>
      <div className='favoriteCityCard'>
        <div className='header_F_C_card'>
          <div className='header_div'>{props.item.selectedCity.LocalizedName}</div>
          <div className='header_div'>{props.item.curretnForecast[0].WeatherText}</div>
          <div className='header_div'>
            <span className='headerTemp_card'>{props.item.curretnForecast[0].Temperature.Metric.Value}°</span>
          </div>
          <div className='header_div'>
            <button onClick={removeCityFromFavorites} value={props.item.selectedCity.Key}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default FavoritesCitiesCard;
