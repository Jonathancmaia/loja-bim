import React from 'react';
import Routes from './Routes.js';
import { Provider } from 'react-redux';
import { store } from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Helmet from "react-helmet";

import {Loading, Alert, Confirm, Notify} from './view/components';

document.title = "Nozes Trump";

const App = () => {
  return (
  <Provider store={store}>
    <Helmet>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
    <Loading/>
    <Alert/>
    <Confirm/>
    <Notify/>
    <Routes />
  </Provider>
  )
};

export default App;
