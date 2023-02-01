import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from "react-router-dom";
import store from './store';
import { StoreProvider } from 'easy-peasy'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <StoreProvider store={store}>
            <App />
        </StoreProvider>
    </Router>
)