import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export const history = createHistory({
    basename: '',             // The base URL of the app (see below)
    forceRefresh: false,     // Set true to force full page refreshes
    keyLength: 6,             // The length of location.key
    getUserConfirmation: (message, callback) => callback(window.confirm(message))
  });
  
const middleware = routerMiddleware(history);

let array_middleware = [];
array_middleware.push(thunk);
array_middleware.push(middleware);

function getcompose() {
    if(process.env.NODE_ENV.trim() !== 'production'){
        return composeWithDevTools(applyMiddleware(...array_middleware));
    } else {
        return applyMiddleware(...array_middleware);
    }
}
const initialState = {};
export default function configureStore() {
    return createStore(
        rootReducer,
        initialState,
        getcompose()
    );
}
