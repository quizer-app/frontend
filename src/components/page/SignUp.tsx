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
import { useEffect } from "react";
import { useAtomValue } from "jotai";
import { isAuthenticatedAtom } from "@/atoms/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast/headless";
import ContentBox from "../layout/ContentBox/ContentBox";

const schema = z.object({
  username: z.string().min(3).max(32),
  email: z.string().email().min(3).max(64),
  password: z.string().min(8).max(64),
  confirmPassword: z.string().min(8).max(64),
});

type Form = z.infer<typeof schema>;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    setFocus,
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
    onSuccess: data => {
      const { message } = data.data;
      toast.success(message);
    },
    onError: (error: AxiosError) => {
      toast.error(error.message);
    },
  });

  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && !registerMutation.isSuccess) {
      navigate(-1);
    }
  }, [isAuthenticated, navigate, registerMutation.isSuccess]);

  useEffect(() => {
    setFocus("username");
  }, [setFocus]);

  return (
    // <ContentBox>
    //   <h1 className="font-bold text-center text-2xl sm:text-3xl">
    //     Create your account
    //   </h1>
    //   <p className="text-textPrimary text-center mt-3">It's</p>
    //   <button
    //     className="text-textPrimary bg-input shadow-md rounded-md font-medium w-full py-3
    //                         flex items-center justify-center gap-4 mt-10"
    //   >
    //     <span>
    //       <img src={GoogleLogo} alt="logo" className="w-5 h-5"></img>
    //     </span>
    //     Sign up with Google
    //   </button>
    //   <div className="flex items-center justify-center mt-5">
    //     <span className="h-[1px] w-full max-w-[70px] bg-textPrimary font-medium hidden sm:block"></span>
    //     <p className="text-textPrimary px-3 text-center font-medium">
    //       Or, register with your email.
    //     </p>
    //     <span className="h-[1px] w-full max-w-[70px] bg-textPrimary font-medium hidden sm:block"></span>
    //   </div>
    //   <form
    //     onSubmit={handleSubmit(data => {
    //       registerMutation.mutate(data as Form);
    //     })}
    //   >
    //     <FormInput
    //       name="username"
    //       type="text"
    //       placeholder="Enter your username"
    //       labelText="Username"
    //       register={register}
    //       errors={errors}
    //     />
    //     <FormInput
    //       name="email"
    //       type="text"
    //       placeholder="Enter your email"
    //       labelText="Email"
    //       register={register}
    //       errors={errors}
    //     />
    //     <FormInput
    //       name="password"
    //       type="password"
    //       placeholder="Enter your password"
    //       labelText="Password"
    //       register={register}
    //       errors={errors}
    //     />
    //     <FormInput
    //       name="confirmPassword"
    //       type="password"
    //       placeholder="Confirm your password"
    //       labelText="Confirm Password"
    //       register={register}
    //       errors={errors}
    //     />

    //     <Button>Sign In</Button>
    //   </form>
    //   <p className="text-textPrimary font-medium text-center mt-6">
    //     Already using Quizer?
    //     <Link to="/signin" className="text-blueButton pl-2">
    //       Sign in
    //     </Link>
    //   </p>
    // </ContentBox>
    <ContentBox>
      <h1 className="font-bold text-center text-2xl sm:text-3xl">
        Create your account
      </h1>
      <p className="text-textPrimary text-center mt-3">
        It's totally free and super easy
      </p>
      <button
        className="text-textPrimary bg-input shadow-md rounded-md font-medium w-full py-3
                            flex items-center justify-center gap-4 mt-10"
      >
        <span>
          <img src={GoogleLogo} alt="logo" className="w-5 h-5"></img>
        </span>
        Sign up with Google
      </button>
      <div className="flex items-center justify-center mt-5">
        <span className="h-[1px] w-full max-w-[70px] bg-textPrimary font-medium hidden sm:block"></span>
        <p className="text-textPrimary px-3 text-center font-medium">
          Or, register with your email.
        </p>
        <span className="h-[1px] w-full max-w-[70px] bg-textPrimary font-medium hidden sm:block"></span>
      </div>
      <form
        onSubmit={handleSubmit(data => {
          registerMutation.mutate(data as Form);
        })}
      >
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

        <Button>Sign In</Button>
      </form>
      <p className="text-textPrimary font-medium text-center mt-6">
        Already using Quizer?
        <Link to="/signin" className="text-blueButton pl-2">
          Sign in
        </Link>
      </p>
    </ContentBox>
  );
}
