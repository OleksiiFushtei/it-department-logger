import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTechnician } from '../../actions/technicianActions'

import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechnicianModal = ({ addTechnician }) => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')

	const onSubmit = () => {
		if (firstName === '' || lastName === '') {
			M.toast({ html: 'Please enter the first and last name' })
		} else {
			addTechnician({
				firstName,
				lastName
			})
			M.toast({ html: `${firstName} ${lastName} was added` })
			// Clear fields
			setFirstName('')
			setLastName('')
		}
	}

	return (
		<div id="add-technician-modal" className="modal">
			<div className="modal-content">
				<h4>New Technician</h4>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="firstName"
							value={firstName}
							onChange={e => setFirstName(e.target.value)}
						/>
						<label htmlFor="firstName" className="active">
							First name
						</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="lastName"
							value={lastName}
							onChange={e => setLastName(e.target.value)}
						/>
						<label htmlFor="lastName" className="active">
							Last name
						</label>
					</div>
				</div>
			</div>
			<div className="modal-footer">
				<a
					href="#!"
					onClick={onSubmit}
					className="modal-close waves-effect blue darken-2 btn"
				>
					Enter
				</a>
			</div>
		</div>
	)
}

AddTechnicianModal.propTypes = {
	addTechnician: PropTypes.func.isRequired
}

export default connect(null, { addTechnician })(AddTechnicianModal)
