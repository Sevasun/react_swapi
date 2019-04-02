import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner';

import './PersonDetails.css';

export default class PersonDetails extends Component {
  state = {
    person: null,
    isLoaded: true
  };

  swapiService = new SwapiService();

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    };
    this.setState({ isLoaded: false });
    this.swapiService
        .getPerson(personId)
        .then((person) => {
          this.setState({
            person
          });
        })
        .then(() => {
          this.setState({isLoaded: true});
        });
  };

  componentDidMount() {
    this.updatePerson();
  };

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  };

  render() {
    if (!this.state.person) {
      return <span>Select a person from a list</span>
    };

    if (!this.state.isLoaded) {
      return <Spinner />;
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.person;

    return (
      <div className="person-details card">
        <img className="person-image"
          alt="description"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
          <h4>{ name }</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{ gender }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{ birthYear }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{ eyeColor }</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}