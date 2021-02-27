import {
	GET_TECHNICIANS,
	ADD_TECHNICIAN,
	DELETE_TECHNICIAN,
	TECHNICIANS_ERROR,
	SET_LOADING
} from '../actions/types'

export const getTechnicians = () => async dispatch => {
	try {
		setLoading()
		const res = await fetch('/technicians')
		const data = await res.json()
		dispatch({
			type: GET_TECHNICIANS,
			payload: data
		})
	} catch (error) {
		dispatch({
			type: TECHNICIANS_ERROR,
			payload: error.response.statusText
		})
	}
}

export const addTechnician = technician => async dispatch => {
	try {
		setLoading()
		const res = await fetch('/technicians', {
			method: 'POST',
			body: JSON.stringify(technician),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const data = await res.json()
		dispatch({
			type: ADD_TECHNICIAN,
			payload: data
		})
	} catch (error) {
		dispatch({
			type: TECHNICIANS_ERROR,
			payload: error.response.statusText
		})
	}
}

export const deleteTechnician = id => async dispatch => {
	try {
		setLoading()
		await fetch(`/technicians/${id}`, {
			method: 'DELETE'
		})
		dispatch({
			type: DELETE_TECHNICIAN,
			payload: id
		})
	} catch (error) {
		dispatch({
			type: TECHNICIANS_ERROR,
			payload: error.response.statusText
		})
	}
}

export const setLoading = () => {
	return {
		type: SET_LOADING
	}
}
