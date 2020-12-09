import React, { Component } from "react";
import { connect } from "react-redux";
import { Label, Row, Col, Input, FormGroup, Button } from "reactstrap";
import { reduxForm, Field } from "redux-form";
import UserValidation from "../validations/UserValidation";

const renderField = ({
	input,
	type,
	placeholder,
	label,
	disabled,
	readOnly,
	meta: { touched, error, warning },
}) => (
	<Row>
		<Col md={12}>
			<Label htmlFor="{input}" className="col-form-label">
				{label}
			</Label>
		</Col>
		<Col md={12}>
			<Input
				{...input}
				type={type}
				placeholder={placeholder}
				disabled={disabled}
				readOnly={readOnly}
			/>
			{(touched && error && <p style={{ color: "red" }}>{error}</p>) ||
				(warning && <p style={{ color: "brown" }}>{warning}</p>)}
		</Col>
	</Row>
);

const mapStateToProps = (state) => {
	return {
		initialValues: {
			nama: state.users.getUserDetail.nama,
			alamat: state.users.getUserDetail.alamat,
			umur: state.users.getUserDetail.umur,
		},
	};
};

class FormComponent extends Component {
	render() {
		return (
			<form onSubmit={this.props.handleSubmit}>
				<FormGroup row>
					<Col>
						<FormGroup>
							<Field
								type="text"
								name="nama"
								component={renderField}
								label="Nama :"
							/>
						</FormGroup>
						<FormGroup>
							<Field
								type="text"
								name="alamat"
								component={renderField}
								label="Alamat :"
							/>
						</FormGroup>
						<FormGroup>
							<Field
								type="number"
								name="umur"
								component={renderField}
								label="Umur :"
							/>
						</FormGroup>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Col md="12">
						<FormGroup>
							<Button
								color="success"
								type="submit"
								disabled={this.props.submitting}
							>
								Submit
							</Button>
						</FormGroup>
					</Col>
				</FormGroup>
			</form>
		);
	}
}

FormComponent = reduxForm({
	form: "formCreateUser",
	validate: UserValidation,
	enableReinitialize: true,
})(FormComponent);
export default connect(mapStateToProps, null)(FormComponent);
