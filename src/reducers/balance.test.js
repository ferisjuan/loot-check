import * as constants from '../actions/constants'
import balanceReducer from './balance'
import balanceReducer2 from './balance'

describe('balanceReducer', () => {
	describe('when initializing', () => {
		const balance = 10
		it('sets a balance', () => {
			expect(
				balanceReducer(undefined, { type: constants.SET_BALANCE, balance })
			).toEqual(balance)
		})

		describe('then re-initialize', () => {
			it('Reads the balance from the cookies', () => {
				expect(balanceReducer2(undefined, {})).toEqual(balance)
			})
		})
	})

	it('deposits into the balance', () => {
		const deposit = 20
		const initialState = 5

		expect(
			balanceReducer(initialState, { type: constants.DEPOSIT, deposit })
		).toEqual(deposit + initialState)
	})

	it('withdraws from the balance', () => {
		const withdraw = 20
		const initialState = 300

		expect(
			balanceReducer(initialState, {
				type: constants.WITHDRAW,
				withdraw,
			})
		).toEqual(initialState - withdraw)
	})
})
