
export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen gap-24 py-12 px-4 sm:px-8 md:px-16 bg-gradient-to-r from-new-orleans-purple to-new-orleans-gold text-white">
      {/* Navbar */}
      <nav className="fixed w-full shadow-lg bg-highlight z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#hero" className="italic text-3xl font-serif font-bold no-underline hover:underline">
              AviTheCreator
            </a>
            <ul className="flex space-x-6">
              <li><a href="#hero" className="no-underline hover:underline">Home</a></li>
              <li><a href="#about" className="no-underline hover:underline">About</a></li>
              <li><a href="#projects" className="no-underline hover:underline">Projects</a></li>
              <li><a href="#skills" className="no-underline hover:underline">Skills</a></li>
              <li><a href="#contact" className="no-underline hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section id="hero" className="grid place-items-center min-h-screen w-full max-w-2xl rounded-xl shadow-lg items-center justify-center p-4 m-4 font-serif animate-float border-t-4 border-background">
        <h1 className="gradient-text hero-text text-4xl sm:text-6xl font-serif font-bold animate-float text-mardiGold drop-shadow-lg">Avielle Lewis</h1>
        <h2 className="gradient-text hero-text text-xl sm:text-2xl font-serif animate-float text-mardiPurple mb-2">The Portfolio of a Full Stack Developer</h2>
        <p className="p-gradient-text subheading text-lg max-w-xl mx-auto animate-float">Building beautiful, performant web experiences with a New Orleans vibe.</p>
        <h3 id="about" className="gradient-text subheading text-2xl font-bold mb-2">About Me</h3>
        <p className="p-gradient-text subheading text-lg max-w-xl mx-auto animate-float">
          I’m Avielle, a developer who loves to blend code and creativity. My journey started in the heart of New Orleans, where jazz, art, and technology flow together. I build digital experiences that feel as alive and authentic as the city itself.
        </p>
      </section>
      
        
      
      {/* About Section */}
      

      {/* Projects Section */}
      <section id="projects" className="grid place-items-center min-h-screen w-full max-w-2xl rounded-xl shadow-lg items-center justify-center p-4 m-4 font-serif animate-float border-t-4 border-background">
        <h3 className="gradient-text hero-text text-2xl font-bold mb-6 font-serif animate-float">Project Board</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
          {/* Project Card 1 */}
          <div className="rounded-lg shadow-lg hover:scale-[1.05] transition-transform duration-300 w-1/2 sm:w-80 p-8">
            <h4 className="gradient-text text-xl font-bold font-serif mb-2 p-8">Big Easy Events</h4>
            <p className="p-gradient-text">An event management app inspired by the big events of New Orleans. Built with React, Tailwind, and Node.js.</p>
            <a href="#" className="transition-colors duration-300">View Project</a>
          </div>

          {/* Project Card 2 */}
          <div className="rounded-lg shadow-lg p-6 hover:scale-[1.05] transition-transform duration-300 w-1/2 sm:w-80">
            <h4 className="gradient-text text-xl font-bold font-serif mb-2">Jazz Hub</h4>
            <p className="p-gradient-text mb-2">A social platform for sharing jazz music and events. Built with React, Node.js, and PostgreSQL.</p>
            <a href="#" className="transition-colors duration-300">View Project</a>
          </div>

          {/* Project Card 3 */}
          <div className="rounded-lg shadow-lg p-6 hover:scale-[1.05] transition-transform duration-300 w-1/2 sm:w-80">
            <h4 className="gradient-text text-xl font-bold font-serif mb-2">Its Me</h4>
            <p className="p-gradient-text p-8 mb-2">A chat app built to learn and try to mimic your personality. Built using React, Node.js, and MongoDB.</p>
            <a href="#" className="transition-colors duration-300">View Project</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full max-w-4xl rounded-xl shadow-lg p-8 font-serif animate-float border-t-4 border-background">
        <h3 className="gradient-text subheading text-2xl font-bold mb-4">Skills</h3>
        <ul className="p-gradient-text grid grid-cols-2 sm:grid-cols-3 gap-2 text-lg">
          <li>Frontend: React, Next.js, Tailwind</li>
          <li>Backend: Node.js, Express, Python</li>
          <li>Databases: PostgreSQL, MongoDB</li>
          <li>APIs: REST, GraphQL</li>
          <li>Testing: Jest, Cypress</li>
          <li>DevOps: Vercel, Docker</li>
        </ul>
      </section>
      {/* Contacts Section */}
      <section id="contact" className="w-full max-w-4xl rounded-xl shadow-lg p-8  font-serif animate-float border-t-4">
        <h3 className="gradient-text subheading text-2xl font-bold mb-4">Contact</h3>
        <div className="flex flex-col gap-2">
          <a className="gradient-text p-8  hover:scale-105 hover:opacity-90 active:opacity-100 active:scale-100" href="mailto:avielleslewis@yahoo.com">avielleslewis@yahoo.com</a>
          <a className="gradient-text p-8 font-semibold hover:scale-105 hover:opacity-90 active:opacity-100 active:scale-100" href="https://github.com/aviselanj" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="gradient-text p-8 hover:scale-105 hover:opacity-90 active:opacity-100 active:scale-100" href="https://linkedin.com/in/aviellelewis" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>
      {/* Footer */}
      <footer className="text-center py-6 border-t shadow-[0_-4px_15px_rgba(255,165,0,0.3)]">
        <p>
          © {new Date().getFullYear()} Avielle Lewis. All rights reserved. 
          Open-sourced under the{" "}
          <a
            href="https://github.com/aviselanj/perfect-portfolio/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-creativePink hover:text-creativeMint underline"
          >
            MIT License
          </a>
          .
        </p>
      </footer>
      

    </main>
  );
}
