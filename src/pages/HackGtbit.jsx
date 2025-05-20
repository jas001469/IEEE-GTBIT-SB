import React from "react";
import { useEffect } from "react";

const HackGTBIT = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const team = [
    {
      name: 'Gurasees Singh',
      role: 'Lead',
      image: 'Gurasees Singh.jpg',
    },
    {
      name: 'Lakshaya Bhardwaj',
      role: 'Co-Lead',
      image: '/Lakshaya Bhardwaj.jpeg',
    },
    {
      name: 'Taranpreet Kaur', 
      role: 'Coordinator',
      image: '/Taranpreet Kaur.jpg',
    }
  ];

  return (
    <div className="hackgtbit-container">
      <div className="hackgtbit-white-box">
        <div className="hackgtbit-logo-wrapper">
          <img src="/HackGTBIT.png" alt="HackGTBIT" className="hackgtbit-logo" />
        </div>
        <p className="hackgtbit-lorem">
        HackGTBIT SIG 
        the first SIG of IEEE GTBIT SB, promotes innovation, creativity, and problem-solving through hackathons, seminars, and group assignments. It offers real-world experience, mentorship, and team-building, allowing newcomers as well as veterans to learn, share ideas, and develop useful technology solutions and prepare for the outside world.
</p>
      </div>

      {/* Team Section */}
      <section className="hackgtbitteam-section">
        <h2 className="hackgtbitteam-heading">Meet the Team</h2>

        {/* Lead and Co-Lead in same row */}
        <div className="hackgtbitteam-row leads">
          {[team[0], team[1]].map((member, index) => (
            <div className="hackgtbitteam-card" key={index}>
              <h4 className="hackgtbitteam-role">{member.role}</h4>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
            </div>
          ))}
        </div>

        {/* Coordinators in next row */}
        <div className="hackgtbitteam-row coordinators">
          {[team[2]].map((member, index) => (
            <div className="hackgtbitteam-card" key={index}>
              <h4 className="hackgtbitteam-role">{member.role}</h4>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HackGTBIT;
