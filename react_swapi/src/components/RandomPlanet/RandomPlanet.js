import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import PlanetView from './PlanetView';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {
	constructor() {
		super();

		this.updatePlanet();
	};

	swapiService = new SwapiService();

	state = {
		planet: {},
		loading: true
	}

	onPlanetLoaded = (planet) => {
		this.setState({ 
			planet,
			loading: false,
			error: false
		});
	};

	onError = (err) => {
		this.setState({
			error: true,
			loading: false
		});
	};

	updatePlanet() {
		const id = Math.floor(Math.random()*25 + 1);

		this.swapiService
			.getPlanet(id)
			.then(this.onPlanetLoaded)
			.catch(this.onError);
	};

	render() {
		const { planet, loading, error } = this.state;

		const hasData = !(loading || error);

		const spinner = loading ? <Spinner /> : null;
		const content = hasData ? <PlanetView planet={ planet } /> : null;
		const errorMessage = error ? <ErrorIndicator /> : null;

		return (
			<div className="random-planet jumbotron rounded">
				{ spinner }
				{ content }
				{ errorMessage }
			</div>
		);
	};
};