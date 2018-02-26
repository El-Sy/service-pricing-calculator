import 'milligram/dist/milligram.css';
import './style';

import Router from 'preact-router';
import { Component } from 'preact';

import ServiceMenu from './components/ServiceMenu';
import DateTimePicker from './components/DateTimePicker/DateTimePicker';
import Summary from './components/Summary';

class App extends Component {

	render() {
		return (
			<Router>
				<ServiceMenu path="/" />
				<DateTimePicker path="/calendar/:type" />
				<Summary path="/summary" />
			</Router>
		);
	}
}


export default App;
