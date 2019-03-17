import {
	LOG_IN,
	LOG_OUT
} from './types';

export const log_out = () => {
	return {
		type: LOG_OUT
	}
};
