import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import BackPaginationComponent from "../components/BackPaginationComponent";
import FormComponent from "../components/FormComponent";
import { postUserCreate } from "../actions/userAction";

class CreateUserContainer extends Component {
	handleSubmit(data) {
		this.props.dispatch(postUserCreate(data));
	}

	render() {
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

export default connect()(CreateUserContainer);
