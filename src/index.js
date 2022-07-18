import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



//prvider is used to keep track of the store of the global state and that allows us to access store from anywhere inside of the app.
import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';

import { configureStore } from '@reduxjs/toolkit';

import thunk from "redux-thunk";

import reducer from "./redux/reducers/index";

import App from './App';


const store = configureStore({reducer:reducer}, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);



