import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Get in <span className="text-amber-500">Touch</span>
        </h2>
        <p className="text-slate-400 text-center mb-12 text-lg">
          Have questions or want to join our chapter? We'd love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-sky-500 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20">
              <div className="flex items-start space-x-4">
                <div className="bg-sky-500/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-sky-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Email Us</h3>
                  <p className="text-slate-400 text-sm mb-2">Drop us a line anytime</p>
                  <a href="mailto:acm@xyz.edu" className="text-sky-500 hover:text-sky-400 transition-colors">
                    acmsc@cb.amrita.edu
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Call Us</h3>
                  <p className="text-slate-400 text-sm mb-2">Mon-Fri from 9am to 5pm</p>
                  <a href="tel:+91 1234567890" className="text-purple-500 hover:text-purple-400 transition-colors">
                    +91 1234567890
                  </a>
                </div>
              </div>
            </div> */}

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-amber-500 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-500/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Visit Us</h3>
                  <p className="text-slate-400 text-sm">
                    Amrita Vishwa Vidya Peetham<br />
                   Coimbatore Campus
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-white font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* <a href="#" className="bg-slate-700/50 p-3 rounded-lg hover:bg-sky-500/20 hover:border-sky-500 border border-transparent transition-all duration-300 group">
                  <Twitter className="w-5 h-5 text-slate-400 group-hover:text-sky-500 transition-colors" />
                </a> */}
                <a href="https://www.instagram.com/acmamritacbe/" className="bg-slate-700/50 p-3 rounded-lg hover:bg-purple-500/20 hover:border-purple-500 border border-transparent transition-all duration-300 group">
                  <Instagram className="w-5 h-5 text-slate-400 group-hover:text-purple-500 transition-colors" />
                </a>
                <a href="https://github.com/acm-avv" className="bg-slate-700/50 p-3 rounded-lg hover:bg-slate-500/20 hover:border-slate-500 border border-transparent transition-all duration-300 group">
                  <Github className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/acm-amrita-vishwa-vidyapeetham/" className="bg-slate-700/50 p-3 rounded-lg hover:bg-sky-500/20 hover:border-sky-500 border border-transparent transition-all duration-300 group">
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-sky-500 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us more about your inquiry..."
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-sky-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg hover:from-sky-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-sky-500/20"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
