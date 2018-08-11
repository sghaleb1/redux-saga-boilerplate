import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from './redux/actions/weather';

class SearchBar extends Component { 
  constructor(props) { 
  super(props) 
  
    this.state = { term: '' }; 
    this.onInputChange = this.onInputChange.bind(this); 
  } 
  
  onInputChange(e) { 
    console.log(e.target.value); 
    this.setState({ term: e.target.value }); 
  } 
  
  render() { 
    return ( 
    <div><form> 
    <input 
    value = {this.state.term} 
    placeholder="enter city here" 
    onChange = {this.onInputChange}/> 
    <button onClick={this.stuffThis}>Submit</button> 
    </form></div> 
    ) 
  } 
}

const mapStateToProps = (state) => {
	return {
    weather: state.weatherInfo.weather
  }
};
export default connect(mapStateToProps, {fetchWeather})(SearchBar);