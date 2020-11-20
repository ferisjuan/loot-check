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

	it('creates an input to deposit into or withdraw from the balance', () => {
		expect(wallet.find('.input-wallet').exists()).toBe(true)
	})

	describe('when the user types into the wallet input', () => {
		const userBalance = ' 25'

		beforeEach(() => {
			wallet
				.find('.input-wallet')
				.simulate('change', { target: { value: userBalance } })
		})

		it('updates the local wallet balance and converts it to a number', () => {
			expect(wallet.state().balance).toEqual(parseInt(userBalance, 10))
		})
	})
})
