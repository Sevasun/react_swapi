import React, {Component} from 'react';

import Header from '../Header';
// import RandomPlanet from '../RandomPlanet';
// import ItemList from '../ItemList';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
// import PeoplePage from '../PeoplePage';
import Row from '../Row';

import './App.css';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../ErrorBoundry';

export default class App extends Component {

  swapiService = new SwapiService();
  state = {
    selectedItem: null
  };

  render() {
    const { getPerson, getStarship, getPlanet, getPersonImage, getStarshipImage } = this.swapiService;
    const personDetails = (
      <ItemDetails 
        itemId={6}
        getData={getPerson}
        getImageUrl={getPersonImage} >
        <Record field="gender" label="Gender" />
      </ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails 
        itemId={9}
        getData={getStarship}
        getImageUrl={getStarshipImage} >
          <Record field="gender" label="Gender" />
        </ItemDetails>
    );
    return (
      <ErrorBoundry>
        <div className="container">
          <Header />
          {/* <RandomPlanet />
          <PeoplePage /> */}

          <Row left={personDetails} right={starshipDetails} />

          {/* <div className="row mb2">
            <div className="col-md-6">
                <ItemList
                    renderItem={ (item) => item.name }
                    getData = { this.swapiService.getAllPlanets }
                    onItemSelected={this.onPersonSelected} />
            </div>
            <div className="col-md-6">
                <ItemDetails
                    personId={this.state.selectedPerson} />
            </div>
          </div> */}
        </div>
      </ErrorBoundry>
    );
  };
};