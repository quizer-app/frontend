import { api, apiPrivate } from "@/api/axios";
import { AuthResponse } from "@/api/response";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../ui/Form/Input";

const schema = z.object({
	usernameOrEmail: z.string().min(1),
	password: z.string().min(1),
});

type LoginForm = z.infer<typeof schema>;

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
		mode: "onChange",
	});

	const loginMutation = useMutation({
		mutationFn: (data: LoginForm) => {
			return api.post<AuthResponse>("/auth/login", data, {
				withCredentials: true,
			});
		},
		onSuccess: (data) => {
			const { accessToken, message } = data.data;
			if (accessToken) {
				apiPrivate.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
			}
			console.log(message);
		},
		onError: (error: AxiosError) => {
			console.log(error.response?.data);
		},
	});

	return (
		<form
			onSubmit={handleSubmit((data: object) => {
				loginMutation.mutate(data as LoginForm);
			})}>
			<Input
				label="Username"
				name="usernameOrEmail"
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
			<button className="btn btn-accent">Submit</button>
		</form>
	);
}
