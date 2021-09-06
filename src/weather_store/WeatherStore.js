import { createStore, combineReducers } from 'redux';
import SearchCityReducer from '../reducers/SearchCityReducer';
import FavoritesReducer from '../reducers/FavoritesReducer';

export default () => {
  const store = createStore(
    combineReducers({
      searchCity: SearchCityReducer,
      favorites: FavoritesReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
