import ListElement from "./ListElement";

interface NavLinksProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function NavLinks({ isOpen, onClick }: NavLinksProps) {
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
        <ListElement
          href="/quiz-search"
          onClick={onClick}
          search={{ pageNumber: 1, pageSize: 3 }}
        >
          Quizes
        </ListElement>
        <ListElement href="/about" onClick={onClick}>
          About
        </ListElement>
        <ListElement href="/users" onClick={onClick}>
          Users
        </ListElement>
        <ListElement href="/support" onClick={onClick}>
          Support
        </ListElement>
        <ListElement href="/signin" onClick={onClick} auth={true}>
          Sign In
        </ListElement>
        <ListElement href="/signup" onClick={onClick} auth={true}>
          Sign Up
        </ListElement>
      </ul>
    </div>
  );
}
