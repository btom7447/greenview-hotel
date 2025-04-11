import Link from "next/link";
import { X, Facebook, Instagram, Mail, MapPin, Music2 } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();

  return (
    <aside
      className={`z-40 fixed top-0 right-0 h-[100dvh] w-90 bg-white shadow-lg transform transition-transform duration-300 md:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      <header className="flex items-center justify-between px-5 pt-6">
        <Image
          src="/images/greenview-logo.png"
          alt="Greenview Hotel LTD logo"
          width={90}
          height={90}
          className="object-contain"
          unoptimized
        />
        <button
          className="p-2"
          onClick={() => setIsOpen(false)}
          aria-label="Close Menu"
        >
          <X size={24} color="#000" />
        </button>
      </header>

      <nav
        className="mt-10 px-7"
        aria-label="Primary"
      >
        <ul className="flex flex-col space-y-10">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/rooms", label: "Rooms & Suite" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <li
              key={href}
              className="w-full pb-1 border-b border-gray-300"
            >
              <Link
                href={href}
                className="relative text-xl text-black hover:text-gray-900 transition-colors duration-300 font-poppins"
                onClick={() => setIsOpen(false)}
              >
                {label}
                <span
                  className={`absolute left-0 -bottom-2 h-0.5 transition-all duration-200 ${
                    pathname === href ? "w-full bg-black" : "w-0 bg-black/0"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <footer className="p-7 absolute bottom-0 left-0 w-full flex items-center justify-between">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="p-3 border border-black flex items-center justify-center"
        >
          <Facebook size={25} color="#000" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="p-3 border border-black flex items-center justify-center"
        >
          <Instagram size={25} color="#000" />
        </a>
        <a
          href="https://musicplatform.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Music"
          className="p-3 border border-black flex items-center justify-center"
        >
          <Music2 size={25} color="#000" />
        </a>
      </footer>
    </aside>
  );
};

export default HamburgerMenu;
