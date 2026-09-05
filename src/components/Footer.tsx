import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(90deg,#D92157_0%,#291F75_100%)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          {/* School Information */}
          <div>
            <h2 className="mb-4 text-2xl font-bold">
              JADHAV Public School
            </h2>

            <div className="space-y-2 text-sm">
              <p>📍 Address: Pune, Maharashtra, India</p>
              <p>📞 Phone: +91 XXXXX XXXXX</p>
              <p>✉️ Email: info@jadhavpublicschool.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:underline">
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:underline">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:underline">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:underline">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Social Media
            </h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="hover:opacity-80"
                aria-label="Facebook"
              >
                Facebook
              </a>

              <a
                href="#"
                className="hover:opacity-80"
                aria-label="Instagram"
              >
                Instagram
              </a>

              <a
                href="#"
                className="hover:opacity-80"
                aria-label="YouTube"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/30 pt-5 text-center text-sm">
          © 2026 JADHAV Public School. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
