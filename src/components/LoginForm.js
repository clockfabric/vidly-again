import React from "react";
import Joi from "joi-browser";
import Form from "./Form";

class LoginForm extends Form {
	state = {
		data: {
			userName: "",
			password: ""
		},
		errors: {}
	};

	schema = {
		userName: Joi.string()
			.required()
			.label("Username"),
		password: Joi.string()
			.required()
			.label("Password")
	};

	doSubmit = () => {
		// Reset the form input fields
		//this.setState({ data: { userName: "", password: "" } });

		// Call the server...

		console.log("Submitted...");
	};

	render() {
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("userName", "Username")}
					{this.renderInput("password", "Password", "password")}
					{this.renderButton("Login")}
				</form>
			</div>
		);
	}
}

export default LoginForm;
