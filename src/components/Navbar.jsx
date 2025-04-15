import { useRef, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const activeBox = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", link: "#home", type: "scroll" }, // Changed to scroll
    { label: "About Us", link: "#about", type: "scroll" },
    { label: "Chapters", link: "#chapters", type: "scroll" },
    { label: "Events", link: "#events", type: "scroll" },
    { label: "Execom", link: "/execom", type: "route" },
    { label: "Gallery", link: "/gallery", type: "route" }, // Separate page
    
   
  ];

  useEffect(() => {
    const updateActiveBox = () => {
      const activeLink = document.querySelector(".nav-link.active");
      if (activeLink && activeBox.current) {
        activeBox.current.style.top = `${activeLink.offsetTop}px`;
        activeBox.current.style.left = `${activeLink.offsetLeft}px`;
        activeBox.current.style.width = `${activeLink.offsetWidth}px`;
        activeBox.current.style.height = `${activeLink.offsetHeight}px`;
      }
    };

    updateActiveBox();
    window.addEventListener("resize", updateActiveBox);
    return () => window.removeEventListener("resize", updateActiveBox);
  }, [activeIndex]);

  const handleScroll = (e, link, index) => {
    e.preventDefault();
    setActiveIndex(index);

    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => {
        document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, type }, index) =>
        type === "route" ? (
          <Link
            key={index}
            to={link}
            className={`nav-link ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {label}
          </Link>
        ) : (
          <a
            key={index}
            href={link}
            className={`nav-link ${activeIndex === index ? "active" : ""}`}
            onClick={(e) => handleScroll(e, link, index)}
          >
            {label}
          </a>
        )
      )}

      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;









