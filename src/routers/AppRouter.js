import React from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WeatherDashboardPage from '../components/WeatherDashboardPage';
import FavoritesCities from '../components/FavoritesCities';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import '../styles/MainWeather.css';

const AppRouter = () => (
  <BrowserRouter>
    <div className='weatherFullAppCSS'>
      <Header />
      <Switch>
        <Route path='/' component={WeatherDashboardPage} exact={true} />
        <Route path='/favorites' component={FavoritesCities} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
