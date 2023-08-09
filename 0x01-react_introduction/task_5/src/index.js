import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App/App';
// import reportWebVitals from './reportWebVitals';
import Notifications from './Notifications/Notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const notifications = ReactDOM.createRoot(document.getElementById('root-notifications'));
notifications.render(
  <React.StrictMode>
     <Notifications />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
<<<<<<< HEAD
// reportWebVitals();
=======
// reportWebVitals();
>>>>>>> 4227a85c87e16b80a901bdda94ee8e2ad38fee6a
