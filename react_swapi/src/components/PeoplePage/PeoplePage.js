import React, {Component} from 'react';
import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
import ErrorIndicator from '../ErrorIndicator';
import SwapiService from '../../services/swapi-service';
import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';


export default class PeoplePage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedPerson: 3
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        };

        const itemList = (
            <ItemList
                renderItem={ ({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})` }
                getData={ this.swapiService.getAllPeople }
                onItemSelected={this.onPersonSelected} />
        );

        const personDetails = (
            <ErrorBoundry>
                <ItemDetails personId={this.state.selectedPerson} />
            </ErrorBoundry>
        );

        return (
            <Row 
                left={ itemList }
                right={ personDetails } />
        );
    }
};