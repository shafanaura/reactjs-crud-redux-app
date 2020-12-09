import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const POST_USER_CREATE = "POST_USER_CREATE";
export const PUT_USER_EDIT = "PUT_USER_EDIT";

export const getUsersList = () => {
	return (dispatch) => {
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

export const getUserDetail = (id) => {
	return (dispatch) => {
		axios
			.get(
				"https://my-json-server.typicode.com/shafanaura/reactjs-crud-redux/users/" +
					id,
			)
			.then(function (response) {
				// handle success
				dispatch({
					type: GET_USER_DETAIL,
					payload: {
						data: response.data,
						errorMessage: false,
					},
				});
			})
			.catch(function (error) {
				// handle error
				dispatch({
					type: GET_USER_DETAIL,
					payload: {
						data: false,
						errorMessage: error.message,
					},
				});
			});
	};
};

export const postUserCreate = (data) => {
	return (dispatch) => {
		axios
			.post(
				"https://my-json-server.typicode.com/shafanaura/reactjs-crud-redux/users",
				data,
			)
			.then(function (response) {
				// handle success
				dispatch({
					type: POST_USER_CREATE,
					payload: {
						data: response.data,
						errorMessage: false,
					},
				});
			})
			.catch(function (error) {
				// handle error
				dispatch({
					type: POST_USER_CREATE,
					payload: {
						data: false,
						errorMessage: error.message,
					},
				});
			});
	};
};

export const putUserUpdate = (data, id) => {
	return (dispatch) => {
		axios
			.put(
				"https://my-json-server.typicode.com/shafanaura/reactjs-crud-redux/users/" +
					id,
				data,
			)
			.then(function (response) {
				// handle success
				dispatch({
					type: PUT_USER_EDIT,
					payload: {
						data: response.data,
						errorMessage: false,
					},
				});
			})
			.catch(function (error) {
				// handle error
				dispatch({
					type: PUT_USER_EDIT,
					payload: {
						data: false,
						errorMessage: error.message,
					},
				});
			});
	};
};

export const deleteDataUser = () => {
	return (dispatch) => {
		dispatch({
			type: GET_USER_DETAIL,
			payload: {
				data: false,
				errorMessage: false,
			},
		});
		dispatch({
			type: POST_USER_CREATE,
			payload: {
				data: false,
				errorMessage: false,
			},
		});
	};
};
