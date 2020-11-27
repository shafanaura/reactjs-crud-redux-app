import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";

export const getUsersList = () => {
	return (dispatch) => {
		// Make a request for a user with a given ID
		axios
			.get(
				"https://my-json-server.typicode.com/shafanaura/reactjs-crud-redux/users",
			)
			.then(function (response) {
				// handle success
				dispatch({
					type: GET_USERS_LIST,
					payload: {
						data: response.data,
						errorMessage: false,
					},
				});
			})
			.catch(function (error) {
				// handle error
				dispatch({
					type: GET_USERS_LIST,
					payload: {
						data: false,
						errorMessage: error.message,
					},
				});
			});
	};
};
