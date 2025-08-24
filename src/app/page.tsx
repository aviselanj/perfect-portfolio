
export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen gap-24 py-12 px-4 sm:px-8 md:px-16 bg-gradient-to-r from-new-orleans-purple to-new-orleans-gold text-white">
      {/* Hero Section */}
      <section id="hero" className="w-full max-w-4xl text-center flex flex-col items-center gap-4 pt-8">
        <h1 className="gradient-text hero-text text-4xl sm:text-6xl font-serif font-bold animate-float text-mardiGold drop-shadow-lg">Avielle Lewis</h1>
        <h2 className="gradient-text hero-text text-xl sm:text-2xl font-serif animate-float text-mardiPurple mb-2">The Portfolio of a Full Stack Developer</h2>
        <p className="p-gradient-text subheading text-lg max-w-xl mx-auto animate-float">Building beautiful, performant web experiences with a New Orleans vibe.</p>
      </section>

      {/* About Section */}
      <section id="about" className="w-full max-w-3xl bg-mardiPurple/80 rounded-xl shadow-lg p-8 text-mardiGold text-lg font-serif animate-float">
        <h3 className="gradient-text subheading text-2xl font-bold mb-2">About Me</h3>
        <p className="p-gradient-text subheading">
          I’m Avielle, a developer who loves to blend code and creativity. My journey started in the heart of New Orleans, where jazz, art, and technology flow together. I build digital experiences that feel as alive and authentic as the city itself.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-5xl">
        <h3 className="gradient-text subheading text-2xl font-bold text-mardiGold mb-6 font-serif animate-float">Projects</h3>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Example Project Card */}
          <div className="bg-mardiBlue/90 rounded-lg shadow-md p-6 border-l-4 border-mardiGold hover:scale-[1.03] transition-transform duration-300">
            <h4 className="gradient-text text-xl font-bold text-mardiGold font-serif mb-2">Big Easy Events</h4>
            <p className="p-gradient-text text-mardiGold/90 mb-2">A New Orleans event manager app inspired by the big events of New Orleans. Built with React, Tailwind, and Node.js.</p>
            

            <a href="#" className="text-mardiGold  hover:text-mardiPurple">View Project</a>
          </div>
          {/* Add more project cards here */}

          <div className="bg-mardiBlue/90 rounded-lg shadow-md p-6 border-l-4 border-mardiGold hover:scale-[1.03] transition-transform duration-300">
            <h4 className="gradient-text text-xl font-bold text-mardiGold font-serif mb-2">Big Easy Events</h4>
            <p className="p-gradient-text text-mardiGold/90 mb-2">A New Orleans event manager app inspired by the big events of New Orleans. Built with React, Tailwind, and Node.js.</p>


            <a href="#" className="text-mardiGold  hover:text-mardiPurple">View Project</a>
          </div>
          <div className="bg-mardiBlue/90 rounded-lg shadow-md p-6 border-l-4 border-mardiGold hover:scale-[1.03] transition-transform duration-300">
            <h4 className="gradient-text text-xl font-bold text-mardiGold font-serif mb-2">Big Easy Events</h4>
            <p className="p-gradient-text text-mardiGold/90 mb-2">A New Orleans event manager app inspired by the big events of New Orleans. Built with React, Tailwind, and Node.js.</p>


            <a href="#" className="text-mardiGold  hover:text-mardiPurple">View Project</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full max-w-4xl bg-mardiGold/90 rounded-xl shadow-lg p-8 text-mardiBlue font-serif animate-float">
        <h3 className="gradient-text subheading text-2xl font-bold mb-4">Skills</h3>
        <ul className=" gradient-text grid grid-cols-2 sm:grid-cols-3 gap-2 text-lg">
          <li>Frontend: React, Next.js, Tailwind</li>
          <li>Backend: Node.js, Express, Python</li>
          <li>Databases: PostgreSQL, MongoDB</li>
          <li>APIs: REST, GraphQL</li>
          <li>Testing: Jest, Cypress</li>
          <li>DevOps: Vercel, Docker</li>
        </ul>
      </section>

      {/* Contact Section */}
      <h3 className="gradient-text subheading text-2xl font-bold mb-4">Contacts</h3>
      <a
        className="gradient-text hover:scale-105 hover:opacity-90 active:opacity-100 active:scale-100"
        href="mailto:avielle@example.com"
      >
        avielle@example.com
      </a>
      <a
        className="gradient-text font-semibold hover:scale-105 hover:opacity-90 active:opacity-100 active:scale-100"
        href="https://github.com/aviselanj"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        className="gradient-text hover:scale-105 hover:opacity-90 active:opacity-100 active:scale-100"
        href="https://linkedin.com/in/aviellelewis"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>

    </main>
  );
}
