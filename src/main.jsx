import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';

import { ThemeProvider } from 'styled-components';
import { theme } from 'constants';
import { PersistGate } from 'redux-persist/integration/react';

import 'modern-normalize';
import { GlobalStyle } from 'styles';

import App from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter basename="goit-react-hw-07-todo-tasks">
            <GlobalStyle />
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
