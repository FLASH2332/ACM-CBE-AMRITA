import { useState, useEffect } from "react";

export default function Hero() {
  const phrases = [
    "Technical excellence",
    "Ethical computing",
    "Technology for positive impact",
    "Diversity, Equity, and Inclusion",
    "Education and technical advancement"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[index % phrases.length];

    let typingSpeed = isDeleting ? 20 : 20;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentPhrase.substring(0, text.length - 1));
      } else {
        setText(currentPhrase.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex(index + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="text-sm md:text-base font-semibold text-slate-400 uppercase tracking-[0.2em] mb-6">
          Welcome to Amrita's
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
          ACM <span className="text-sky-500">Student Chapter</span>
        </h1>

        {/* Moving Cursor */}
        <h2 className="text-xl md:text-2xl font-medium text-slate-300 h-12">
          {text}
          <span className="border-r-2 border-purple-500 ml-1 animate-pulse"></span>
        </h2>

        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="#about"
            className="px-6 py-3 bg-sky-600 hover:bg-sky-700 rounded-lg shadow-lg font-semibold text-white transition duration-300"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg shadow-md font-semibold text-slate-200 transition duration-300"
          >
            Join Us
          </a>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-sky-900/20 via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
}
