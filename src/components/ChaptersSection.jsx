import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for navigation

const chapters = [
  { 
    title: "Artificial Intelligence Masters SIG", 
    bgColor: "bg-[#FFD700]/20", 
    img: "/AIM sig.png",
    description: "Exploring AI, ML, and deep learning innovations.",
    link: "/aimsig"  
  },
  { 
    title: "Women in Engineering Chapter", 
    bgColor: "bg-[#DA70D6]/20", 
    img: "/WIE.png",
    description: "Empowering women in tech through mentorship and innovation.",
    link: "/wiesig"
  },
  { 
    title: "Circuit Masters SIG", 
    bgColor: "bg-[#87CEEB]/20", 
    img: "/Csig.png",
    description: "Diving into electronics, PCB design, and IoT.",
    link: "/csig"
  },
  { 
    title: "CS Chapter", 
    bgColor: "bg-[#FFB6C1]/20", 
    img: "/IEEE CS chapter.jpeg",
    description: "Computer science enthusiasts working on cutting-edge projects.",
    link: "/cschapter"
  },
  { 
    title: "Polaris SIG", 
    bgColor: "bg-[#4682B4]/20", 
    img: "/Polaris Sig.png",
    description: "Exploring astronomy, space tech, and astrophysics.",
    link: "/polarissig"
  },
  { 
    title: "Research and Development SIG", 
    bgColor: "bg-[#FF8C00]/20", 
    img: "/RnD logo.png",
    description: "Innovative research projects across various domains.",
    link: "/rndsig"
  },
  { 
    title: "HackGTBIT", 
    bgColor: "bg-[#1E90FF]/20", 
    img: "/HackGTBIT.png",
    description: "Annual hackathon driving innovation and creativity.",
    link: "/hackgtbit",
    customPosition: "md:col-span-1 md:col-start-2" // Moves HackGTBIT to the middle column of the next row
  },
];

const ChaptersSection = () => {
  return (
    <section id="chapters" className="chapters-section">
      {/* Section Heading */}
      <div className="chapters-heading">
        <h2 className="chapters-title">
          <span className="chapters-title-gradient">Chapters</span> & SIGs
        </h2>
        <div className="chapters-underline"></div>
      </div>

      {/* Grid Layout */}
      <div className="chapters-grid">
        {chapters.map((chapter, index) => (
          <motion.div
            key={index}
            className={`chapter-card ${chapter.bgColor} ${chapter.customPosition || ''}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <motion.img 
              src={chapter.img} 
              alt={chapter.title} 
              className="chapter-image"
              transition={{ duration: 0.3 }}
            />
            <h3 className="chapter-title">{chapter.title}</h3>
            <p className="chapter-description">{chapter.description}</p>
            
            {/* "Know More" button */}
            <Link to={chapter.link}>
              <motion.button 
                className="know-more-btn"
              >
                Know More
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ChaptersSection;







