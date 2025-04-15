import React from "react";
import { motion } from "framer-motion";

const JoinUs = () => {
  return (
    <section id="join" className="join-section">
      {/* Section Header */}
      <motion.h2
        className="join-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Join IEEE 
      </motion.h2>

      {/* Main Container */}
      <div className="join-container">
        <div className="join-grid">
          {/* Left - Why Join IEEE */}
          <motion.div
            className="join-box"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="join-image">
              <img src="/Execom.jpg" alt="Why Join IEEE" className="image-style" />
            </div>
            <h3 className="join-subtitle blue">Why Join IEEE?</h3>
            <p className="join-text">
              Be part of a global tech community, gain industry exposure, and enhance your career.
            </p>
            <p className="join-text small">
              Connect with professionals and access exclusive resources.
            </p>
          </motion.div>

          {/* Right - What We Do */}
          <motion.div
            className="join-box"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="join-image">
              <img src="/IEEE event.png" alt="What We Do" className="image-style" />
            </div>
            <h3 className="join-subtitle pink">What We Do?</h3>
            <p className="join-text">
              We organize workshops, hackathons, networking events, and tech projects.
            </p>
            <p className="join-text small">
              Empower students with hands-on learning experiences.
            </p>
          </motion.div>
        </div>

        {/* Join Now Button */}
        <motion.div
          className="join-button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <a href="https://www.ieee.org/">JOIN IEEE GTBIT SB</a>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUs;


















