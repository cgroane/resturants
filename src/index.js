import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
    {/* provider */}
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, 
document.getElementById('root'));
registerServiceWorker();
