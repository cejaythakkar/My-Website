import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore , combineReducers , applyMiddleware , compose  } from 'C:/Users/bdoshi/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import counterReducer  from './store/reducers/counter';
import resultsReducer  from './store/reducers/results';
import configReducer  from './store/reducers/config';
import spinnerReducer from './store/reducers/spinner';
import './index.css';

const rootReducer = combineReducers({
    ctr : counterReducer,
    res : resultsReducer,
    config : configReducer,
    spinner: spinnerReducer
})

const logger = ( store ) => {
    return ( next ) => {
        return ( action ) => {
            console.log(`[middleware] Dispatching`, action);
            const result = next(action);
            console.log(`[middleware] next state`, store.getState())
            return result;
        }   
    }
}

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer/* ,composeEnhancer(applyMiddleware( logger ,thunk )) */);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
