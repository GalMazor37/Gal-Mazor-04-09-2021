const searchCityReducerDefaultState = {
  cities: [],
  filteredCities: [],
  selectedCity: {
    Version: 1,
    name: 'tel aviv',
    Key: '215854',
    Type: 'City',
    Rank: 31,
    LocalizedName: 'Tel Aviv',
    Country: {
      ID: 'IL',
      LocalizedName: 'Israel',
    },
    AdministrativeArea: {
      ID: 'TA',
      LocalizedName: 'Tel Aviv',
    },
  },
  selectedCityCurrentForecast: {},
  selectedCity1DayForecast: {},
  selectedCity5DaysForecast: {},
};

export default (state = searchCityReducerDefaultState, action) => {
  switch (action.type) {
    case 'UPDATE_CITIES_LIST':
      return {
        ...state,
        cities: action.cities,
        filteredCities: action.cities,
      };
    case 'UPDATE_FILTERED_CITIES':
      return {
        ...state,
        filteredCities: action.filteredCities,
      };
    case 'UPDATE_SELECTED_CITY':
      return {
        ...state,
        selectedCity: action.selectedCity,
      };
    case 'UPDATE_SELECTED_CITY_FORECAST':
      return {
        ...state,
        selectedCityCurrentForecast: action.selectedCityCurrentForecast,
        selectedCity1DayForecast: action.selectedCity1DayForecast,
        selectedCity5DaysForecast: action.selectedCity5DaysForecast,
      };
    default:
      return state;
  }
};
