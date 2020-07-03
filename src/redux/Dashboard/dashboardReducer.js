import { DASHBOARD_LOAD , DASHBOARD_LOAD_SUCCESS } from '../constants';

const initialState = {
    isLoading : false,
    userName : '',
    role : ''
}
const loadDashBoardReducer  = (state = initialState, action) => {
    switch (action.type) {
        case DASHBOARD_LOAD: return {
            ...state,
            isLoading : true
        }
        case DASHBOARD_LOAD_SUCCESS : return {
            ...state,
            isLoading : false,
            userName : state.userName,
            role: state.role
        }
        default: return state ;
    }
}
export default loadDashBoardReducer ;