import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/context/UserContext";
import "./Signup.css";

const Signup = () => {
	const { createUser } = useContext(AuthContext);

	const [error, setError] = useState(null);
	const handleSubmit = e => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		const confirm = form.confirm.value;

		console.log(email, password, confirm);

		if (password.length < 6) {
			setError("password mush be 6 characters long");
			return;
		}

		if (password !== confirm) {
			setError("your password didn't match ");
			return;
		}

		createUser(email, password)
			.then(update => {
				const user = update.user;
				console.log(user);
				form.reset();
			})
			.catch(error => console.error(error));
	};

	return (
		<div className="form-container">
			<h2 className="form-title">SignUp</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" required />
				</div>
				<div className="form-control">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" required />
				</div>
				<div className="form-control">
					<label htmlFor="password">Confirm Password</label>
					<input type="password" name="confirm" required />
				</div>
				<input type="submit" value="Sign Up" className="btn-submit" />
			</form>
			<p>
				New to ema john <Link to="/login">Already have an account ? </Link>
			</p>
			<p className="text-error">{error}</p>
		</div>
	);
};

export default Signup;
