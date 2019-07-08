import React, { Component } from "react";
import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";
import Joi from "joi-browser";

class Form extends Component {
	//state = {};

	validate = () => {
		const { data } = this.state;
		const result = Joi.validate(data, this.schema, { abortEarly: false });

		if (!result.error) return null;

		const validationError = {};
		for (let item of result.error.details) {
			validationError[item.path[0]] = item.message;
		}

		return validationError;
	};

	validateProperty = ({ name, value }) => {
		const obj = { [name]: value };
		const validationSchema = { [name]: this.schema[name] };
		const { error: validationError } = Joi.validate(obj, validationSchema, {
			abortEarly: true
		});

		return validationError ? validationError.details[0].message : null;
	};

	handleSubmit = e => {
		e.preventDefault();

		const errorsValue = this.validate();
		this.setState({ errors: errorsValue || {} });
		if (errorsValue) return;

		this.doSubmit();
	};

	handleChange = ({ currentTarget: input }) => {
		const errorsInput = { ...this.state.errors };
		const errorMessage = this.validateProperty(input);
		if (errorMessage) errorsInput[input.name] = errorMessage;
		else delete errorsInput[input.name];

		this.setState({ errors: errorsInput });

		const dataNew = { ...this.state.data };
		dataNew[input.name] = input.value;
		this.setState({ data: dataNew });
	};

	renderInput(name, label, type = "text") {
		const { data, errors } = this.state;
		return (
			<InputComponent
				name={name}
				type={type}
				value={data[name]}
				label={label}
				onChange={this.handleChange}
				error={errors[name]}
			/>
		);
	}

	renderSelect(name, label, options) {
		const { data, errors } = this.state;

		return (
			<SelectComponent
				name={name}
				value={data[name]}
				label={label}
				options={options}
				onChange={this.handleChange}
				error={errors[name]}
			/>
		);
	}

	renderButton(label) {
		return (
			<button disabled={this.validate()} className='btn btn-primary'>
				{label}
			</button>
		);
	}
}

export default Form;
