import { createStore , applyMiddleware} from 'redux';
import  rootReducer   from '../redux/rootReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import watchSignInRequest from '../redux/sagas';

const sagaMiddleware = createSagaMiddleware()
const store  = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watchSignInRequest)
export default store ;