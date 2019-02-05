import React from "react";
import ReactDOM from "react-dom";

import App from './Components/App';
import { Provider } from "react-redux";
import store from "./store";
import WebFont from 'webfontloader';

WebFont.load({
    google: {
      families: ['Anton', 'sans-serif']
    }
  });

ReactDOM.render (
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root')
);
