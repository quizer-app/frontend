import { api } from "@/api/axios";
import { AuthResponse } from "@/api/response";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
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
		mode: "onChange",
	});

	const registerMutation = useMutation({
		mutationFn: (data: RegisterForm) => {
			return api.post<AuthResponse>("/auth/register", data, {
				withCredentials: true,
			});
		},
		onSuccess: (data) => {
			console.log(data);
		},
		onError: (error: AxiosError) => {
			console.log(error.response?.data);
		},
	});

	return (
		<form
			onSubmit={handleSubmit((data: object) => {
				registerMutation.mutate(data as RegisterForm);
			})}>
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
