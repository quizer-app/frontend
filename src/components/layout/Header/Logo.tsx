import { Link } from "react-router-dom";

export default function Logo({ logo }: { logo: string }) {
  return (
    <Link to="/" className="cursor-pointer">
      <div className="flex items-center justify-center gap-2 lg:gap-3 lg:pb-1 z-50">
        <img
          src={logo}
          loading="lazy"
          decoding="async"
          alt="logo"
          className="xl:w-[37.2px] xl:h-[30px] z-50"
        />
        <p className="font-bold text-2xl sm:text-[1.7rem] lg:text-3xl z-50">
          Quizer
        </p>
      </div>
    </Link>
  );
}
