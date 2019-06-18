export interface Action {
	type: string,
	payload?: any
}

export function create_action(type: string, payload?: any) {
	return <Action>{type, payload};
}
