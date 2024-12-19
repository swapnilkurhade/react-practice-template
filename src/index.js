import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* ====Redux-toolkit */}
    {/* <Provider store={store}>
      <App />
    </Provider> */}

    {/* Zustand */}

    <App/>
  </React.StrictMode>
);


