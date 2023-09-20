import { api } from "@/api/axios";
import { AuthResponse } from "@/api/response";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormInput } from "../layout/ContentBox/FormInput";
import { Button } from "../layout/ContentBox/Button";
import { useEffect } from "react";
import { useAtomValue } from "jotai";
import { isAuthenticatedAtom } from "@/atoms/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast/headless";
import ContentBox from "../layout/ContentBox/ContentBox";
import Title from "../layout/ContentBox/Title";
import GoogleButton from "../layout/ContentBox/GoogleButton";
import Text from "../layout/ContentBox/Text";
import TextWithLink from "../layout/ContentBox/TextWithLink";
import TextWithLines from "../layout/ContentBox/TextWithLines";

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
    <ContentBox>
      <Title>Create your account</Title>
      <Text>It's totally free and super easy</Text>
      <GoogleButton>Sign up with Google</GoogleButton>
      <TextWithLines>Or, register with your email</TextWithLines>
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
        <TextWithLink link="Sign in" path="/signin">
          Already using Quizer?
        </TextWithLink>
      </form>
    </ContentBox>
  );
}
