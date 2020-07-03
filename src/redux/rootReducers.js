import { combineReducers } from 'redux';
import LoginReducer from  './Login/loginReducer';
import loadDashBoardReducer from './Dashboard/dashboardReducer';

const rootReducer = combineReducers({
    login : LoginReducer,
    dashboard: loadDashBoardReducer
})

export default rootReducer ;