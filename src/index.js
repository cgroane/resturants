import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    {/* provider */}
        
            <App />
        
    </BrowserRouter>
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();

