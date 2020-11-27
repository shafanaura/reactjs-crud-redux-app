import React, { Component } from "react";
import { Container } from "reactstrap";
import BackPaginationComponent from "../components/BackPaginationComponent";

export default class EditUserContainer extends Component {
	render() {
		return (
			<div>
				<Container>
					<BackPaginationComponent />
					<h3>Edit</h3>
				</Container>
			</div>
		);
	}
}
