interface LogoProps {
  logo: string;
}

export default function Logo({ logo }: LogoProps) {
  return (
    <div>
      <a className="h-[88px] cursor-pointer" href="#">
        <div className="flex items-center justify-center">
          <img
            src={logo}
            width={37.2}
            height={30}
            loading="lazy"
            decoding="async"
            alt="logo"
          />
          <p className="font-[650] text-[30px] pb-1 px-3">Quizer</p>
        </div>
      </a>
    </div>
  );
}
