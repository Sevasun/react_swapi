import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'

import './RandomPlanet.css';

export default class RandomPlanet extends Component {
	constructor() {
		super();

		this.planetCount = 0;

		this.updatePlanet();
	};

	swapiService = new SwapiService();

	state = {
		planet: {}
	}

	onPlanetLoaded = (planet) => {
		this.setState({ planet });
	};

	updatePlanet() {
		// const id = Math.floor(Math.random()*25 + 2);

		const id = 12;

		// const id2 = this.swapiService.getAllPlanets().then((planets) => {
		// 	this.planetCount = planets.count;
		// });
		// console.log(this.planetCount);
		// console.log(Math.random()*(id2 + 1));

		this.swapiService
			.getPlanet(id)
			.then(this.onPlanetLoaded);
	};

	render() {
		const { planet: {id, name, population, rotationPeriod, diameter} } = this.state;

		return (
			<div className="random-planet jumbotron rounded">
				<img className="planet-image"
					alt="description"
					src={ `https://starwars-visualguide.com/assets/img/planets/${id}.jpg` } />
				<div>
					<h4>{ name }</h4>
					<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<span className="term">Population</span>
						<span>{ population }</span>
					</li>
					<li className="list-group-item">
						<span className="term">Rotation Period</span>
						<span>{ rotationPeriod }</span>
					</li>
					<li className="list-group-item">
						<span className="term">Diameter</span>
						<span>{ diameter }</span>
					</li>
					</ul>
				</div>
			</div>
		);
	};
};