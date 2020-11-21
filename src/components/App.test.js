import React from 'react'
import { shallow } from 'enzyme'
import 'jest-enzyme'

import App from './App'

describe('App', () => {
	const app = shallow(<App />)

	it('Renders properly', () => {
		expect(app).toMatchSnapshot()
	})

	it('contains a wallet component', () => {
		// console.log(app.debug())
		expect(app.find('Connect(Wallet)').exists()).toBe(true)
	})

	it('contains a connected Loot component', () => {
		expect(app.find('Connect(Loot)').exists()).toBe(true)
	})
})
