import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  // Function to navigate to home first, then scroll to contact without # in URL
  const handleContactClick = () => {
    navigate("/");  // ✅ Navigate to Home first

    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });  // ✅ Scroll without changing URL
      }
    }, 100);  // Small delay for smooth transition
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex items-center justify-between md:px-6">

        {/* Logo */}
        <h1 className="relative mt-7 ml-5">
          <a href="/" className="logo"></a>
          <img
            src="/IEEE logo1.png"
            width={140}  
            height={140} 
            alt="IEEE GTBIT"
            className="drop-shadow-[0_0_25px_rgba(0,183,255,0.9)] brightness-110 contrast-125 
                      animate-pulse transition-all duration-300 transform hover:scale-105"
          />
        </h1>

        {/* Navbar Wrapper - Centered */}
        <div className="flex-1 flex justify-center relative">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? 'close' : 'menu'}
            </span>
          </button>

          <Navbar navOpen={navOpen} />
        </div>

        {/* Contact Me Button - Navigates to Home then scrolls without # in URL */}
        <button
          onClick={handleContactClick}  
          className="btn btn-secondary hidden md:block"
        >
          Contact Us
        </button>

      </div>
    </header>
  );
};

export default Header;



