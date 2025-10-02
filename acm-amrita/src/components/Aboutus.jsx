

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm text-slate-400 uppercase tracking-wider mb-4">
              WELCOME TO AMRITA'S
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">ACM </span>
              <span className="text-sky-500">Student Chapter</span>
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              ACM is a volunteer-led and member-driven organization. Everything ACM 
              accomplishes is through the efforts of people like you. A wide range of 
              activities keeps ACM moving: organizing conferences, editing journals, 
              reviewing papers and participating on boards and committees, to name a 
              few. Find out all the ways that you can volunteer with ACM.
            </p>
            
            {/* Social Links */}
            <div>
              <p className="text-sm text-slate-400 uppercase tracking-wider mb-4">
                REACH OUT TO US AT
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors border border-slate-700 hover:border-sky-500">
                  <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors border border-slate-700 hover:border-sky-500">
                  <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors border border-slate-700 hover:border-sky-500">
                  <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors border border-slate-700 hover:border-sky-500">
                  <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative ">
              {/* Building illustration placeholder */}
              <div className="w-full h-[450px] bg-slate-900 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/src/assets/images/amrita2.jpg" 
                  alt="Amrita campus building with students"
                  className="w-full h-full object-fill rounded-lg"
                />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;