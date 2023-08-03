import { api } from "@/api/axios"
import { AuthResponse } from "@/api/response"
import GoogleLogo from "@/assets/images/GoogleIcon.svg"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useAtomValue, useSetAtom } from "jotai"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"
import { accessTokenAtom, isAuthenticatedAtom } from "../../atoms/auth"
import { Button } from "../form/Button"
import { FormInput } from "../form/FormInput"

const schema = z.object({
  usernameOrEmail: z.string().min(1),
  password: z.string().min(1),
})

type LoginForm = z.infer<typeof schema>

export default function SignIn() {
  const isAuthenticated = useAtomValue(isAuthenticatedAtom)
  const navigate = useNavigate()
  const [signedIn, setSignedIn] = useState<boolean>(false)

  useEffect(() => {
    if (isAuthenticated && !signedIn) {
      navigate(-1)
    }
  }, [isAuthenticated, navigate, signedIn])

  const setAccessToken = useSetAtom(accessTokenAtom)
  // const [persist, setPersist] = useAtom(persistAtom);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  })

  useEffect(() => {
    setFocus("usernameOrEmail")
  }, [setFocus])

  const loginMutation = useMutation({
    mutationFn: (data: LoginForm) => {
      return api.post<AuthResponse>("/auth/login", data, {
        withCredentials: true,
      })
    },
    onSuccess: (data) => {
      const { accessToken } = data.data
      setAccessToken(accessToken ?? null)
      setSignedIn(true)
      reset()
    },
  })

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
                            flex items-center justify-center gap-4 mt-10"
        >
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
            loginMutation.mutate(data as LoginForm)
          })}
        >
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
          <div className="mt-8 flex justify-center mb-5">
            <input id="NAZWA" type="checkbox" className="bg-secondary"></input>
            <label
              htmlFor="NAZWA"
              className="text-textPrimary text-sm font-medium grow pl-3"
            >
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
  )
}
