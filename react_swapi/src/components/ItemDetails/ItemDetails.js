import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner';


import './ItemDetails.css';


export default class ItemDetails extends Component {
  state = {
    item: null,
    isLoaded: true,
    image: null
  };

  swapiService = new SwapiService();

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    };
    this.setState({ isLoaded: false });
    getData(itemId)
        .then((item) => {
          this.setState({
            item,
            image: getImageUrl(item)
          });
        })
        .then(() => {
          this.setState({isLoaded: true});
        });
  };

  componentDidMount() {
    this.updateItem();
  };

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  };

  render() {
    if (!this.state.item) {
      return <span>Select a person from a list</span>
    };

    if (!this.state.isLoaded) {
      return <Spinner />;
    }

    const { item } = this.state;

    // const { id, name, gender, birthYear, eyeColor } = item;
    const { name } = item;

    return (
      <div className="person-details card">
        <img className="person-image"
          alt="description"
          src={ this.state.image } />

        <div className="card-body">
          <h4>{ name }</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, {item});
              })
            }
          </ul>
        </div>
      </div>
    )
  }
};