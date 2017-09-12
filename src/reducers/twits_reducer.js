export default function twitsReducer(state = [], action){
	switch (action.type) {
    case 'FETCH_TS':
      return action.payload;
    case 'ADD':
      return [action.payload, ...state];
	default:
		return state;
	}
}

function randomID(num1, num4) {
	return Math.floor(Math.random() * 4) + 1;  
}