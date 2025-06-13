import { useEffect } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { members } from "./Members";

const MemberCard = ({ member }) => (
  <motion.div
    className="relative w-56 h-72 bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 cursor-pointer"
    whileHover={{ scale: 1.05 }}
  >
    <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
    <div className="p-1.5 text-center">
      <h3 className="text-lg font-semibold">{member.name}</h3>
      <p className="text-sm text-blue-400">{member.position}</p>
      <p className="text-xs text-gray-400">{member.branch}</p>
    </div>
    <motion.div className="absolute inset-0 bg-gray-950 bg-opacity-90 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-300 p-4 text-center">
      <p className="text-sm text-gray-300">{member.description}</p>
      <div className="flex gap-3 mt-3">
        {member.socials.instagram && (
          <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-500 hover:text-pink-400 text-xl" />
          </a>
        )}
        {member.socials.linkedin && (
          <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-500 hover:text-blue-400 text-xl" />
          </a>
        )}
      </div>
    </motion.div>
  </motion.div>
);

const ExecomMembers = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const branchCounselor = members.filter(member =>
    member.position === "Branch Counselor"
  );

  const branchMentor = members.filter(member =>
    member.position === "Mentor"
  );

  const coreExecom = members.filter(member =>
    [
      "Chairperson",
      "Vice Chairperson",
      "Student Advisor and Treasurer",
      "General Secretary",
      "Joint Secretary"
    ].includes(member.position)
  );

  const teamGroups = [
    {
      name: "Women in Engineering (WIE) Affinity Group",
      filter: (member) => member.position.includes("WIE"),
    },
    {
      name: "Computer Society Chapter",
      filter: (member) => member.position.includes("CS Chapter"),
    },
    {
      name: "Human Resources",
      filter: (member) => member.position.includes("Human Resources"),
    },
    {
      name: "Technical Activities Committee",
      filter: (member) => member.position.includes("Technical Activities Committee"),
    },
    {
      name: "Webmasters",
      filter: (member) => member.position === "Webmaster",
    },
    {
      name: "AI Masters SIG",
      filter: (member) => member.position.includes("AI Masters"),
    },
    {
      name: "DSA Team",
      filter: (member) => member.position.includes("DSA Team"),
    },
    {
      name: "Web Development Team",
      filter: (member) => member.position.includes("Web Development Team"),
    },
    {
      name: "Electronics Team",
      filter: (member) => member.position.includes("Electronics Team"),
    },
    {
      name: "Creative Team",
      filter: (member) => member.position === "Creative Head",
    },
    {
      name: "Editorial Team",
      filter: (member) => member.position.includes("Editorial Team"),
    },
    {
      name: "Graphic Design Team",
      filter: (member) => member.position.includes("Graphic Design Team"),
    },
    {
      name: "Outreach Team",
      filter: (member) => member.position.includes("Outreach Team"),
    },
    {
      name: "Social Media Team",
      filter: (member) => member.position.includes("Social Media"),
    },
    {
      name: "Photography Team",
      filter: (member) => member.position.includes("Photography Team"),
    },
    {
      name: "Research and Development Team SIG",
      filter: (member) => member.position.includes("Research and Development"),
    },
    {
      name: "HackGTBIT SIG",
      filter: (member) => member.position.includes("HackGTBIT"),
    },
    {
      name: "Polaris SIG",
      filter: (member) => member.position.includes("Polaris"),
    },
    {
      name: "Circuit Masters SIG",
      filter: (member) => member.position.includes("Circuit Masters"),
    }
  ];

  const renderMemberCards = (members, groupName) => {
    if (groupName === "Computer Society Chapter") {
      const firstRow = members.slice(0, 3);
      const secondRow = members.slice(3);

      return (
        <div className="space-y-6">
          <div className="flex flex-wrap justify-center gap-6">
            {firstRow.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
          {secondRow.length > 0 && (
            <div className="flex flex-wrap justify-center gap-6">
              {secondRow.map((member, index) => (
                <MemberCard key={index + 3} member={member} />
              ))}
            </div>
          )}
        </div>
      );
    }

    if (members.length <= 5) {
      return (
        <div className="flex flex-wrap justify-center gap-6">
          {members.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      );
    } else {
      const chunkSize = 3;
      const chunks = [];
      for (let i = 0; i < members.length; i += chunkSize) {
        chunks.push(members.slice(i, i + chunkSize));
      }

      return (
        <div className="space-y-6">
          {chunks.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className="flex flex-wrap justify-center gap-6">
              {chunk.map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <section id="execom" className="bg-gray-900 text-white py-20 px-5 min-h-screen">
      <div className="text-center mb-12 mt-8">
        <h2 className="text-5xl font-bold uppercase bg-gradient-to-r from-blue-500 via-white to-black text-transparent bg-clip-text drop-shadow-lg">
          Executive Committee
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-gray-400 to-black mx-auto mt-4"></div>
      </div>

      <div className="space-y-8 mb-12">
        <h3 className="text-4xl font-bold text-center uppercase bg-gradient-to-r from-blue-500 via-white to-black text-transparent bg-clip-text">
          Branch Counselor
        </h3>
        {renderMemberCards(branchCounselor)}
      </div>

      <div className="space-y-8 mb-12">
        <h3 className="text-3xl font-bold text-center uppercase bg-gradient-to-r from-blue-500 via-white to-black text-transparent bg-clip-text">
          Mentor
        </h3>
        {renderMemberCards(branchMentor)}
      </div>

      <div className="space-y-8 mb-16">
        <h3 className="text-2xl font-bold text-center uppercase bg-gradient-to-r from-blue-500 via-white to-black text-transparent bg-clip-text">
          Core Team
        </h3>
        {renderMemberCards(coreExecom)}
      </div>

      <div className="space-y-16">
        {teamGroups.map((group) => {
          const teamMembers = members.filter(group.filter);
          if (teamMembers.length === 0) return null;

          // Custom heading size for Creative Team
          const headingClass =
            group.name === "Creative Team"
              ? "text-4xl font-bold text-center uppercase bg-gradient-to-r from-blue-500 via-white to-black text-transparent bg-clip-text"
              : "text-2xl font-bold text-center uppercase bg-gradient-to-r from-blue-500 via-white to-black text-transparent bg-clip-text";

          return (
            <div key={group.name} className="space-y-8">
              <h3 className={headingClass}>{group.name}</h3>
              {renderMemberCards(teamMembers, group.name)}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExecomMembers;









