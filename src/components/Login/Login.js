import React, { Component } from "react";
import axios from "axios";
import Spinner from "../UI/Spinner/Spinner";
import {Redirect} from "react-router-dom";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			email: "",
            password: "",
            error:false,authSuccess:false
		};
	}

	componentDidUpdate() {
        if (this.state.submitted) {
            console.log("req sending")
			const { email, password } = this.state;
			axios
				.post("https://reqres.in/api/login", { email, password })
				.then(response => {
					const token = response.data.token;
					localStorage.setItem("authToken", token);
					
					this.setState({ submitted: false, loading: false, error: false,authSuccess:true });
				})
				.catch(err =>
					this.setState({ submitted: false, loading: false, error: true })
				);
		}
	}
	inputChangeHandler = event => {
		const formField = event.target.name;
		this.setState({ [formField]: event.target.value });
	};

	submitHandler = event => {
		event.preventDefault();
		const { loading, submitted } = this.state;
		this.setState({ loading: true, submitted: true });
	};

	render() {
        const { email, password, loading, error,authSuccess } = this.state;
        let authRedirect = null;
        if (authSuccess)
            authRedirect =    <Redirect to={{pathname: "/"}} />
        let form = (
			<div className="login-form">
				<form onSubmit={this.submitHandler}>
					<input
						type="email"
						name="email"
						value={email}
						onChange={this.inputChangeHandler}
						required
					/>
					<label htmlFor="email">Email</label>
					<input
						type="password"
						name="password"
						value={password}
						onChange={this.inputChangeHandler}
						required
					/>
					<label htmlFor="password">Password</label>
					<button>Login</button>
				</form>
			</div>
		);

		if (loading) form = <Spinner />;

        return (
            <>
                {authRedirect}
                {error && "Login error"}
                {form}
            </>
        )
	}
}

export default Login;
