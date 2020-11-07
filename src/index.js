import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'


import { App } from './app'
import { store } from './store'


const RenderApp = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <App />
      </AppContainer>
    </Provider>
  )
}

ReactDOM.render(
  <RenderApp />,
  document.getElementById('root')
);


if (module.hot) {
  module.hot.accept()
}

require('react-hot-loader/patch')