export const updateCities = (cities = []) => ({
  type: 'UPDATE_CITIES_LIST',
  cities
});

export const updateFilteredCities = (filteredCities = []) => ({
  type: 'UPDATE_FILTERED_CITIES',
  filteredCities
});

export const updateSelectedCity = (selectedCity = { name: '', Key: null }) => ({
  type: 'UPDATE_SELECTED_CITY',
  selectedCity
});

export const updateSelectedCityForecast = (selectedCityCurrentForecast = {}, selectedCity1DayForecast = {}, selectedCity5DaysForecast = {}) => ({
  type: 'UPDATE_SELECTED_CITY_FORECAST',
  selectedCityCurrentForecast,
  selectedCity1DayForecast,
  selectedCity5DaysForecast
});
