import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Header() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navLink =
    "relative font-primary text-lg font-semibold text-primary dark:text-accent transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full";

  return (
    <header className="sticky top-0 z-20 backdrop-blur-md bg-white/80 dark:bg-black/60 border-b border-border dark:border-darkborder">
      <div className="max-w-[1152px] mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
          Crazy Stickers
        </a>

        <nav className="flex items-center gap-6">
          <a href="/" className={navLink}>Home</a>
          <a href="/about" className={navLink}>About</a>
          <a href="/contact" className={navLink}>Contact</a>

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="w-9 h-9 rounded-full border border-border dark:border-darkborder  flex items-center justify-center hover:scale-110 transition"
          >
            <FontAwesomeIcon 
            icon={theme === "dark" ? faMoon : faSun}
            className=" text-primary dark:text-primary transition"
            />
          </button>

          <FontAwesomeIcon
            icon={faShoppingBasket}
            className="text-primary dark:text-accent text-xl cursor-pointer hover:scale-110 transition"
          />
        </nav>
      </div>
    </header>
  );
}
