import ListElement from "./ListElement";

export default function NavLinks({ isOpen }: { isOpen: boolean }) {
  return (
    <div>
      <ul
        className={`${isOpen ? "flex" : "hidden"} flex-col bg-secondary
          absolute top-20 rounded-sm border-[.5px] gap-[10px] p-5 z-50
          border-textPrimary border-opacity-20 right-4 
          sm:right-[calc(50%-18.5rem)] md:right-[calc(50%-22.5rem)]
          sm:gap-4 sm:top-[5.5rem] lg:bg-transparent lg:flex-row lg:static
          lg:border-none lg:flex lg:gap-9 lg:ml-8 xl:gap-12 xl:ml-14
          
          `}
      >
        <ListElement href="/quiz_search">Quizes</ListElement>
        <ListElement href="/about">About</ListElement>
        <ListElement href="/users">Users</ListElement>
        <ListElement href="/support">Support</ListElement>
        <ListElement href="/signin" auth={true}>
          Sign In
        </ListElement>
        <ListElement href="/signup" auth={true}>
          Sign Up
        </ListElement>
      </ul>
    </div>
  );
}
