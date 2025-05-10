import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [contactActive, setContactActive] = useState(false);
  const navigate = useNavigate();

  const handleContactClick = () => {
    setContactActive(true);
    setNavOpen(false);

    navigate("/");

    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-25 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex items-center justify-between md:px-6">
        {/* Logo - always left */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center">
            <img
              src="/IEEE logo1.png"
              width={140}
              height={140}
              alt="IEEE GTBIT"
              className="drop-shadow-[0_0_25px_rgba(0,183,255,0.9)] brightness-110 contrast-125 
                        animate-pulse transition-all duration-300 transform hover:scale-105"
            />
          </a>
        </div>

        {/* Navbar - centered on medium and up */}
        <div className="hidden md:flex flex-1 justify-center">
          <Navbar
            navOpen={navOpen}
            setNavOpen={setNavOpen}
            contactActive={contactActive}
            setContactActive={setContactActive}
          />
        </div>

        {/* Right Side Buttons (menu + contact) */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Contact Us - only shown on desktop */}
          <button
            onClick={handleContactClick}
            className={`btn btn-secondary hidden md:block ${contactActive ? "active-contact" : ""}`}
          >
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded text-white text-3xl">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav - Visible when navOpen is true */}
      {navOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-zinc-900/90 z-50">
          <Navbar
            navOpen={navOpen}
            setNavOpen={setNavOpen}
            contactActive={contactActive}
            setContactActive={setContactActive}
          />

          {/* Contact Us Button inside mobile menu */}
          {/* <div className="w-full px-4 pb-4">
            <button
              onClick={handleContactClick}
              className={`btn btn-secondary w-full mt-2 ${contactActive ? "active-contact" : ""}`}
            >
              Contact Us
            </button>
          </div> */}
        </div>
      )}
    </header>
  );
};

export default Header;





