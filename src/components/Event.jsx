import { image } from "framer-motion/client";
import React from "react";

const events = [
  {
    id: 1,
    title: "Mini-Apogee",
    description: "IEEE GTBIT Student Branch hosted a successful competition “Case Study” and “Mobile Photography” in collaboration with BITS Pilani. It was a 24 hour competition which focused on critical analysis of risks and decision making ability and photography skills of participants. Participants got a market entry level problem statement and made a solution deck in .pptx format. Also Participants were to take photographs of the college campus as well as the various events happening at that time",
    image: "Mini apogee.png",
  },
  {
    id:2,
    title: "Vega Processors",
    description: "The Vega Processors Workshop was organized by IEEE GTBIT and IIPC GTBIT in partnership with the IT and ECE department. The workshop provided participants with a     comprehensive introduction to the fundamentals of Vega processors and their diverse applications. Attendees participated in informative sessions, exploring the complex connections and components of the ARIES development board. This hands-on experience offered valuable insights into the intricacies of hardware architecture.",
    image: "Vega Processors.png" 
  },
  {
    id: 3,
    title: "Vegathon",
    description: "The 24-hour hardware hackathon, Vegathon, organized by IEEE GTBIT and IIPC GTBIT in collaboration with the IT and ECE departments successfully hosted a 24hr Hackathon.  Participants showcased their problem-solving abilities by developing innovative projects utilizing their knowledge of Vega processors. ",
    image: "vegathon.png"
  },
  {
    id: 4,
    title: "Award Ceremony",
    description: "IEEE GTBIT SB successfully hosted its award ceremony, celebrating the remarkable achievements of its executive members. Awards were presented in categories including Best Student Volunteer, Emerging Volunteer, Outstanding Volunteer, and Outstanding WIE Volunteer, recognizing the exceptional contributions of these individuals. The event concluded with the presentation of certificates to the winners of Vegathon, along with participation certificates for both the Vega Workshop and the Vegathon.",
    image: "award.png"
  },
  {
    id: 5,
    title: "InnoShpere Ideathon",
    description: "IEEE GTBIT SB and TSG successfully organized an Ideathon for the executive committee. The event featured teams pitching their ideas to a panel of judges composed of the core team members for round 1 and mentors for round 2. The event fostered an environment for participants to collaborate and showcase their creativity through the ideas they presented.",
    image: "Innoshpere.png"
  },
  {
    id: 6,
    title: "MIST",
    description: "MIST, IEEE DTU’s signature cryptic hunt, engaged participants in a 24-hour chess-inspired journey, testing analytical skills through 20 progressively challenging cryptic puzzles, delivering an immersive and intellectually stimulating experience.", 
    image: "MIST.jpg"
  },
  {
    id: 7,
    title: "Code In Dark",
    description: "Code in the Dark presented a rigorous coding challenge that required participants to commit segments of code to memory and subsequently reproduce them under strict time constraints. The challenge featured three tiers of difficulty, with the most demanding level incorporating randomized programming languages. This format rigorously assessed participants on their speed, precision, and ability to execute code with minimal error through quick analytical thinking.",
    image: "Code In Dark.png"
  },
  {
    id: 8,
    title: "Knight's Duel",
    description: "Knight's Duel convened more than 130 chess enthusiasts in a competitive environment, with the top twelve competitors advancing to an offline tournament phase. This chess competition served as a forum for the demonstration of strategic thinking, intellectual prowess, and exemplary sportsmanship. Participants exhibited considerable mastery of chess theory and application, culminating in well-earned victories within the context of an intensely competitive tournament structure.",
    image: "Knights Duel.png"
  },
  {
    id: 9,
    title: "Designer Deal Area",
    description: "The Designer Deal Arena catalyzed creative expression by challenging 60 teams to design advertisements for IEEE within a strict time frame of 1 hour and 15 minutes. The most proficient 18 teams progressed to an intense pitching round, where originality, creativity, and effective presentation were pivotal for success.",
    image: "Designer Deal Area.png"
  },
  {
    id: 10,
    title: "Tech In Tambola",
    description: "Tech in Tambola introduced an innovative twist to the traditional game by substituting conventional numbers with answers to 15 fundamental technical questions. In this dynamic format, participants navigated through 20 technology-based queries, and three winners were selected in each round, rendering the competition both enjoyable and intellectually demanding.",
    image: "Tech in Tambola.png"
  },
  {
    id: 11,
    title: "IEEE Day",
    description: " In 2024, the IEEE GTBIT Student Branch and IEEE DTU Student Branch collaborated to orchestrate this dynamic celebration, held from October 14th to 16th at both GTBIT and DTU. The event functioned as an intellectual forum where students were encouraged to share ideas, explore cutting-edge concepts, and engage in technical challenges that pushed the frontier of innovation.",
    image: "/IEEE Day.png",
  },
 {
    id: 12,
    title: "Technical Bootcamps 2.0",
    description: "The IEEE GTBIT SB Bootcamp 2.0 from January to February successfully concluded with a significant impact on all participants. Attendees engaged in rigorous hands-on training sessions and received guidance enhancing their skills in cutting-edge fields. The bootcamp provided an invaluable opportunity for both beginners and experienced professionals to dive deeper into technology and design, resulting in impressive projects and expanded professional networks. ",
    image: "Bootcamp.png"
 },

  {
    id: 13,
    title: "Ham Radio Workshop",
    description: "IEEE GTBIT SB, in collaboration with IIPC-GTBIT, hosted an international session on HAM Radio, featuring experts Mr. V.K. Arya and Mr. Jogesh Dewan. The session provided insights into HAM radio's working, applications, and real-world uses like emergency communication and remote connectivity. Highlights included live SSTV demonstrations, real-time long-distance communication, and Morse code usage.",
    image: "Ham Radio.png"
  },
  {
    id: 14,
    title: "DevOps & Cloud Computing",
    description: "A workshop on DevOps and Cloud Computing.",
    image: "Devops and Cloud Computing.jpg",
  },
  {
    id: 15,
    title: "JASHN-E-FRESHERS",
    description: "Day One was packed with energetic and creative games like Groove & Loop, Glass Pong, and Dare to Draw. Freshers engaged in music, rhythm, and sensory challenges, encouraging self-expression and connection while spreading fun and laughter across the campus. Day Two blended learning and excitement with IEEE Orientation, Brain Maze, and quirky games like Secret Swap and Eye Duel. It aimed to build awareness, teamwork, and quick thinking, while keeping the energy high through dynamic physical and mental challenges.",
    image: "jashan1.png",
  },
  {
    id: 16,
    title: "IEEE DSSYWLC 24",
    description: "IEEE DSSYWLC’24, held on February 8-9, 2025, at BVICAM, New Delhi, was a remarkable gathering of students, professionals, and industry leaders under the theme “With Technology, Future is NOW!",
    image: "dsc1.jpg",
  },
];

const Event = () => {
  return (
    <div id="events" className="events-section">
      <div className="events-heading">
        <h2 className="events-title">OUR EVENTS</h2>
        <div className="events-underline"></div>
      </div>

      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card group">
            <div className="event-inner">
              <div className="event-front">
                <img src={event.image} alt={event.title} className="event-image" />
                <div className="event-content">
                  <h3 className="event-title">{event.title}</h3>
                </div>
              </div>
              <div className="event-back">
                <div className="event-content-back">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;




























