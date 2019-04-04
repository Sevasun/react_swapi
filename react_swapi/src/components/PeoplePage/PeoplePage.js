import React, {Component} from 'react';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import ErrorIndicator from '../ErrorIndicator';
import SwapiService from '../../services/swapi-service';

const Row = ({ left, right }) => {
    return (
        <div className="row mb-2">
            <div className="col-md-6">
                { left }
            </div>
            <div className="col-md-6">
                { right }
            </div>
        </div>
    );
}

export default class PeoplePage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedPerson: 3,
        hasError: false
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    componentDidCatch() {
        this.setState({
            hasError: true
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
            <PersonDetails
                personId={this.state.selectedPerson} />
        );

        return (
            <Row 
                left={ itemList }
                right={ personDetails } />
        );
    }
};