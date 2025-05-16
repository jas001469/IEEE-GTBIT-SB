import React from "react";
import { useEffect } from "react";

const RnDSig = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const team = [
    {
      name: 'Harshit Khatri',
      role: 'Lead',
      image: '/ Harshit Khatri.jpg',
    },
    {
      name: 'Gurleen Kaur',
      role: 'Co-Lead',
      image: 'gurleen kaur.jpeg',
    },
    {
      name: 'Rattinoor Singh',
      role: 'Coordinator',
      image: '/ Rattinoor Singh.png',
    },
    {
      name: 'Jismeet Singh',
      role: 'Coordinator',
      image: '/Jismeet Singh.jpg',
    },
  ];

  return (
    <div className="rnd-container">
      <div className="rnd-white-box">
        <div className="rnd-logo-wrapper">
          <img src="/RnD logo.png" alt="RnDSig" className="rnd-logo" />
        </div>
        <p className="rnd-lorem">
        The R&D SIG fosters research and innovation by means of projects, seminars, and guest lectures. It develops a vibrant scientific community, fosters mentorship, and offers networking. By filling the gap between theory and practice, it improves careers and builds collective knowledge across disciplines for a brighter, collaborative future. </p>
      </div>

      {/* Team Section */}
      <section className="rndteam-section">
        <h2 className="rndteam-heading">Meet the Team</h2>

        {/* Lead and Co-Lead in same row */}
        <div className="rndteam-row leads">
          {[team[0], team[1]].map((member, index) => (
            <div className="rndteam-card" key={index}>
              <h4 className="rndteam-role">{member.role}</h4>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
            </div>
          ))}
        </div>

        {/* Coordinators in next row */}
        <div className="rndteam-row coordinators">
          {[team[2], team[3]].map((member, index) => (
            <div className="rndteam-card" key={index}>
              <h4 className="rndteam-role">{member.role}</h4>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RnDSig;