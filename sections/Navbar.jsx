import { useState } from "react"
import { motion } from "motion/react"

const links = [
    { page: "Home", href: "#" },
    { page: "About", href: "#about" },
    { page: "The Corner Store", href: "#cornerstore" },
    { page: "Contact", href: "#contact" },
]

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    function Navigation() {
    return (
      <ul className="nav-ul flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
        {links.map((link, idx) => (
          <li key={idx} className="nav-li max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
            {link.page === "Book" ? (
              <a href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              onClick={() => setIsOpen((prev) => !prev)}
            >{link.page}</a>
            ) : (
              <a href={link.href}
              className="nav-link text-lg md:text-base hover:text-white/80 transition-colors"
              onClick={() => setIsOpen((prev) => !prev)}
            >{link.page}</a>
            )}
          </li>
        ))}
      </ul>
    )
  }

    return (
        <div className="fixed inset-x-0 z-20 backdrop-blur-lg bg-primary">
        <div className="mx-auto c-space">
          <div className="flex items-center justify-between mx-2 py-2 sm:py-0">
            <a href="#hero"
            onClick={() => setIsOpen(false)}
            className="text-xl font-bold transition-colors text-white hover:text-white/80">
              LCO
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden">
              <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} className="w-6 h-6" alt="toggle" />
            </button>
            <nav className="hidden sm:flex"><Navigation /></nav>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ maxHeight: "100vh" }}
            transition={{ duration: 1 }}
            className="block overflow-hidden text-center sm:hidden">
            <nav className="pb-5">
              <Navigation />
            </nav>
          </motion.div>
        )}
      </div>
    )
}