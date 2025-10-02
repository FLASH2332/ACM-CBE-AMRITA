import { useState } from 'react';
import { Users, Linkedin, Github, Mail } from 'lucide-react';

const teamData = {
  "2024-25": [
    {
      name: "Aadhitya",
      role: "President",
      image: "/src/assets/images/members/2024-25/aadhitya.jpeg",
      social: { linkedin: "#", github: "#", email: "mailto:aadhitya@acm.com" }
    },
    {
      name: "Abhinav R",
      role: "Vice President",
      image: "/src/assets/images/members/2024-25/abhinav_r.jpeg",
      social: { linkedin: "#", github: "#", email: "mailto:abhinav@acm.com" }
    },
    {
      name: "Abineha",
      role: "Secretary",
      image: "/src/assets/images/members/2024-25/abineha.png",
      social: { linkedin: "#", github: "#", email: "mailto:abineha@acm.com" }
    },
    {
      name: "Ashwin Narayanan S",
      role: "Technical Lead",
      image: "/src/assets/images/members/2024-25/ashwin_narayanan_s.jpg",
      social: { linkedin: "#", github: "#", email: "mailto:ashwin@acm.com" }
    },
    {
      name: "Bindu K R",
      role: "Events Coordinator",
      image: "/src/assets/images/members/2024-25/bindu_k_r.png",
      social: { linkedin: "#", github: "#", email: "mailto:bindu@acm.com" }
    },
    {
      name: "Sanyam",
      role: "Treasurer",
      image: "/src/assets/images/members/2024-25/sanyam.jpeg",
      social: { linkedin: "#", github: "#", email: "mailto:sanyam@acm.com" }
    }
  ],
  "2023-24": [
    {
      name: "Akash S",
      role: "President",
      image: "/src/assets/images/members/2023-24/akash_s.jpg",
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Ananya Duvvuri",
      role: "Vice President",
      image: "/src/assets/images/members/2023-24/ananya_duvvuri.jpg",
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Aparna A",
      role: "Secretary",
      image: "/src/assets/images/members/2023-24/aparna_a.jpg",
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Kishore S",
      role: "Technical Lead",
      image: "/src/assets/images/members/2023-24/kishore_s.jpg",
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Pradeep Karthik",
      role: "Events Lead",
      image: "/src/assets/images/members/2023-24/pradeep_karthik.jpg",
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Praveen Kumar",
      role: "Outreach Lead",
      image: "/src/assets/images/members/2023-24/praveen_kumar.jpg",
      social: { linkedin: "#", github: "#" }
    }
  ]
};

const TeamSection = () => {
  const [selectedYear, setSelectedYear] = useState("2024-25");
  const years = Object.keys(teamData);

  return (
    <section id="team" className="min-h-screen flex items-center bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Our <span className="text-sky-500">Team</span>
        </h2>
        <p className="text-xl text-slate-400 mb-12 text-center">
          Meet the passionate individuals leading our chapter
        </p>

        <div className="flex justify-center gap-4 mb-12">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`
                px-6 py-2 rounded-lg font-semibold transition-all duration-300
                ${selectedYear === year
                  ? "bg-sky-600 text-white shadow-lg shadow-sky-500/30"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700"
                }
              `}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData[selectedYear].map((member, idx) => (
            <div
              key={idx}
              className="group bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-sky-500 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20 hover:-translate-y-2"
            >
              <div className="relative h-64 bg-slate-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-120 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%231e293b' width='200' height='200'/%3E%3Ctext fill='%2394a3b8' font-size='60' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E%3F%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-sky-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-purple-400 font-medium mb-4">{member.role}</p>

                {member.social && (
                  <div className="flex gap-3">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="w-9 h-9 bg-slate-700 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors border border-slate-600 hover:border-sky-500"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4 text-slate-300" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="w-9 h-9 bg-slate-700 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors border border-slate-600 hover:border-purple-500"
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4 text-slate-300" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={member.social.email}
                        className="w-9 h-9 bg-slate-700 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors border border-slate-600 hover:border-amber-500"
                        aria-label="Email"
                      >
                        <Mail className="w-4 h-4 text-slate-300" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Faculty <span className="text-amber-500">Advisor</span>
          </h3>
          <div className="max-w-md mx-auto bg-slate-800/50 rounded-xl border border-slate-700 p-6 hover:border-amber-500 transition-all duration-300">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-slate-700 overflow-hidden">
              <img
                src="/src/assets/images/aarthi-r_asst-professor_cse_engineering_coimbatore.jpg"
                alt="Faculty Advisor"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128'%3E%3Crect fill='%231e293b' width='128' height='128' rx='64'/%3E%3Ctext fill='%2394a3b8' font-size='40' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E%3F%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            <h4 className="text-xl font-bold text-white mb-1">Dr. Aarthi R</h4>
            <p className="text-amber-400 font-medium">Assistant Professor, CSE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;