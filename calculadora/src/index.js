import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import Calculator from './main/Calculator';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <h1>Calculadora</h1>
    <Calculator />
  </div>
  , document.getElementById('root')
)
