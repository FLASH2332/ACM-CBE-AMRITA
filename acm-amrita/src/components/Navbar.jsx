import { useState, useEffect } from "react";
import { Menu, X, Code } from "lucide-react";

import Logo from "../assets/images/logoacm.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Events", href: "events" },
    { name: "Team", href: "team" },
    { name: "Contact", href: "contact" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = { root: null, threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-slate-900/95 backdrop-blur-sm z-50 shadow-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <Code className="w-8 h-8 text-sky-500" /> */}
            <img src={Logo} alt="ACM Logo" className="w-40 object-contain" />
            {/* <span className="text-xl font-bold text-white">ACM Chapter</span> */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 group">
						{navLinks.map((link) => {
							const isActive = activeSection === link.href;
							return (
								<button
									key={link.name}
									onClick={() => handleScroll(link.href)}
									className={`
										transition-colors duration-200 font-medium
										${isActive
											? "text-sky-500"
											: "text-slate-300 group-hover:text-slate-500 hover:!text-purple-500"
										}
									`}
								>
									{link.name}
								</button>
							);
						})}
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
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.name}
                  onClick={() => handleScroll(link.href)}
                  className={`
                    block py-2 w-full text-left transition-colors duration-200
                    ${
                      isActive
                        ? "text-sky-500"
                        : "text-slate-300 hover:text-purple-500"
                    }
                  `}
                >
                  {link.name}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
