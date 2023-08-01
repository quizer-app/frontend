import GoogleLogo from "@/assets/images/GoogleIcon.svg"

export default function SignIn() {
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
              <form>
                <FormInput
                  name="email"
                  type="email"
                  placeholder="Enter your Email"
                  labelText="Your Email"
                />
                <FormInput
                  name="password"
                  type="password"
                  placeholder="Enter your Password"
                  labelText="Your Password"
                />
                <div className="mt-5">
                  <input></input>
                  <a href="#" className="">
                    Forgot Password?
                  </a>
                </div>
                <Button text="Sign in" />
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
  )
}

interface ButtonProps {
  text: string
}

export function Button({ text }: ButtonProps) {
  return (
    <button className="text-white bg-blueButtonHover rounded-md w-full font-medium py-4 mt-3">
      {text}
    </button>
  )
}

interface FormInputProps {
  name: string
  type: string
  placeholder: string
  labelText: string
}

export function FormInput({
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
        name={name}
        placeholder={placeholder}
        className="bg-input text-textPrimary rounded-md w-full py-3 pl-6 shadow-md mt-3"
      />
    </div>
  )
}
