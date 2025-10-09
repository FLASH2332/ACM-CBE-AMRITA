import { Linkedin, Github, Mail } from 'lucide-react';

const teamData = [
  {
    name: "Aadithyaa Eeswaran",
    role: "Chairperson",
    image: "/members/2024-25/aadhitya.jpeg",
    social: { linkedin: "https://www.linkedin.com/in/aadithyaa-eeswaran/" }
  },
  {
    name: "Leela Mahalakshmi Marupuru",
    role: "Vice Chairperson",
    image: "/members/2025-26/leela-m.jpg",
    social: { linkedin: "https://www.linkedin.com/in/leela-m-336334301/" }
  },
  {
    name: "Sarath Chandra",
    role: "Secretary",
    image: "/members/2025-26/sarath-chandra.jpg",
    social: { linkedin: "https://www.linkedin.com/in/sarathcx/" }
  },
  {
    name: "Sanyam Bhardwaj",
    role: "Treasurer",
    image: "/members/2024-25/sanyam.jpeg",
    social: { linkedin: "https://www.linkedin.com/in/sanyam-bhardwaj-04b2a4264/" }
  },
  {
    name: "Adithya Menon R",
    role: "Web Master",
    image: "/members/2025-26/adithya-menon.jpg",
    social: { linkedin: "https://www.linkedin.com/in/adithya-menon-r" }
  },
  {
    name: "Midhunan Vijendra Prabhaharan",
    role: "Event Management Head",
    image: "/members/2025-26/midhunan.jpg",
    social: { linkedin: "https://www.linkedin.com/in/midhunan-vijendra-prabhaharan/" }
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="min-h-screen flex items-center bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Our <span className="text-sky-500">Team</span>
        </h2>
        <p className="text-xl text-slate-400 mb-12 text-center">
          Meet the passionate individuals leading our chapter
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, idx) => (
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
            Faculty <span className="text-amber-500">Advisors</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="hhttps://www.linkedin.com/in/bindu-k-r-6373113/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-slate-800/50 rounded-xl border border-slate-700 p-6 hover:border-amber-500 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-1"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-slate-700 overflow-hidden">
                <img
                  src="/members/bindu_k_r.png"
                  alt="Faculty Advisor 1"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128'%3E%3Crect fill='%231e293b' width='128' height='128' rx='64'/%3E%3Ctext fill='%2394a3b8' font-size='40' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E%3F%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <h4 className="text-xl font-bold text-white mb-1">Bindu K. R.</h4>
              <p className="text-amber-400 font-medium">Assistant Professor, School of Computing, Coimbatore</p>
            </a>

            <a 
              href="https://in.linkedin.com/in/aarthi-r-3b76b235" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-slate-800/50 rounded-xl border border-slate-700 p-6 hover:border-amber-500 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-1"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-slate-700 overflow-hidden">
                <img
                  src="/members/aarthi-r_asst-professor_cse_engineering_coimbatore.jpg"
                  alt="Faculty Advisor"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128'%3E%3Crect fill='%231e293b' width='128' height='128' rx='64'/%3E%3Ctext fill='%2394a3b8' font-size='40' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E%3F%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <h4 className="text-xl font-bold text-white mb-1">Dr. Aarthi R</h4>
              <p className="text-amber-400 font-medium">Assistant Professor, School of Computing, Coimbatore</p>
            </a>

            <a 
              href="https://www.linkedin.com/in/dr-arti-anuragi-72a187a3/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-slate-800/50 rounded-xl border border-slate-700 p-6 hover:border-amber-500 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-1"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-slate-700 overflow-hidden">
                <img
                  src="/members/arti.jpeg"
                  alt="Faculty Advisor 3"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128'%3E%3Crect fill='%231e293b' width='128' height='128' rx='64'/%3E%3Ctext fill='%2394a3b8' font-size='40' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E%3F%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <h4 className="text-xl font-bold text-white mb-1">Dr. Anuragi Arti Narayandas</h4>
              <p className="text-amber-400 font-medium">Assistant Professor, School of Computing, Coimbatore</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;