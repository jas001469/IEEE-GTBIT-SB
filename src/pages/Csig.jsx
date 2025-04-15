import React from "react";
import { useEffect } from "react";

const Csig = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const team = [
    {
      name: 'Vinay Dhaka',
      role: 'Lead',
      image: '/ Vinay Dhaka.jpg',
    },
    {
      name: 'Bhumika Bhardwaj',
      role: 'Co-Lead',
      image: '/Bhumika Bharadwaj.jpg',
    },
    {
      name: 'Nakul Chadda',
      role: 'Coordinator',
      image: 'nakul.jpg',
    },
    {
      name: 'Prajjwal Gupta',
      role: 'Coordinator',
      image: '/Prajjwal Shekhar Gupta.JPG',
    },
  ];

  return (
    <div className="csig-container">
      <div className="csig-white-box">
        <div className="csig-logo-wrapper">
          <img src="/Csig.png" alt="CSIG" className="csig-logo" />
        </div>
        <p className="csig-lorem">
          The IEEE Computer Society Interest Group (CSIG) at GTBIT focuses on advancing computer science knowledge through workshops, coding competitions, and tech seminars. Our team works to enhance members' technical skills and foster innovation in computing technologies.
        </p>
      </div>

      {/* Team Section */}
      <section className="csigteam-section">
        <h2 className="csigteam-heading">Meet the Team</h2>

        {/* Lead and Co-Lead in same row */}
        <div className="csigteam-row leads">
          {[team[0], team[1]].map((member, index) => (
            <div className="csigteam-card" key={index}>
              <h4 className="csigteam-role">{member.role}</h4>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
            </div>
          ))}
        </div>

        {/* Coordinators in next row */}
        <div className="csigteam-row coordinators">
          {[team[2], team[3]].map((member, index) => (
            <div className="csigteam-card" key={index}>
              <h4 className="csigteam-role">{member.role}</h4>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Csig;
