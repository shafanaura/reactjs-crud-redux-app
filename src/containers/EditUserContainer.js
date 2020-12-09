import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { getUserDetail, putUserUpdate } from "../actions/userAction";
import BackPaginationComponent from "../components/BackPaginationComponent";
import FormComponent from "../components/FormComponent";
import swal from "sweetalert";

const mapStateToProps = (state) => {
	return {
		getResponDataUser: state.users.getResponDataUser,
		errorResponDataUser: state.users.errorResponDataUser,
	};
};

class EditUserContainer extends Component {
	componentDidMount() {
		this.props.dispatch(getUserDetail(this.props.match.params.id));
	}

	handleSubmit(data) {
		this.props.dispatch(putUserUpdate(data, this.props.match.params.id));
	}

	render() {
		if (this.props.getResponDataUser || this.props.errorResponDataUser) {
			if (this.props.errorResponDataUser) {
				swal("Failed!", this.props.errorResponDataUser, "error");
			} else {
				swal(
					"User Updated!",
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
					<h3>Edit</h3>
					<FormComponent onSubmit={(data) => this.handleSubmit(data)} />
				</Container>
			</div>
		);
	}
}

export default connect(mapStateToProps, null)(EditUserContainer);
