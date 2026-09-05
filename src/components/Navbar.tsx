import { Link } from "react-router-dom";

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
  return (
    <nav className="h-12.5 bg-[#2A2076] text-white">
      <div className="mx-auto flex h-full max-w-7xl items-stretch justify-between px-6">

        <Link
          to="/"
          className="flex h-full items-center px-4 text-2xl font-bold text-white hover:bg-[#191155]"
        >
          JADHAV Public School
        </Link>

        <div className="flex h-full">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex h-full items-center px-4 text-white hover:bg-[#191155]"
            >
              {item.label}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
