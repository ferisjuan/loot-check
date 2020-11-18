import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Wallet extends Component {
	render() {
		return (
			<div>
				<h3 className='balance'>Wallet balance: {this.props.balance}😎</h3>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	balance: state.balance,
})

export default connect(mapStateToProps, null)(Wallet)
