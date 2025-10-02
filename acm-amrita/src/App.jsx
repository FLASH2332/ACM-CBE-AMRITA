import { Menu, X, Code, Users, Calendar, Award, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutUs';

// Events Section
const EventsSection = () => {
  const events = [
    { title: 'Hackathon 2024', date: 'Nov 15-17', icon: Code },
    { title: 'Tech Talk Series', date: 'Every Friday', icon: Users },
    { title: 'Coding Competition', date: 'Dec 5', icon: Award }
  ];

  return (
    <section id="events" className="min-h-screen flex items-center bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Upcoming <span className="text-amber-500">Events</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, idx) => {
            const Icon = event.icon;
            return (
              <div key={idx} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-sky-500 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20">
                <Icon className="w-10 h-10 text-sky-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <div className="flex items-center text-slate-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{event.date}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Team Section
const TeamSection = () => {
  return (
    <section id="team" className="min-h-screen flex items-center bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Our <span className="text-sky-500">Team</span>
        </h2>
        <div className="text-center">
          <p className="text-xl text-slate-400 mb-8">
            Meet the passionate individuals leading our chapter
          </p>
          <div className="bg-slate-800/50 p-12 rounded-xl border border-slate-700">
            <Users className="w-16 h-16 text-purple-500 mx-auto mb-4" />
            <p className="text-slate-300">Team member cards will be added here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Get in <span className="text-amber-500">Touch</span>
        </h2>
        <div className="max-w-2xl mx-auto bg-slate-800/50 p-8 rounded-xl border border-slate-700">
          <div className="flex items-center justify-center mb-6">
            <Mail className="w-12 h-12 text-sky-500" />
          </div>
          <p className="text-center text-slate-300 mb-8">
            Have questions or want to join our chapter? Reach out to us!
          </p>
          <div className="text-center space-y-4">
            <p className="text-slate-400">
              <span className="font-bold text-white">Email:</span> acm@yourcollege.edu
            </p>
            <p className="text-slate-400">
              <span className="font-bold text-white">Follow us:</span> @acm_chapter
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
export default function App() {
  return (
    <div className="bg-slate-950 selection:bg-sky-600 selection:text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <EventsSection />
      <TeamSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            © 2024 ACM Student Chapter. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}