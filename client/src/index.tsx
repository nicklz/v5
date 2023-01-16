import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

/* eslint-disable */

let ascii = `
░██╗░░░░░░░██╗██╗░░██╗░█████╗░████████╗  ░█████╗░██████╗░███████╗  ██╗░░░██╗░█████╗░██╗░░░██╗
░██║░░██╗░░██║██║░░██║██╔══██╗╚══██╔══╝  ██╔══██╗██╔══██╗██╔════╝  ╚██╗░██╔╝██╔══██╗██║░░░██║
░╚██╗████╗██╔╝███████║███████║░░░██║░░░  ███████║██████╔╝█████╗░░  ░╚████╔╝░██║░░██║██║░░░██║
░░████╔═████║░██╔══██║██╔══██║░░░██║░░░  ██╔══██║██╔══██╗██╔══╝░░  ░░╚██╔╝░░██║░░██║██║░░░██║
░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║░░░██║░░░  ██║░░██║██║░░██║███████╗  ░░░██║░░░╚█████╔╝╚██████╔╝
░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░  ╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝  ░░░╚═╝░░░░╚════╝░░╚═════╝░

██╗░░░░░░█████╗░░█████╗░██╗░░██╗██╗███╗░░██╗░██████╗░  ░█████╗░████████╗░█████╗░
██║░░░░░██╔══██╗██╔══██╗██║░██╔╝██║████╗░██║██╔════╝░  ██╔══██╗╚══██╔══╝██╔══██╗
██║░░░░░██║░░██║██║░░██║█████═╝░██║██╔██╗██║██║░░██╗░  ███████║░░░██║░░░╚═╝███╔╝
██║░░░░░██║░░██║██║░░██║██╔═██╗░██║██║╚████║██║░░╚██╗  ██╔══██║░░░██║░░░░░░╚══╝░
███████╗╚█████╔╝╚█████╔╝██║░╚██╗██║██║░╚███║╚██████╔╝  ██║░░██║░░░██║░░░░░░██╗░░
╚══════╝░╚════╝░░╚════╝░╚═╝░░╚═╝╚═╝╚═╝░░╚══╝░╚═════╝░  ╚═╝░░╚═╝░░░╚═╝░░░░░░╚═╝░░

Oh probably looking for my email... I guess you can have it since you know what console is  
nkuhn001@gmail.com (or nicklz22@yahoo.com but it just routes to my Gmail)`;

console.log(ascii);
/* eslint-enable */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
