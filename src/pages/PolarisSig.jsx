import React from "react";
import { useEffect } from "react";

const PolarisSig = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const team = [
    {
      name: 'Devanshi Singh',
      role: 'Lead',
      image: '/Devanshi Singh.jpeg',
    },
    {
      name: 'Jasleen Kaur',
      role: 'Co-Lead',
      image: 'Jasleen Kaur.jpg',
    },
    {
      name: 'Jasnoor Kaur', 
      role: 'Coordinator',
      image: '/ Jasnoor Kaur.jpg',
    }
  ];

  return (
    <div className="polaris-container">
      <div className="polaris-white-box">
        <div className="polaris-logo-wrapper">
          <img src="Polaris Sig.png" alt="Polaris" className="polaris-logo" />
        </div>
        <p className="polaris-lorem">
        For those who appreciate traveling deep into space and seeing galaxies that are billions of light years away, Polaris SIG is an astronomy-focused project. It offers a collaborative environment where students can explore their interests, work on research projects, and engage in a variety of learning and curiosity-sparking activities. 
        </p>
      </div>

      {/* Team Section */}
      <section className="polaristeam-section">
        <h2 className="polaristeam-heading">Meet the Team</h2>

        {/* Lead and Co-Lead in same row */}
        <div className="polaristeam-row leads">
          {[team[0], team[1]].map((member, index) => (
            <div className="polaristeam-card" key={index}>
              <h4 className="polaristeam-role">{member.role}</h4>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
            </div>
          ))}
        </div>

        {/* Coordinators in next row */}
        <div className="polaristeam-row coordinators">
          {[team[2]].map((member, index) => (
            <div className="polaristeam-card" key={index}>
              <h4 className="polaristeam-role">{member.role}</h4>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PolarisSig;
