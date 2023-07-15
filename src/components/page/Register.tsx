import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import axios from "../../api/axios";

interface RegisterForm {
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
}

export default function Register() {
	const userRef = useRef<HTMLInputElement>(null);
	const errorRef = useRef<HTMLParagraphElement>(null);

	const [user, setUser] = useState("");
	const [validName, setValidName] = useState(false);
	const [userFocus, setUserFocus] = useState(false);

	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);

	const [password, setPassword] = useState("");
	const [validPassword, setValidPassword] = useState(false);
	const [passwordFocus, setPasswordFocus] = useState(false);

	const [matchPassword, setMatchPassword] = useState("");
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);

	const [errorMessage, setErrorMessage] = useState("");
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		userRef.current?.focus();
	}, []);

	useEffect(() => {
		setValidName(user.length > 2);
	}, [user]);

	useEffect(() => {
		const match = password === matchPassword;
		setValidPassword(password.length > 5);
		setValidMatch(match);
	}, [matchPassword, password]);

	useEffect(() => {
		setValidEmail(email.length > 5 && email.includes("@"));
	}, [email]);

	useEffect(() => {
		setErrorMessage("");
	}, [user, password, matchPassword]);

	const registerMutation = useMutation({
		mutationFn: (newUser: RegisterForm) => {
			return axios.post("/auth/register", newUser, {
				withCredentials: true,
			});
		},
		onSuccess: () => {
			setSuccess(true);
		},
	});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(user, password, matchPassword);

		registerMutation.mutate({
			username: user,
			email: email,
			password: password,
			confirmPassword: matchPassword,
		});
	};

	return (
		<>
			{success ? (
				<section>
					<h1>Success!</h1>
					{JSON.stringify(registerMutation.data)}
				</section>
			) : (
				<section>
					<p
						ref={errorRef}
						className={errorMessage ? "errmsg" : "offscreen"}
						aria-live="assertive">
						{errorMessage}
					</p>
					<h1>Register</h1>
					<form onSubmit={handleSubmit}>
						<label htmlFor="username">Username:</label>
						<input
							type="text"
							id="username"
							ref={userRef}
							autoComplete="off"
							onChange={(e) => setUser(e.target.value)}
							required
							aria-invalid={!validName}
							aria-describedby="uidnote"
							onFocus={() => setUserFocus(true)}
							onBlur={() => setUserFocus(false)}
						/>
						<p
							id="uidnote"
							className={
								userFocus && user && !validName
									? "instructions"
									: "hidden"
							}>
							Username must be at least 3 characters
						</p>
						<br />

						<label htmlFor="email">Email:</label>
						<input
							type="email"
							id="email"
							onChange={(e) => setEmail(e.target.value)}
							required
							aria-invalid={!validEmail}
							aria-describedby="emailnote"
							onFocus={() => setEmailFocus(true)}
							onBlur={() => setEmailFocus(false)}
						/>
						<p
							id="emailnote"
							className={
								emailFocus && email && !validEmail
									? "instructions"
									: "hidden"
							}>
							Email must be valid
						</p>
						<br />

						<label htmlFor="password">Password:</label>
						<input
							type="password"
							id="password"
							onChange={(e) => setPassword(e.target.value)}
							required
							aria-invalid={!validPassword}
							aria-describedby="pwdnote"
							onFocus={() => setPasswordFocus(true)}
							onBlur={() => setPasswordFocus(false)}
						/>
						<p
							id="pwdnote"
							className={
								passwordFocus && password && !validPassword
									? "instructions"
									: "hidden"
							}>
							Password must be at least 6 characters
						</p>
						<br />

						<label htmlFor="confirm_password">
							Confirm Password:
						</label>
						<input
							type="password"
							id="confirm_password"
							onChange={(e) => setMatchPassword(e.target.value)}
							required
							aria-invalid={!validMatch}
							aria-describedby="confirmnote"
							onFocus={() => setMatchFocus(true)}
							onBlur={() => setMatchFocus(false)}
						/>
						<p
							id="confirmnote"
							className={
								matchFocus && matchPassword && !validMatch
									? "instructions"
									: "hidden"
							}>
							Passwords must match
						</p>
						<br />

						<button
							disabled={
								!validName || !validPassword || !validMatch
							}>
							Sign Up
						</button>
					</form>
				</section>
			)}
		</>
	);
}
