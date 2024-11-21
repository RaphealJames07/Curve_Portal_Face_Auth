import React from 'react';
import './index.css'
import App from './App.jsx'
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
            <ToastContainer />
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();