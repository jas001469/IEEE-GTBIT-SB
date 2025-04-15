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

  // Filter groups
  const branchCounselorAndMentor = members.filter(member =>
    member.position === "Branch Counselor" || member.position === "Mentor"
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
      name: "Human Resources",
      filter: (member) => member.position.includes("Human Resources"),
    },
    {
      name: "Technical Activities Committee",
      filter: (member) => member.position.includes("Technical Activities Committee"),
    },
    {
      name: "Electronics Team",
      filter: (member) => member.position.includes("Electronics Team"),
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
      name: "Webmasters",
      filter: (member) => member.position === "Webmaster",
    },
    {
      name: "Women in Engineering (WIE)",
      filter: (member) => member.position.includes("WIE"),
    },
    {
      name: "Computer Society Chapter",
      filter: (member) => member.position.includes("CS Chapter"),
    },
    {
      name: "Research and Development Team",
      filter: (member) => member.position.includes("Research and Development"),
    },
    {
      name: "HackGTBIT",
      filter: (member) => member.position.includes("HackGTBIT"),
    },
    {
      name: "Polaris",
      filter: (member) => member.position.includes("Polaris"),
    },
    {
      name: "AI Masters",
      filter: (member) => member.position.includes("AI Masters"),
    },
    {
      name: "Circuit Masters",
      filter: (member) => member.position.includes("Circuit Masters"),
    }
  ];

  return (
    <section id="execom" className="bg-gray-900 text-white py-20 px-5 min-h-screen">
      {/* Section Heading */}
      <div className="text-center mb-12 mt-8">
        <h2 className="text-5xl font-bold uppercase bg-gradient-to-r from-blue-500 via-white to-black text-transparent bg-clip-text drop-shadow-lg">
          Executive Committee
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-gray-400 to-black mx-auto mt-4"></div>
      </div>

      {/* Branch Counselor & Mentor Row */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {branchCounselorAndMentor.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>

      {/* Core Execom Row */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {coreExecom.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>

      {/* Team Group Sections */}
      <div className="space-y-16">
        {teamGroups.map((group) => {
          const teamMembers = members.filter(group.filter);
          if (teamMembers.length === 0) return null;

          return (
            <div key={group.name} className="space-y-8">
              <h3 className="text-2xl font-bold text-center uppercase bg-gradient-to-r from-blue-500 via-white to-black text-transparent bg-clip-text">
                {group.name}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {teamMembers.map((member, index) => (
                  <MemberCard key={index} member={member} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExecomMembers;








