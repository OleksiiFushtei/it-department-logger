import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteTechnician } from '../../actions/technicianActions'

import M from 'materialize-css/dist/js/materialize.min.js'

const TechnicianItem = ({ technician, deleteTechnician }) => {
	const onDelete = () => {
		deleteTechnician(technician.id)
		M.toast({ html: 'Technician deleted' })
	}

	return (
		<li className="collection-item">
			<div>
				{technician.firstName} {technician.lastName}
				<a href="#!" className="secondary-content" onClick={onDelete}>
					<i className="material-icons grey-text">delete</i>
				</a>
			</div>
		</li>
	)
}

TechnicianItem.propTypes = {
	technician: PropTypes.object.isRequired,
	deleteTechnician: PropTypes.func.isRequired
}

export default connect(null, { deleteTechnician })(TechnicianItem)
