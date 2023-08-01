import { Menu, X } from "lucide-react"

interface NavToggleProps {
  toggleNavbar: () => void
  isOpen: boolean
}

export default function NavToggle({ toggleNavbar, isOpen }: NavToggleProps) {
  return (
    <div className="flex p-[10px] lg:hidden">
      <button onClick={toggleNavbar}>
        {isOpen ? (
          <X width={36} height={36} />
        ) : (
          <Menu width={36} height={36} />
        )}
      </button>
    </div>
  )
}
