import React, { Component } from "react";
import { Container } from "reactstrap";
import BackPaginationComponent from "../components/BackPaginationComponent";

export default class CreateUserContainer extends Component {
	render() {
		return (
			<div>
				<Container>
					<BackPaginationComponent />
					<h3>Create</h3>
				</Container>
			</div>
		);
	}
}
