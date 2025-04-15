import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaNewspaper, FaBookOpen } from "react-icons/fa";

const AboutUs = () => {
  // States for animated numbers
  const [years, setYears] = useState(0);
  const [members, setMembers] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Images for the slider
  const sliderImages = [
    "/GTBIT image.jpeg",
    "/IEEE event3.png",
    "/IEEE event4.png",
    "/IEEE event.png", // Replace with your actual image paths
    "/Execom.jpg",
    "/IEEE event1.png",
    "/IEEE event2.png",
  ];

  // Function to animate numbers
  const animateNumber = (setter, target, duration) => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / target));
    const timer = setInterval(() => {
      start += 1;
      setter(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);
  };

  // Faster auto slide effect (changed from 3000ms to 2000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 2000); // Faster slide change (every 2 seconds now)

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && years === 0 && members === 0) {
          animateNumber(setYears, 10, 1000); 
          animateNumber(setMembers, 500, 1500); 
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [years, members]);

  return (
    <section id="about" className="about-section">
      {/* Heading */}
      <h2 className="about-heading">About Us</h2>
      <div className="about-underline"></div>

      {/* Content Section */}
      <div className="about-content">
        {/* Text Section */}
        <div className="about-text">
          <p>
          In 2008, the IEEE GTBIT Student Branch was established, showcasing dedication to creativity and cooperation. The organization has prospered since its founding thanks to the zeal of dedicated students and mentors who have a wide range of creative ideas and a strong passion for technology. The branch continues to develop every year, embracing fresh talent and fostering an atmosphere that supports their growth.
          </p>
          <br />
          <p>
            We focus on enhancing technical skills through active chapters: IEEE Student Branch, IEEE WIE, and IEEE CS, creating a strong peer-network bond.
          </p>
          
          {/* Buttons Positioned Below Text */}
          <div className="button-container">
          <a
  href="/pdf/IEEE GTBIT SB NEWSLETTER_compressed.pdf"
  className="glass-button"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaNewspaper className="button-icon" /> Newsletter
</a>
<a
  href="/pdf/TECHNICALIEEE ISSUE 3_compressed.pdf"
  className="glass-button"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaBookOpen className="button-icon" /> Magazine
</a>
          </div>
        </div>
        
        {/* Image Slider Section */}
        <div className="about-image-container">
          <div className="slider-wrapper">
            {sliderImages.map((image, index) => (
              <motion.div
                key={index}
                className="slide"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: index === currentSlide ? 1 : 0,
                  zIndex: index === currentSlide ? 1 : 0
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <img 
                  src={image} 
                  alt={`IEEE GTBIT ${index + 1}`} 
                  className="about-image" 
                />
              </motion.div>
            ))}
          </div>
          
          {/* Slider Indicators */}
          <div className="slider-indicators">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="about-stats">
        <motion.div 
          className="about-stat"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <p>Years of Experience</p>
          <h3 className="rolling-number">{years}+</h3>
        </motion.div>

        <motion.div 
          className="about-stat"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>Total Members of SB</p>
          <h3 className="rolling-number">{members}+</h3>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;




  