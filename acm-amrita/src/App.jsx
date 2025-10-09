import { Menu, X, Code, Users, Calendar, Award, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from "./components/Aboutus";
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';

const EventsSection = () => {
  const events = [
    { title: 'Tech Talk Series', date: 'TBD', icon: Users },
    { title: 'Winter of Code 2025', date: 'TBD', icon: Award },
  ];

  return (
    <section id="events" className="min-h-screen flex items-center bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Upcoming <span className="text-amber-500">Events</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {events.map((event, idx) => {
            const Icon = event.icon;
            return (
              <div key={idx} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-sky-500 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20 w-full md:w-80">
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
            © 2025 ACM Student Chapter. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}