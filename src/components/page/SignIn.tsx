import { api } from "@/api/axios";
import { AuthResponse } from "@/api/response";
import GoogleLogo from "@/assets/images/GoogleIcon.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useSetAtom } from "jotai";
import {
	FieldValues,
	RegisterOptions,
	UseFormRegisterReturn,
	useForm,
} from "react-hook-form";
import { z } from "zod";
import { accessTokenAtom } from "../atoms/auth";

const schema = z.object({
	usernameOrEmail: z.string().min(1),
	password: z.string().min(1),
});

type LoginForm = z.infer<typeof schema>;

export default function SignIn() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
		mode: "onChange",
	});

	const setAccessToken = useSetAtom(accessTokenAtom);

	const loginMutation = useMutation({
		mutationFn: (data: LoginForm) => {
			return api.post<AuthResponse>("/auth/login", data, {
				withCredentials: true,
			});
		},
		onSuccess: (data) => {
			const { accessToken } = data.data;
			setAccessToken(accessToken ?? null);
		},
		onError: (error: AxiosError) => {
			console.log(error.response?.data);
		},
	});

	return (
		<section className="pt-36 flex justify-center font-primary">
			<div className="container">
				<div className="flex flex-wrap">
					<div className="w-full px-4">
						<div className="bg-secondary mx-auto max-w-[500px] rounded-md py-10 px-6 sm:p-[60px]">
							<h1 className="text-white font-bold text-center text-2xl sm:text-3xl">
								Sign in to your account
							</h1>
							<p className="text-textPrimary text-center mt-3">
								Login to your account for better experience
							</p>
							<button
								className="text-textPrimary bg-input shadow-md rounded-md font-medium w-full py-3
                            flex items-center justify-center gap-4 mt-10">
								<span>
									<img src={GoogleLogo} alt="logo" className="w-5 h-5"></img>
								</span>
								Sign in with Google
							</button>
							<div className="flex items-center justify-center mt-5">
								<span className="h-[1px] w-full max-w-[70px] bg-textPrimary font-medium hidden sm:block"></span>
								<p className="text-textPrimary px-5 text-center font-medium">
									Or, sign in with your email
								</p>
								<span className="h-[1px] w-full max-w-[70px] bg-textPrimary font-medium hidden sm:block"></span>
							</div>
							<form
								onSubmit={handleSubmit((data: object) => {
									loginMutation.mutate(data as LoginForm);
								})}>
								<FormInput
									name="usernameOrEmail"
									type="text"
									placeholder="Enter your Email"
									labelText="Your Email"
									register={register}
								/>
								<FormInput
									name="password"
									type="password"
									placeholder="Enter your Password"
									labelText="Your Password"
									register={register}
								/>
								<div className="mt-5">
									<input></input>
									<a href="#" className="">
										Forgot Password?
									</a>
								</div>
								<Button>Sign In</Button>
							</form>
							<p className="text-textPrimary font-medium text-center mt-12">
								Don't have an account?
								<a href="#" className="text-blueButtonHover pl-2">
									Sign up
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-primary absolute top-0 right-0 w-full h-[300vh] -z-50"></div>
		</section>
	);
}

interface ButtonProps {
	children?: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
	return (
		<button className="text-white bg-blueButtonHover rounded-md w-full font-medium py-4 mt-3">
			{children}
		</button>
	);
}

interface FormInputProps {
	name: string;
	type: string;
	placeholder: string;
	labelText: string;
	register: (
		name: string,
		options?: RegisterOptions<FieldValues, string> | undefined
	) => UseFormRegisterReturn<string>;
}

export function FormInput({
	register,
	name,
	type,
	placeholder,
	labelText,
}: FormInputProps) {
	return (
		<div className="mt-8">
			<label htmlFor={name} className="block text-white text-sm font-medium">
				{labelText}
			</label>
			<input
				type={type}
				{...register(name)}
				placeholder={placeholder}
				className="bg-input text-textPrimary rounded-md w-full py-3 pl-6 shadow-md mt-3"
			/>
		</div>
	);
}
