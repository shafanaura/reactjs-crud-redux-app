import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { getUserDetail } from "../actions/userAction";
import BackPaginationComponent from "../components/BackPaginationComponent";
import DetailUserComponent from "../components/DetailUserComponent";

class DetailUserContainer extends Component {
	componentDidMount() {
		this.props.dispatch(getUserDetail(this.props.match.params.id));
	}
	render() {
		return (
			<div>
				<Container>
					<BackPaginationComponent />
					<h3>Detail</h3>
					<DetailUserComponent />
				</Container>
			</div>
		);
	}
}

export default connect()(DetailUserContainer);
