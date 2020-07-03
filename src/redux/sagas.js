
import { put, takeEvery, takeLatest, select } from 'redux-saga/effects';
import { DO_LOGIN, LOGIN_SUCCESS } from '../redux/constants';
import * as firebase from "firebase";


export default function* loginSuccess () {
   console.log('Login Success ');
}

// export default function* watchSignInRequest() {
//     yield takeEvery('', loginSuccess)
//   }