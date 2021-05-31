import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import './index.css'; // needs to specify filepath
import reportWebVitals from './reportWebVitals';
import 'tachyons'; // installed via npm. Useful classes for HTML tags
import App from './containers/App'; // if no extension specified, assume is .js file
import { searchRobots, requestRobots } from './reducers';
// import Hello from './Hello'; // from previous lessons

const logger = createLogger();
const rootReducer = combineReducers({
    searchRobots, requestRobots
})

// creates a redux store
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

// App is the main parent JS file that contains the children
// Provider is sort of a wrapper for App, to use redux. it will store the state inside "store"
ReactDOM.render(
    <Provider store={store}>
        <App/> 
    </Provider>, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// 'greeting' is a property that we can add for class tags
// this will be available in Hello.js for us to use
// ReactDOM.render(
//   <Hello greeting={'React Ninja'}/>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
