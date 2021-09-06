import React, { useState, useEffect } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { url_1DayForecast, url_5DaysForecast, url_CurrentForecast, url_AutocompleteCitySearch, url_Apikey, apikey, url_CitySearchText, temperatureUnit } from '../API_info.js';

import { connect } from 'react-redux';
import { updateCities, updateFilteredCities, updateSelectedCity, updateSelectedCityForecast } from '../reducersActions/searchActions.js';

import SelectedCityForecast from './SelectedCityForecast.js';

export const CitySearch = (props) => {
  const [citySearch, setCitySearch] = useState('');
  const [noCitiesFound, setNoCitiesFound] = useState(false);
  const [forecast, setForecast] = useState(false);
  const [updateSelectedCity, setUpdateSelectedCity] = useState(false);
  const [noCitiesFound_length, setNoCitiesFound_length] = useState(0);

  async function fetchCity(cityToFind) {
    const response = await fetch(url_AutocompleteCitySearch + apikey + url_CitySearchText + cityToFind);
    const data = await response.json();
    createCityArrayFromJson_Accu(data);
    if (data.length) {
      createCityArrayFromJson_Accu(data);
    } else {
      setNoCitiesFound(true);
      setNoCitiesFound_length(cityToFind.length - 1);
      props.updateFilteredCities([]);
    }
  }

  async function fetchSelectedCityForecast(selectedCity) {
    const response_CurrentForecast = await fetch(url_CurrentForecast + selectedCity.Key + url_Apikey + apikey + temperatureUnit);
    const data_CurrentForecast = await response_CurrentForecast.json();
    const response_1DayForecast = await fetch(url_1DayForecast + selectedCity.Key + url_Apikey + apikey + temperatureUnit);
    const data_1DayForecast = await response_1DayForecast.json();
    const response_5DaysForecast = await fetch(url_5DaysForecast + selectedCity.Key + url_Apikey + apikey + temperatureUnit);
    const data_5DaysForecast = await response_5DaysForecast.json();

    props.updateSelectedCityForecast(data_CurrentForecast, data_1DayForecast, data_5DaysForecast);
    if (!forecast) {
      setForecast(true);
    } else {
      setUpdateSelectedCity(!updateSelectedCity);
    }
  }

  useEffect(() => {
    fetchSelectedCityForecast(props.selectedCity);
  }, []);

  const createCityArrayFromJson_Accu = (citiesJsonFormat = []) => {
    let newCitiesArray = [];
    newCitiesArray = citiesJsonFormat.map((city) => {
      let cityObj = { ...city, name: city.LocalizedName.toLowerCase() };
      return cityObj;
    });
    props.updateCities(newCitiesArray);
  };

  const handleOnCitySelected = (event) => {
    if (event.value.Key != props.selectedCity.Key) {
      props.updateSelectedCity(event.value);
      fetchSelectedCityForecast(event.value);
    }
  };

  const handleOnSearchInputChanged = (event) => {
    if (!noCitiesFound || noCitiesFound_length >= event.value.length) {
      if (noCitiesFound) {
        setNoCitiesFound(false);
        setNoCitiesFound_length(0);
      }
      if (event.value.length == 1 && citySearch.length == 0) {
        fetchCity(event.value);
      }
    }
    setCitySearch(event.value);
  };

  const setAutocompleteFilteredCities = (event) => {
    if (!noCitiesFound || noCitiesFound_length >= event.query.trim().length) {
      let innerFilteredCities;
      if (!event.query.trim().length) {
        innerFilteredCities = [...props.cities];
      } else {
        innerFilteredCities = props.cities.filter((city) => {
          return city.name.startsWith(event.query.toLowerCase());
        });
      }
      if (innerFilteredCities.length == 0) {
        fetchCity(event.query);
      } else {
        props.updateFilteredCities(innerFilteredCities);
      }
    }
  };

  return (
    <div className='card'>
      <AutoComplete
        value={citySearch}
        suggestions={props.filteredCities}
        completeMethod={setAutocompleteFilteredCities}
        field='name'
        onChange={handleOnSearchInputChanged}
        onSelect={handleOnCitySelected}
        placeholder='Search city'
      />

      {forecast ? <SelectedCityForecast updateForecast={updateSelectedCity} /> : null}
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  cities: state.searchCity.cities,
  filteredCities: state.searchCity.filteredCities,
  selectedCity: state.searchCity.selectedCity,
  selectedCityCurrentForecast: state.searchCity.selectedCityCurrentForecast,
  selectedCity1DayForecast: state.searchCity.selectedCity1DayForecast,
  selectedCity5DaysForecast: state.searchCity.selectedCity5DaysForecast,
});

const mapDispatchToProps = (dispatch, props) => ({
  updateCities: (cities) => dispatch(updateCities(cities)),
  updateFilteredCities: (filteredCities) => dispatch(updateFilteredCities(filteredCities)),
  updateSelectedCity: (selectedCity) => dispatch(updateSelectedCity(selectedCity)),
  updateSelectedCityForecast: (currentForecast, singleDayForecast, fiveDaysForecast) => dispatch(updateSelectedCityForecast(currentForecast, singleDayForecast, fiveDaysForecast)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CitySearch);
