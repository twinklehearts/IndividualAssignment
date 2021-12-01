import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '.';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { render } from "react-dom";
import reportWebVitals from './reportWebVitals';
import { Home } from "./App.js"
import { Results } from "./results.js"
import 'bootstrap/dist/css/bootstrap.min.css';


// function onChange(value) {
//   console.log("Captcha value:", value);
// }
ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" exact component={Results} />
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
