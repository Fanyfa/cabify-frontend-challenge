import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AppProvider from './providers/App';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>, 
  document.getElementById('root')
);
registerServiceWorker();
