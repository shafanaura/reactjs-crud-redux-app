import React, { Component } from "react";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";
import TableComponent from "./components/TableComponent";
import HomeContainer from "./containers/HomeContainer";
import DetailUserContainer from "./containers/DetailUserContainer";
import EditUserContainer from "./containers/EditUserContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import { BrowserRouter, Route } from "react-router-dom";

export default class App extends Component {
	render() {
		return (
			<div>
				<NavbarComponent />
				<JumbotronComponent />
				<BrowserRouter>
					<Route path="/" exact component={HomeContainer} />
					<Route path="/create" exact component={CreateUserContainer} />
					<Route path="/detail/:id" exact component={DetailUserContainer} />
					<Route path="/edit/:id" exact component={EditUserContainer} />
				</BrowserRouter>
			</div>
		);
	}
}
