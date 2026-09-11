import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Academics", path: "/academics" },
  { label: "Admissions", path: "/admissions" },
  { label: "Facilities", path: "/facilities" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmissionsOpen, setIsAdmissionsOpen] = useState(false);

  // Lock page scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsAdmissionsOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 h-12.5 w-full bg-[#2A2076] text-white shadow-md">
      {/* Navbar */}
      <div className="mx-auto flex h-12.5 max-w-7xl items-center justify-between px-4 sm:px-6">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex h-full items-center text-lg font-bold text-white transition-colors hover:bg-[#191155] sm:px-2 sm:text-xl md:text-2xl"
        >
          JADHAV Public School
        </Link>

        {/* Desktop / Tablet Navigation */}
        <div className="hidden h-full md:flex">
          {navItems.map((item) => {
            // Admissions with dropdown
            if (item.label === "Admissions") {
              return (
                <div
                  key={item.path}
                  className="relative h-full"
                  onMouseEnter={() => setIsAdmissionsOpen(true)}
                  onMouseLeave={() => setIsAdmissionsOpen(false)}
                >
                  {/* Admissions */}
                  <Link
                    to={item.path}
                    className="flex h-full items-center gap-1 px-2 text-sm text-white transition-colors hover:bg-[#191155] lg:px-3 lg:text-base xl:px-4"
                  >
                    {item.label}

                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${
                        isAdmissionsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  {/* Admissions Dropdown */}
                  <div
                    className={`absolute left-0 top-full w-52 overflow-hidden rounded-b-md bg-white shadow-xl transition-all duration-200 ${
                      isAdmissionsOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                    }`}
                  >
                    {/* <Link
                      to="/admissions"
                      onClick={() => setIsAdmissionsOpen(false)}
                      className="block px-5 py-3 text-sm text-[#2A2076] transition-colors hover:bg-[#f5f3fa]"
                    >
                      Admissions
                    </Link> */}

                    <Link
                      to="/admissions/enquiry"
                      onClick={() => setIsAdmissionsOpen(false)}
                      className="block border-t border-gray-100 px-5 py-3 text-sm text-[#2A2076] transition-colors hover:bg-[#f5f3fa] hover:text-[#D92157]"
                    >
                      Admission Enquiry
                    </Link>
                  </div>
                </div>
              );
            }

            // All other navigation items
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex h-full items-center px-2 text-sm text-white transition-colors hover:bg-[#191155] lg:px-3 lg:text-base xl:px-4"
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="flex items-center justify-center rounded-md p-2 text-white transition-transform duration-200 hover:bg-[#191155] active:scale-90 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 right-0 top-12.5 bottom-0 md:hidden ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={closeMenu}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Right → Left Menu */}
        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-sm overflow-y-auto shadow-2xl transition-all duration-400 ease-out ${
            isMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
          style={{
            background:
              "linear-gradient(270deg, rgba(41,31,117,0.94) -13.59%, rgba(214,13,71,0.94) 100.48%)",
          }}
        >
          <div className="py-4">
            {navItems.map((item, index) => {
              // Mobile Admissions dropdown
              if (item.label === "Admissions") {
                return (
                  <div
                    key={item.path}
                    className={`border-b border-white/15 transition-all duration-300 ${
                      isMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isMenuOpen
                        ? `${index * 50}ms`
                        : "0ms",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setIsAdmissionsOpen((previous) => !previous)
                      }
                      className="flex w-full items-center justify-between px-6 py-4 text-left text-white transition-colors hover:bg-white/10"
                      aria-expanded={isAdmissionsOpen}
                    >
                      <span>Admissions</span>

                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          isAdmissionsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mobile Admissions Submenu */}
                    <div
                      className={`overflow-hidden bg-black/10 transition-all duration-300 ${
                        isAdmissionsOpen
                          ? "max-h-32 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <Link
                        to="/admissions"
                        onClick={closeMenu}
                        className="block px-10 py-3 text-sm text-white/90 transition-colors hover:bg-white/10"
                      >
                        Admissions
                      </Link>

                      <Link
                        to="/admissions/enquiry"
                        onClick={closeMenu}
                        className="block px-10 py-3 text-sm text-white/90 transition-colors hover:bg-white/10"
                      >
                        Admission Enquiry
                      </Link>
                    </div>
                  </div>
                );
              }

              // All other mobile navigation items
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`block border-b border-white/15 px-6 py-4 text-white transition-all duration-300 hover:bg-white/10 ${
                    isMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMenuOpen
                      ? `${index * 50}ms`
                      : "0ms",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;