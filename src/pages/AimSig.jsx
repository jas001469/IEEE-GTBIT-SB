import React from "react";
import { useEffect } from "react";

const AIM = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const team = [
    {
      name: 'Ashnoor Singh',
      role: 'Lead',
      image: '/Ashnoor Singh.jpg',
    },
    {
      name: 'Divya Rehat Singh Kohli',
      role: 'Co-Lead',
      image: '/Divya Rehat Kohli.JPG',
    },
    {
      name: 'Kiratmeet Singh',
      role: 'Coordinator',
      image: '/Kiratmeet Singh.jpg',
    },
    {
      name: 'Anushka Tripathi',
      role: 'Coordinator',
      image: '/Anushka Tripathi.jpg',
    },
  ];

  return (
    <div className="aim-container">
      <div className="aim-white-box">
        <div className="aim-logo-wrapper">
          <img src="/AIM sig.png" alt="AIM SIG" className="aim-logo" />
        </div>
        <p className="aim-lorem">
        The IEEE GTBIT SB's AI-ML SIG aims to promote artificial intelligence research and development for anyone with an interest in machine learning. It offers a collaborative setting where students may work on real-world problems, develop technologies, and engage in experiential learning. Regardless of your level of experience, AI-ML SIG allows you to study intelligent systems and shape technological advancement.
        </p>
      </div>

      {/* Team Section */}
      <section className="team-section">
        <h2 className="team-heading">Meet the Team</h2>

        {/* Lead + Co-Lead side-by-side */}
        <div className="team-row">
          {[team[0], team[1]].map((member, index) => (
            <div className="team-card" key={index}>
              <h4 className="team-role">{member.role}</h4>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
            </div>
          ))}
        </div>

        {/* Coordinators */}
        <div className="team-row coordinators">
          {team.slice(2).map((member, index) => (
            <div className="team-card" key={index}>
              <h4 className="team-role">{member.role}</h4>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};


export default AIM;
