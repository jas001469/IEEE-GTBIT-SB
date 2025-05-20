import React from "react";
import { useEffect } from "react";

const CsChapter = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); 
  
  const team = [
    {
      name: 'Supreet Kaur',
      role: 'Chairperson',
      image: '/Supreet RJ Kaur.jpg',
    },
    {
      name: 'Harjas Singh',
      role: 'Vice Chairperson',
      image: '/Harjas Singh.jpg',
    },
    {
      name: 'Gagandeep kaur',
      role: 'General Secretary',
      image: '/Gagandeep Kaur.jpeg',
    },
    {
      name: 'Japmanya Kaur',
      role: 'Coordinator',
      image: '/ Japmanya Kaur.JPG',
    },
    {
      name: 'Archita Garg',
      role: 'Coordinator',
      image: '/Archita Garg.jpg',
    }
  ];

  return (
    <div className="cs-container">
      <div className="cs-white-box">
        <div className="cs-logo-wrapper">
          <img src="/IEEE CS chapter.jpeg" alt="CS SIG" className="cs-logo" />
        </div>
        <p className="aim-lorem">
        The IEEE CS Chapter, promotes computer science talent through projects, workshops, and mentoring. It promotes innovation, collaboration, and technical development, enabling the students to remain current, become professionals, and develop improved programming and problem-solving skills.

</p>
      </div>

      {/* Team Section */}
      <section className="csteam-section">
        <h2 className="csteam-heading">Meet the Team</h2>

        {/* Chairperson - Single Card */}
        <div className="csteam-row single">
          <div className="csteam-card">
            <h4 className="csteam-role">{team[0].role}</h4>
            <img src={team[0].image} alt={team[0].name} />
            <h3>{team[0].name}</h3>
          </div>
        </div>

        {/* Vice Chairperson + General Secretary */}
        <div className="csteam-row">
          {[team[1], team[2]].map((member, index) => (
            <div className="csteam-card" key={index}>
              <h4 className="csteam-role">{member.role}</h4>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
            </div>
          ))}
        </div>

        {/* Coordinators - Three in a row */}
        <div className="csteam-row coordinators">
          {[team[3], team[4], team[5]].map((member, index) => (
            <div className="csteam-card" key={index}>
              <h4 className="csteam-role">{member.role}</h4>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CsChapter;
