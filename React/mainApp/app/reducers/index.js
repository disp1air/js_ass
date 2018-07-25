import { combineReducers } from 'redux';
import FilmsReducer from './FilmsReducer';
import ButtonReducer from './ButtonReducer';
import MyReducer from './MyReducer';

const appReducer = combineReducers({
  filmsProp: FilmsReducer,
  buttonValueForSearch: ButtonReducer,
  myData: MyReducer,
});

export default appReducer;
