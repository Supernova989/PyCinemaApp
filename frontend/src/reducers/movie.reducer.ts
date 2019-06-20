import * as types from "../actions/types";
import {Movie} from "../lib/movie";
import {Action} from "../lib/action";

interface MovieState {
	items: Movie[]
}

const defaultState: MovieState = {
	items: []
};

const reducer = (state: MovieState = defaultState, action: Action) => {
	switch (action.type) {
		
		case types.SET_MOVIES:
			state = {...state, items: action.payload};
			break;
		
		
	}
	
	return state;
};

export default reducer;
