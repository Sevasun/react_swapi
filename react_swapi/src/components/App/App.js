import React, { Component } from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';

import './App.css';
import SwapiService from '../../services/swapi-service';
// import ErrorBoundry from '../ErrorBoundry';

export default class App extends Component {

  swapiService = new SwapiService();

  render() {
    return (
      <div className="container">
        <Header />
        <RandomPlanet />

        <div className="row mb-2">
          <div className="col-md-6">
            <ItemList />
          </div>
          <div className="col-md-6">
            <PersonDetails />
          </div>
        </div>
      </div>
    );
  };
};