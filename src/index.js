import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider as Prov } from 'react-redux';
import store from "./redux/store"

ReactDOM.render(



  <React.StrictMode>
    <Prov store={store}>
    
      <BrowserRouter>
        <App />
      </BrowserRouter>

    </Prov>
  </React.StrictMode>,
  document.getElementById('root')
);


