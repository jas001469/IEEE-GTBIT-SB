import React from "react";
import { useEffect } from "react";

const AIM = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const team = [
    {
      name: 'Navjyot Kaur',
      role: 'Chairperson',
      image: '/Navjyot Kaur.jpeg',
    },
    {
      name: 'Gunisha Kaur',
      role: 'Vice Chairperson',
      image: '/gunisha kaur.jpg',
    },
    {
      name: 'Ishika Ahuja',
      role: 'General Secretary',
      image: '/Ishika Ahuja.jpg',
    },
    {
      name: 'Gurprajas Kaur Saluja',
      role: 'Coordinator',
      image: '/ Gurprajas Kaur Saluja.jpg',
    },
    {
      name: 'Gurpratit Kaur Saluja',
      role: 'Coordinator',
      image: '/Gurpratit Kaur Saluja.jpeg',
    },
    {
      name: 'Bavleen Kaur Saini',
      role: 'Coordinator',
      image: '/Bavleen Kaur Saini.jpg',
    }
  ];

  return (
    <div className="wie-container">
      <div className="wie-white-box">
        <div className="wie-logo-wrapper">
          <img src="/WIE.png" alt="WIE SIG" className="wie-logo" />
        </div>
        <p className="wie-lorem">
        The IEEE WIE Affinity Group, enables women in STEM with a diverse community. By providing professional development, networking, and mentorship, it promotes growth, benefits women and men, and inspires women's contributions in professional and personal life.
        </p>
      </div>

      {/* Team Section */}
      <section className="wieteam-section">
        <h2 className="wieteam-heading">Meet the Team</h2>

        {/* Chairperson - Single Card */}
        <div className="wieteam-row single">
          <div className="wieteam-card">
            <h4 className="wieteam-role">{team[0].role}</h4>
            <img src={team[0].image} alt={team[0].name} />
            <h3>{team[0].name}</h3>
          </div>
        </div>

        {/* Vice Chairperson + General Secretary */}
        <div className="wieteam-row">
          {[team[1], team[2]].map((member, index) => (
            <div className="wieteam-card" key={index}>
              <h4 className="wieteam-role">{member.role}</h4>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
            </div>
          ))}
        </div>

        {/* Coordinators - Three in a row */}
        <div className="wieteam-row coordinators">
          {[team[3], team[4], team[5]].map((member, index) => (
            <div className="wieteam-card" key={index}>
              <h4 className="wieteam-role">{member.role}</h4>
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

