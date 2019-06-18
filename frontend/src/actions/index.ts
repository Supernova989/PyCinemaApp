import {api_query} from '../lib/shared';
import {create_action} from "../lib/action";
import {Movie} from "../lib/movie";
import * as types from './types';
import {AxiosError, AxiosResponse} from "axios";

export const log_in = (email: string, password: string) => {
	return (dispatch: Function) => {
		return api_query('POST', '/api/authentication', {email, password})
			.then((response: AxiosResponse) => {
				console.log(response);
			})
			.catch((error: AxiosError) => {
				console.error('Something went wrong!', error);
			});
	};
};

export const log_out = () => {
	return create_action(types.LOG_OUT);
};

export function set_movies(movies: Movie[]) {
	return create_action(types.SET_MOVIES, movies);
}

/**
 * Gets a list of movies and sets them to the app's state
 */
export function get_movies(page: number) {
	return (dispatch: Function) => {
		return api_query('GET', `/api/movies/${page}`, {})
			.then((response: AxiosResponse) => {
				const movies: Movie[] = response.data;
				dispatch(set_movies(movies));
			})
			.catch((error: AxiosError) => {
				console.error('Something went wrong!', error);
			});
	}
}
