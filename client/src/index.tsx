////////////////////////////
// INDEX.JS FILE
// importing all top level modules

import React from 'react';
import ReactDOM from 'react-dom';

// import react-router-dom
import { BrowserRouter } from 'react-router-dom';

// import persist gate to allow desired redux reducers to persist after a reload
import { PersistGate } from 'redux-persist/integration/react';
// import redux
import { Provider } from 'react-redux';
import { store, persistor } from './redux';

// import sass
import './sass/main.scss';

// import main App.js
import App from './App.container';

import { register } from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App
          checkUserSessionFunc={() => {}}
          match={{ isExact: true, params: {}, path: '', url: '' }}
        />
      </PersistGate>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);

register();
