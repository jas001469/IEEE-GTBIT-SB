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
        The Circuit Masters SIG is a lively community of electronics enthusiasts, providing hands-on learning, workshops, and design competitions. It is open to everyone, from beginner to expert, and encourages creativity, collaboration, and innovation. Members gain from expert advice, useful resources, and a supportive community to achieve success in circuit design and electronics.
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
