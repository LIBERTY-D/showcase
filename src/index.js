import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Theme}from './components/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Theme>
      <App />
    </Theme>


);


 