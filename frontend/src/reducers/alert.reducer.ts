import * as types from "../actions/types";
import {Action} from "../lib/action";


interface AlertState {
	
}

const defaultState: AlertState = {};

const reducer = (state: AlertState = defaultState, action: Action) => {
	switch (action.type) {
		
		// case types.SET_MOVIES:
		// 	state = {...state, items: action.payload};
		// 	break;
		
		
	}
	
	return state;
};

export default reducer;
