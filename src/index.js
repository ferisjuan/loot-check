import React from 'react'
import thunk from 'redux-thunk'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './reducers'

import App from './components/App'

render(
	<Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
		<App />
	</Provider>,
	document.getElementById('root')
)
