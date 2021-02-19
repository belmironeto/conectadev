import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseLine from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';
import { SettingsProvider } from './context/SettingsContext';
import { getSettings } from './utils/settings';

const settings = getSettings();

ReactDOM.render(
  <React.StrictMode>
    <CssBaseLine />
    <Provider store={store}>
      <SettingsProvider settings={settings}>
        <App />
      </SettingsProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
