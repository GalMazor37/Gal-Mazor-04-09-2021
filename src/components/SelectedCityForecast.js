import React from 'react';
import regeneratorRuntime from 'regenerator-runtime';
// import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { connect } from 'react-redux';
import { addCityToFavorites } from '../reducersActions/favoritesActions.js';
import '../styles/searchCities.css';
import moment from 'moment';

export const SelectedCityForecast = (props) => {
  const addCityToFavorites = (event) => {
    props.addCityToFavorites({
      selectedCity: props.selectedCity,
      curretnForecast: props.mainState.selectedCityCurrentForecast,
      oneDayForecast: props.mainState.selectedCity1DayForecast,
      fiveDaysForecast: props.selectedCity5DaysForecast
    });
  };

  return (
    <React.Fragment>
      <div className='selectedCity5DaysForecast'>
        <div className='header_5days'>
          <div className='cityName5days'>{props.selectedCity.LocalizedName}</div>
          <button onClick={addCityToFavorites}>Add to favorites</button>
        </div>
        <div className='display5days'>
          {props.selectedCity5DaysForecast.DailyForecasts.map((currentForecast, idx) => {
            return (
              <div className='oneDayForecast' key={idx}>
                <div className='oneDayForecast_weather'>{moment(currentForecast.Date).format('dddd')} </div>
                <div className='oneDayForecast_weather'>{moment(currentForecast.Date).format('DD/MM')}</div>

                <div className='oneDayForecast_weather'>
                  {currentForecast.Temperature.Minimum.Value}° - {currentForecast.Temperature.Maximum.Value}°
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state, props) => ({
  selectedCity: state.searchCity.selectedCity,
  selectedCity5DaysForecast: state.searchCity.selectedCity5DaysForecast,
  mainState: state.searchCity,
});

const mapDispatchToProps = (dispatch, props) => ({
  addCityToFavorites: (favoriteCity) => dispatch(addCityToFavorites(favoriteCity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedCityForecast);
