import {all} from 'redux-saga/effects';
import weather from './weather';

export default function* rootSaga() {
  yield all([
    weather()
  ]);
};