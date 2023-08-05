import { api } from "@/api/axios";
import { AuthResponse } from "@/api/response";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import GoogleLogo from "@/assets/images/GoogleIcon.svg";
import { FormInput } from "../form/FormInput";
import { Button } from "../form/Button";
import { useRef } from "react";

const schema = z.object({
  username: z.string().min(3).max(64),
  email: z.string().email().min(3).max(64),
  password: z.string().min(8).max(64),
  confirmPassword: z.string().min(8).max(64),
});

type Form = z.infer<typeof schema>;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const registerMutation = useMutation({
    mutationFn: (data: Form) => {
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

  const persistRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full px-4">
      <div className="bg-secondary mx-auto max-w-[500px] rounded-md py-10 px-6 sm:p-[60px]">
        <h1 className="font-bold text-center text-2xl sm:text-3xl">
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
          onSubmit={handleSubmit((data) => {
            registerMutation.mutate(data as Form);
          })}>
          <FormInput
            name="username"
            type="text"
            placeholder="Enter your username"
            labelText="Username"
            register={register}
            errors={errors}
          />
          <FormInput
            name="email"
            type="text"
            placeholder="Enter your email"
            labelText="Email"
            register={register}
            errors={errors}
          />
          <FormInput
            name="password"
            type="password"
            placeholder="Enter your password"
            labelText="Password"
            register={register}
            errors={errors}
          />
          <FormInput
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            labelText="Confirm Password"
            register={register}
            errors={errors}
          />
          <div className="mt-8 flex justify-center mb-5">
            <input
              id="persist"
              type="checkbox"
              className="bg-secondary"
              ref={persistRef}
            />
            <label
              htmlFor="persist"
              className="text-textPrimary text-sm font-medium grow pl-3">
              Keep me signed in
            </label>
            <a href="#" className="text-blueButtonHover text-sm font-medium">
              Forgot Password?
            </a>
          </div>
          <Button>Sign In</Button>
        </form>
        <p className="text-textPrimary font-medium text-center mt-6">
          Don't have an account?
          <a href="#" className="text-blueButtonHover pl-2">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
