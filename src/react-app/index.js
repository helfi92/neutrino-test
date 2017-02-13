import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { AppContainer } from 'react-hot-loader';
import Root from './root';
import reducer from './reducer';

const store = applyMiddleware()(createStore)(reducer);
const rootEl = document.getElementById('root');

const renderApp = (Component = Root) => {
  render(
    <AppContainer>
        <Component key={module.hot ? new Date() : undefined} store={store} />
    </AppContainer>,
    rootEl
  );
};

// This is needed for hot-module-replacement
if (module.hot) {
  module.hot.accept('./reducer', () => {
    store.replaceReducer(reducer);
  });

  module.hot.accept('./root', () => renderApp());
}

renderApp();
