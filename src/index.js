import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomePage from "./HomePage"
import Islanders from "./islanders"
import Nelson from "./nelson";

ReactDOM.render(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/islanders" element={<Islanders/>} />
      <Route path="/bn2000" element={<Nelson/>} />
    </Routes>

  </BrowserRouter>,

  document.getElementById('root')
);