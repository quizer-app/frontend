import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../ui/Form/Input";

const schema = z.object({
	username: z.string().min(3).max(64),
	email: z.string().email().min(3).max(64),
	password: z.string().min(8).max(64),
	confirmPassword: z.string().min(8).max(64),
});

type RegisterForm = z.infer<typeof schema>;

export default function Register() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: object) => console.log(data as RegisterForm);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				label="Username"
				name="username"
				type="text"
				errors={errors}
				register={register}
			/>
			<Input
				label="E-mail"
				name="email"
				type="text"
				errors={errors}
				register={register}
			/>
			<Input
				label="Password"
				name="password"
				type="password"
				errors={errors}
				register={register}
			/>
			<Input
				label="Confirm Password"
				name="confirmPassword"
				type="password"
				errors={errors}
				register={register}
			/>
			<button className="btn btn-accent">Submit</button>
		</form>
	);
}
