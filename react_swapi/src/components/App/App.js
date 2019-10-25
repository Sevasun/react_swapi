import React, {Component} from 'react';

import Header from '../Header';
// import RandomPlanet from '../RandomPlanet';
// import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails/ItemDetails';
// import PeoplePage from '../PeoplePage';
import Row from '../Row';
import Record from '../Record';

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
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails 
        itemId={9}
        getData={getStarship}
        getImageUrl={getStarshipImage} >
          <Record field="model" label="Model" />
          <Record field="length" label="Length" />
          <Record field="length" label="Length" />
        </ItemDetails>
    );
    return (
      <ErrorBoundry>
        <div className="container">
          <Header />
          <Row left={personDetails} right={starshipDetails} />
        </div>
      </ErrorBoundry>
    );
  };
};