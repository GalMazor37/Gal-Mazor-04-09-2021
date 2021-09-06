import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import WeatherStore from './weather_store/WeatherStore';

import 'normalize.css/normalize.css';
// import './styles/styles.scss';
// import 'react-dates/lib/css/_datepicker.css';

const store = WeatherStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));