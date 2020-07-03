import { DO_LOGIN,LOGIN_SUCCESS,LOGIN_FAILED, SETEMAIL,SETPASSWORD } from '../constants';

const initialState = {
    isLoading : false,
    loginResponse : {},
    loginError: '',
    email : '',
    password: ''
}
const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case DO_LOGIN: return {
            ...state,
            isLoading :true,
            email : state.email,
            password: state.password,
            loginError: ''
        }
        case LOGIN_SUCCESS: return {
            ...state,
            isLoading : false,
            loginResponse: action.response,
            loginError: ''
        }
        case LOGIN_FAILED : return {
            ...state,
            isLoading :false,
            loginError: 'Login Failed',
            loginResponse: {}
        }
        case SETEMAIL : return {
            ...state,
            email : action.email,
            password: state.password
        }
        case SETPASSWORD : return {
            ...state,
            email: state.email,
            password: action.password
        }
        default: return state ;
    }
}
export default LoginReducer ;