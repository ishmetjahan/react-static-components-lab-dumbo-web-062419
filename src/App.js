import React, { Component } from 'react';
//import CatComponent from './CatComponent.js';
//import { EinsteinQuoteComponent } from './EinsteinQuoteComponent';
import MouseComponent from './MouseComponent';
import CatComponent from './CatComponent';
import EinsteinQuoteComponent from './EinsteinQuoteComponent';

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">

			<CatComponent />
			<EinsteinQuoteComponent />
			<MouseComponent />
			</div>
		);
	}
}

export default App;
