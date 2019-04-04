import React, {Component} from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import PeoplePage from '../PeoplePage';

import './App.css';
import SwapiService from '../../services/swapi-service';

export default class App extends Component {

  swapiService = new SwapiService();
  state = {
    selectedPerson: null
  };

  render() {
    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <PeoplePage />

        <div className="row mb2">
          <div className="col-md-6">
              <ItemList
                  renderItem={ (item) => item.name }
                  getData = { this.swapiService.getAllPlanets }
                  onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col-md-6">
              <PersonDetails
                  personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  };
};