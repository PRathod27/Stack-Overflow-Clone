import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Reducers from "./reducers";
import { Provider } from 'react-redux';
import ContextProvider from './context/Context';

const store = createStore( Reducers, compose (applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Provider>,
);
