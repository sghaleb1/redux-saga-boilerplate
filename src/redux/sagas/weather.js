import {call, put, takeEvery, fork} from 'redux-saga/effects';
import * as service from '../../services/api';
import * as actions from '../actions/weather';
import * as types from '../actions/actionTypes';

function* fetchWeather(action){ //Worker
  try{
    yield put(actions.requestWeather());
    const [ weather ] = yield [
      call(service.getWeather, action.city)
    ];console.log('SAGA call weather', weather)
    yield put(actions.receiveWeather( weather));    
  } catch(e){
    yield put(actions.receiveWeatherFailed());
  }
}

function* watchFetchWeather(){ //Wacther
  yield takeEvery(types.FETCH_WEATHER, fetchWeather);
}

export default function* weatherSaga(){
  yield fork(watchFetchWeather);
}