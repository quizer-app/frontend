import TextField from "@mui/material/TextField";

interface RegisterForm {
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
}

export default function Register() {
	return (
		<form>
			<TextField
				autoFocus={true}
				size="small"
				error
				placeholder="Username"
				inputProps={{ "aria-label": "description" }}
			/>
		</form>
	);
}
