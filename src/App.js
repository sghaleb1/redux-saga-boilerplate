import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchWeather } from './redux/actions/weather';
import SearchBar from './SearchBar';

class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchWeather('Rome')
  }
  
  render() {
    const {fetching, weather, warningVisibility} = this.props
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SearchBar />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
	  fetching: state.weatherInfo.fetching,
    weather: state.weatherInfo.weather,
    warningVisibility: state.weatherInfo.warningVisibility
  }
};
export default connect(mapStateToProps, {fetchWeather})(App);