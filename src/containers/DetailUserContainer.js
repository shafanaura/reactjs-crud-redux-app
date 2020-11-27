import React, { Component } from "react";
import { Container } from "reactstrap";
import BackPaginationComponent from "../components/BackPaginationComponent";

export default class DetailUserContainer extends Component {
	render() {
		return (
			<div>
				<Container>
					<BackPaginationComponent />
					<h3>Detail</h3>
				</Container>
			</div>
		);
	}
}
