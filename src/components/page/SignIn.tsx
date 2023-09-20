import { api } from "@/api/axios";
import { AuthResponse } from "@/api/response";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import {
  accessTokenAtom,
  isAuthenticatedAtom,
  persistAtom,
} from "../../atoms/auth";
import { Button } from "../layout/ContentBox/Button";
import { FormInput } from "../layout/ContentBox/FormInput";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import ContentBox from "../layout/ContentBox/ContentBox";
import Title from "../layout/ContentBox/Title";
import GoogleButton from "../layout/ContentBox/GoogleButton";
import Text from "../layout/ContentBox/Text";
import TextWithLink from "../layout/ContentBox/TextWithLink";
import TextWithLines from "../layout/ContentBox/TextWithLines";

const schema = z.object({
  usernameOrEmail: z.string().min(1),
  password: z.string().min(1),
});

type Form = z.infer<typeof schema>;

export default function SignIn() {
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const navigate = useNavigate();

  const setAccessToken = useSetAtom(accessTokenAtom);
  const persistRef = useRef<HTMLInputElement>(null);
  const setPersist = useSetAtom(persistAtom);

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
      return api.post<AuthResponse>("/auth/login", data, {
        withCredentials: true,
      });
    },
    onSuccess: data => {
      const { accessToken, message } = data.data;
      toast.success(message);
      setAccessToken(accessToken ?? null);
      setPersist(persistRef.current?.checked ?? false);
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
      >
        <FormInput
          name="usernameOrEmail"
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
            id="persist"
            type="checkbox"
            className="bg-secondary"
            ref={persistRef}
          />
          <label
            htmlFor="persist"
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
