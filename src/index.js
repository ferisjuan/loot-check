import React from 'react'
import rootReducer from './reducers/balance'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'

const store = createStore(rootReducer)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
