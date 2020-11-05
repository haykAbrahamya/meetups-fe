import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'


import { App } from './app';
import { store } from './store'


const RenderApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render(
  <RenderApp />,
  document.getElementById('root')
);
