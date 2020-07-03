import { DASHBOARD_LOAD , DASHBOARD_LOAD_SUCCESS } from '../constants';

const loadDashBoard  = () => {
     return {
        type : DASHBOARD_LOAD,
     }
}
const dashBoardLoadSuccess = () => {
    return  {
        type : DASHBOARD_LOAD_SUCCESS
    }
}

export default {
    loadDashBoard,
    dashBoardLoadSuccess

}