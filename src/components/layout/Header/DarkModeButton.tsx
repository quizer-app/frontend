import { useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function DarkModeButton() {
  const [isDark, setIsDark] = useState<boolean>(false)

  const toggleDarkMode = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="flex p-[13px]">
      <button onClick={toggleDarkMode}>
        {isDark ? (
          <Sun width={30} height={30} />
        ) : (
          <Moon width={30} height={30} />
        )}
      </button>
    </div>
  )
}
