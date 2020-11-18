import React from 'react'
import { shallow } from 'enzyme'
import 'jest-enzyme'

import { Wallet } from './wallet'

describe('Wallet', () => {
	const props = { balance: 20 }
	const wallet = shallow(<Wallet {...props} />)

	it('renders', () => {
		expect(wallet).toMatchSnapshot()
	})

	it('displays the balance from props', () => {
		expect(wallet.find('.balance').text()).toEqual(
			`Wallet balance: ${props.balance}😎`
		)
	})
})
