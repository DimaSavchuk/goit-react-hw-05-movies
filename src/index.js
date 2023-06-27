import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'services/request/stor';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-05-movies">
        <App />
      </BrowserRouter>{' '}
    </Provider>{' '}
  </React.StrictMode>
);
