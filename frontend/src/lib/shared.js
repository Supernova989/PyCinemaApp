import _ from 'lodash';
import axios from 'axios';

/**
 * 	@param method {String} Request method (POST / GET / PATCH / DELETE)
 * 	@param url {String} API URL, starts with a slash
 * 	@param data {(Object | String | Number)}
 */
export function api_query(method, url, data) {
	const request = {
		method,
		url: process.env.REACT_APP_API + url,
		// crossDomain: true,
		// credentials: true,
		headers: {
			'X-PASS': 'web-application',
			'Authorization': getToken(),
		}
	};
	if (method.toUpperCase() === 'POST') {
		request.data = data || {};
	}
	return axios(request);
}

/**
 * 	@param pure {Boolean} whether to return a JWT only (w/o Bearer)
 * 	@return {String}
 */
export function getToken(pure = false) {
	let token = localStorage.getItem('token') || null;
	if (token && !pure) {
		token = `Bearer ${token}`;
	}
	return token;
}


export function debug(str, obj = undefined) {
	console.log(str);
	if  (obj) {
		console.log(obj);
	}
}
