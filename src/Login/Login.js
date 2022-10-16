import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/context/UserContext";
import "./Login.css";

const Login = () => {
	const { signIn } = useContext(AuthContext);
	const navigate = useNavigate();

	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const handleSubmit = e => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		signIn(email, password)
			.then(update => {
				const user = update.user;
				console.log(user);
				navigate(from, { replace: true });
			})
			.catch(error => console.error(error));
	};

	return (
		<div className="form-container">
			<h2 className="form-title">login</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" required />
				</div>
				<div className="form-control">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" required />
				</div>
				<input type="submit" value="login" className="btn-submit" />
			</form>
			<p>
				New to ema john <Link to="/signup">Create a new account</Link>
			</p>
		</div>
	);
};

export default Login;
