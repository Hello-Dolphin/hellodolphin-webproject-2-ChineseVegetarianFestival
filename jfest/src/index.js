import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './component/App';
import Story from './component/story';
import Reason from './component/reason';
import Food from './component/food';
import Member from './component/member';
import reportWebVitals from './reportWebVitals';
import Navbar from './component/navbar';


ReactDOM.render(
  <React.StrictMode>
    
    <Navbar />
    <App />
    <Story />
    <Reason />
    <Food />
    <Member />
  
    

    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
