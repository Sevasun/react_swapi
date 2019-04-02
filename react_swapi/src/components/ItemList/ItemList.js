import React, { Component } from 'react';

import './ItemList.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner';

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null
  };

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then((peopleList) => {
        this.setState({
          peopleList
        });
      });
  };

  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li 
          key={id} 
          className="list-group-item"
          onClick ={() => this.props.onItemSelected(id)}
          >
          { name }
        </li>
      );
    })
  };

  render() {
    const { peopleList } = this.state;
    if (!peopleList) {
      return <Spinner />
    };

    return (
      <ul className="item-list list-group">
        { this.renderItems(peopleList) }
      </ul>
    );
  }
}