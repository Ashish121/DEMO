import { DO_LOGIN,LOGIN_SUCCESS,LOGIN_FAILED, SETEMAIL,SETPASSWORD } from '../constants';
const doLogin = (email, password) => {
    return {
        type : DO_LOGIN,
        email,
        password
    }
}
const loginSuccess = (response) => {
    return {
        type : LOGIN_SUCCESS,
        response
    }
}
const loginFailed = () => {
    return {
        type : LOGIN_FAILED
    }
}
const setEmailToStore = (email) => {
    return {
        type: SETEMAIL,
        email
    }
}
const setPasswordToStore = (password) => {
    return {
        type: SETPASSWORD,
        password
    }
}

export {
    doLogin,
    loginSuccess,
    loginFailed,
    setEmailToStore,
    setPasswordToStore
}