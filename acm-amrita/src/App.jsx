import React, { useState } from 'react';
import { Menu, X, Code, Users, Calendar, Award, Mail } from 'lucide-react';

// Color Palette & Theme
const theme = {
  primary: '#0EA5E9', // Sky blue
  secondary: '#8B5CF6', // Purple
  accent: '#F59E0B', // Amber
  dark: '#0F172A', // Slate 900
  darker: '#020617', // Slate 950
  light: '#F8FAFC', // Slate 50
  gray: '#64748B' // Slate 500
};

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed w-full bg-slate-900/95 backdrop-blur-sm z-50 shadow-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Code className="w-8 h-8 text-sky-500" />
            <span className="text-xl font-bold text-white">ACM Chapter</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-sky-500 transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-slate-300 hover:text-sky-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Welcome to <span className="text-sky-500">ACM Chapter</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto">
          Empowering students through technology, innovation, and collaboration
        </p>
        <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg shadow-sky-500/50">
          Join Us Today
        </button>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          About <span className="text-purple-500">Us</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <Users className="w-12 h-12 text-sky-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-slate-300 leading-relaxed">
              We are dedicated to fostering a community of passionate computer science students. Our chapter provides opportunities for learning, networking, and professional development in the field of computing.
            </p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <Code className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">What We Do</h3>
            <p className="text-slate-300 leading-relaxed">
              From hackathons to workshops, guest lectures to coding competitions, we organize diverse events that help students develop technical skills and connect with industry professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

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
    <div className="bg-slate-950">
      <Navbar />
      <HeroSection />
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