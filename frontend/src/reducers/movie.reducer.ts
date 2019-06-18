import * as types from '../actions/types';
import {Movie} from "../lib/movie";
import {Action} from "../lib/action";

interface MovieState {
	movies: Movie[]
}

const defaultState: MovieState = {
	movies: []
};

const reducer = (state: MovieState = defaultState, action: Action) => {
	switch (action.type) {
		case types.SET_MOVIES: {
			state = {...state, movies: action.payload};
		}
		
		
	}
	
	return state;
};

export default reducer;
