const favoritesCitiesReducerDefaultState = [];

export default (state = favoritesCitiesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.favoriteToAdd];
    case 'REMOVE_FAVORITE':
      return state.filter(({ selectedCity }) => selectedCity.Key !== action.key);
    default:
      return state;
  }
};
