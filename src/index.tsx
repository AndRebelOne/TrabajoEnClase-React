import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Trabajar CSS siempre separado por componentes

// const element = <h1>Hola soy un tag</h1>

// const saludo = (nombre:string)=> {
//   return <p>Hola {nombre}</p>
// }

// const element2 = React.createElement("h1", {className:"title"}, "Hola chicos");

// console.log(element);

ReactDOM.render(
  <React.StrictMode>
    <App />
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
