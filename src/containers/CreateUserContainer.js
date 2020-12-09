import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import BackPaginationComponent from "../components/BackPaginationComponent";
import FormComponent from "../components/FormComponent";
import { postUserCreate } from "../actions/userAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
	return {
		getResponDataUser: state.users.getResponDataUser,
		errorResponDataUser: state.users.errorResponDataUser,
	};
};

class CreateUserContainer extends Component {
	handleSubmit(data) {
		this.props.dispatch(postUserCreate(data));
	}

	render() {
		if (this.props.getResponDataUser || this.props.errorResponDataUser) {
			if (this.props.errorResponDataUser) {
				swal("Failed!", this.props.errorResponDataUser, "error");
			} else {
				swal(
					"User Created!",
					"Nama : " +
						this.props.getResponDataUser.nama +
						", Umur : " +
						this.props.getResponDataUser.umur,
					"success",
				);
			}
		}
		return (
			<div>
				<Container>
					<BackPaginationComponent />
					<h3>Create User</h3>
					<FormComponent onSubmit={(data) => this.handleSubmit(data)} />
				</Container>
			</div>
		);
	}
}

export default connect(mapStateToProps, null)(CreateUserContainer);
