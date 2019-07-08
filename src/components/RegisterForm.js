import React from "react";
import Joi from "joi-browser";
import Form from "./Form";

class RegisterForm extends Form {
	state = {
		data: { email: "", password: "", name: "" },
		errors: {}
	};

	schema = {
		email: Joi.string()
			.required()
			.email()
			.label("Email"),
		password: Joi.string()
			.required()
			.min(5)
			.label("Password"),
		name: Joi.string()
			.required()
			.label("Name")
	};

	doSubmit = () => {
		// Call the server...
		console.log("Registered...");
	};

	render() {
		return (
			<div>
				<h1>Register</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("email", "Email")}
					{this.renderInput("password", "Password", "password")}
					{this.renderInput("name", "Name")}
					{this.renderButton("Register")}
				</form>
			</div>
		);
	}
}

export default RegisterForm;
