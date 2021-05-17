import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let currDate = new Date();
let cssStyle = {}
currDate = currDate.getHours();
let greeting = '';
if(currDate >=1  && currDate <12){
  greeting = 'Good Morning';
  cssStyle.color = 'green';
}else if(currDate >=12 && currDate <17){
  greeting = 'Good Afternoon';
  cssStyle.color = 'orange';
}else if(currDate >=17 && currDate <22){
  greeting = 'Good Evening';
  cssStyle.color = 'blue';
}else{
  greeting = 'Good Night';
  cssStyle.color = 'red';
}


ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>Hello Sir, <span style = {cssStyle}>{greeting}</span></h1>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
