import { combineReducers } from 'redux';
import login_rd from './login_rd';

const rootReducer = combineReducers({
  loginStore: login_rd
});
export default rootReducer;
