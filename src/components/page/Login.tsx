import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";

interface LoginForm {
	usernameOrEmail: string;
	password: string;
}

export default function Login() {
	const navigate = useNavigate();
	const location = useLocation();
	const from: string = location.state?.from.pathname || "/";

	const userRef = useRef<HTMLInputElement>(null);
	const errorRef = useRef<HTMLParagraphElement>(null);

	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		userRef.current?.focus();
	}, []);

	useEffect(() => {
		setErrorMessage("");
	}, [user, password]);

	const loginMutation = useMutation({
		mutationFn: (user: LoginForm) => {
			return axios.post("/auth/login", user, {
				withCredentials: true,
			});
		},
		onSuccess: (data) => {
			// const accessToken: string = data.data.accessToken;
			// Add accessToken to accessToken atom
			navigate(from, { replace: true });
		},
		onError: (err: Error) => {
			console.error(err.message);
		},
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(user, password);
		loginMutation.mutate({ usernameOrEmail: user, password });
	};

	return (
		<section>
			<p ref={errorRef} className={errorMessage ? "errmsg" : "hidden"}>
				{errorMessage}
			</p>
			<h1 className="text-3xl underline">Sign In</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="usernameOrEmail">Username or Email:</label>
				<input
					type="text"
					id="usernameOrEmail"
					ref={userRef}
					autoComplete="off"
					onChange={(e) => setUser(e.target.value)}
					required
					value={user}
				/>
				<br />

				<label htmlFor="password">Password:</label>
				<input
					type="password"
					id="password"
					onChange={(e) => setPassword(e.target.value)}
					required
					value={password}
				/>
				<br />

				<button>Sign In</button>
			</form>
		</section>
	);
}
