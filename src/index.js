import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // needs to specify filepath
// import App from './App'; // if no extension specified, assume is .js file
import Hello from './Hello';
import reportWebVitals from './reportWebVitals';
import 'tachyons'; // installed via npm. Useful classes for HTML tags

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// 'greeting' is a property that we can add for class tags
// this will be available in Hello.js for us to use
ReactDOM.render(
  <Hello greeting={'React Ninja'}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
