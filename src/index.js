import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { ThemeProvider } from '@mui/material/styles';

import './index.css';
import rootSaga from './sagas';
import reducer from './reducers';
import App from './containers/App';
import theme from './theme'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
   reducer,
   applyMiddleware(sagaMiddleware),);
   sagaMiddleware.run(rootSaga);

   render(
   <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
   </Provider>,
document.getElementById('root'),
);if (module.hot) { module.hot.accept(App);}

