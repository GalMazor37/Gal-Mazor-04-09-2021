export const addCityToFavorites = (favoriteToAdd = {}) => ({
  type: 'ADD_FAVORITE',
  favoriteToAdd
});

export const removeCityFromFavorites = (key = '') => ({
  type: 'REMOVE_FAVORITE',
  key
});

