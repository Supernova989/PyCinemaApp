import {api_query} from '../shared';
import {
	LOG_IN,
	LOG_OUT
} from './types';

export const log_in = (email, password) => {
	return (dispatch) => {
		return api_query('POST', '/api/authentication', {email, password})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.error('Something went wrong!',error);
			});
	};
};

export const log_out = () => {
	return {
		type: LOG_OUT
	}
};
