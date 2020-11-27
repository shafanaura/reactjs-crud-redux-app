import { GET_USERS_LIST, GET_USER_LIST } from "../actions/userAction";

let initialState = {
	title: "Learn CRUD Redux",
	getUsersList: false,
	errorUsersList: false,
};

const users = (state = initialState, action) => {
	switch (action.type) {
		case GET_USERS_LIST:
			return {
				...state,
				getUsersList: action.payload.data,
				errorUsersList: action.payload.errorMessage,
			};
		default:
			break;
	}

	return state;
};

export default users;
