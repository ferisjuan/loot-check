import React from 'react'
import { shallow } from 'enzyme'
import 'jest-enzyme'

import { Wallet } from './wallet'

describe('Wallet', () => {
	const mockDeposit = jest.fn()
	const mockWithdraw = jest.fn()

	const props = {
		balance: 20,
		deposit: mockDeposit,
		withdraw: mockWithdraw,
	}
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

		describe('and the user makes a deposit', () => {
			beforeEach(() => {
				wallet.find('.btn-deposit').simulate('click')
			})

			it('dispatches the `deposit()` it receibes from props with the local balance', () => {
				expect(mockDeposit).toHaveBeenCalledWith(+userBalance)
			})
		})

		describe('and the user makes a withdraw', () => {
			beforeEach(() => {
				wallet.find('.btn-withdraw').simulate('click')
			})
			it('dispatches the `withdraw()` it receives from props with the local balance', () => {
				expect(mockWithdraw).toHaveBeenCalledWith(+userBalance)
			})
		})
	})
})
