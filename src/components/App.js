import React from 'react'
import Loot from './Loot'
import Wallet from './Wallet'

const App = () => {
	return (
		<div>
			<h1>Loot Check</h1>
			<hr />
			<Wallet />
			<hr />
			<Loot />
		</div>
	)
}

export default App
