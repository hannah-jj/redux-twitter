import { combineReducers } from 'redux';
import twitsReducer from './twits_reducer';

const rootReducer =  combineReducers({
  twits: twitsReducer
});

export default rootReducer;