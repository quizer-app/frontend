interface NavLinksProps {
  isOpen: boolean
}

export default function NavLinks({ isOpen }: NavLinksProps) {
  return (
    <div>
      <nav>
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } justify-center items-center ml-5 border-[#959cb137] 
            bg-[#1D2144] flex-col right-[6%] top-[88px] absolute
              rounded-md w-[250px] h-[274px] sm:h-[194px] border-[.5px]
              lg:bg-transparent lg:flex-row lg:right-auto lg:top-auto lg:static
              lg:rounded-none lg:w-auto lg:h-auto lg:border-none lg:flex lg:text-[17px]`}
        >
          <LiElement text="Home" />
          <LiElement text="About" />
          <LiElement text="Blog" />
          <LiElement text="Support" />
          <AuthElement text="Sign In" />
          <AuthElement text="Sign Up" />
        </ul>
      </nav>
    </div>
  )
}

interface LiElementProps {
  text: string
}

function LiElement({ text }: LiElementProps) {
  return (
    <li>
      <a
        className="py-2 flex w-[200px] h-[40px] lg:py-auto lg:block lg:w-auto lg:h-auto lg:px-5"
        href="#"
      >
        {text}
      </a>
    </li>
  )
}

interface AuthElementProps {
  text: string
}

function AuthElement({ text }: AuthElementProps) {
  return (
    <li className="sm:hidden">
      <a className="py-2 flex w-[200px] h-[40px]" href="#">
        {text}
      </a>
    </li>
  )
}
