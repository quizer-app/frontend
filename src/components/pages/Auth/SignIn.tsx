import { api } from "@/api/axios";
import { AuthResponse } from "@/api/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { accessTokenAtom, isAuthenticatedAtom } from "../../../atoms/auth";
import { Button } from "../../layout/ContentBox/Button";
import ContentBox from "../../layout/ContentBox/ContentBox";
import { FormInput } from "../../layout/ContentBox/FormInput";
import GoogleButton from "../../layout/ContentBox/GoogleButton";
import Text from "../../layout/ContentBox/Text";
import TextWithLines from "../../layout/ContentBox/TextWithLines";
import TextWithLink from "../../layout/ContentBox/TextWithLink";
import Title from "../../layout/ContentBox/Title";

const schema = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
  rememberMe: z.boolean().optional(),
});

type Form = z.infer<typeof schema>;

export default function SignIn() {
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const navigate = useNavigate();

  const setAccessToken = useSetAtom(accessTokenAtom);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    setFocus("usernameOrEmail");
  }, [setFocus]);

  const loginMutation = useMutation({
    mutationFn: (data: Form) => {
      return api.post<AuthResponse>("/api/v1/Auth/login", data, {
        withCredentials: true,
      });
    },
    onSuccess: data => {
      const { accessToken, message } = data.data;
      toast.success(message);
      setAccessToken(accessToken ?? null);
      reset();
    },
    onError: (error: AxiosError) => {
      toast.error(error.message);
    },
  });

  useEffect(() => {
    if (isAuthenticated && !loginMutation.isSuccess) {
      navigate(-1);
    }
  }, [isAuthenticated, navigate, loginMutation.isSuccess]);

  return (
    <ContentBox>
      <Title>Sign in to your account</Title>
      <Text>Login to your account for better experience</Text>
      <GoogleButton>Sign in with Google</GoogleButton>
      <TextWithLines>Or, sign in with your email</TextWithLines>
      <form
        onSubmit={handleSubmit(data => {
          loginMutation.mutate(data as Form);
        })}
        autoComplete="off"
      >
        <FormInput
          name="email"
          type="text"
          placeholder="Enter your email"
          labelText="Email or Username"
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
        <div className="mt-8 flex justify-center mb-5">
          <input
            type="checkbox"
            {...register("rememberMe")}
            className="bg-secondary"
            id="rememberMe"
          />
          <label
            htmlFor="rememberMe"
            className="text-textPrimary text-sm font-medium grow pl-3"
          >
            Keep me signed in
          </label>
          <a href="#" className="text-lightBlue text-sm font-medium">
            Forgot Password?
          </a>
        </div>
        <Button>Sign in</Button>
      </form>
      <TextWithLink link="Sign up" path="/signup">
        Don't have an account?
      </TextWithLink>
    </ContentBox>
  );
}
