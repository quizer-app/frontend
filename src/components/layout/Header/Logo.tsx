export default function Logo({ logo }: { logo: string }) {
  return (
    <>
      <a className="cursor-pointer" href="#">
        <div className="flex items-center justify-center gap-2">
          <img src={logo} loading="lazy" decoding="async" alt="logo" />
          <p className="font-bold text-2xl sm:text-[1.7rem] lg:text-3xl">
            Quizer
          </p>
        </div>
      </a>
    </>
  );
}
