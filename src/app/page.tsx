{/*import Sidenav from "./Sidebar";*/}
import Footer from "./Footer";
export default function Home() {
  return (
    <main className="relative min-h-screen w-[70vw] font-sans mx-auto p-4 flex flex-col gap-8 items-center justify-center">
      
    
      
      {/* Hero Section */}
      <section id="hero" className="hero grid place-items-center min-h-screen w-full max-w-2xl rounded-xl shadow-lg items-center justify-center p-4 m-4 font-serif animate-float border-t-4 border-background">
        <h1 className="name gradient-text hero-text text-4xl sm:text-6xl font-serif font-bold animate-float text-mardiGold drop-shadow-lg">Avielle Lewis</h1>
        <h2 className="gradient-text hero-text text-xl sm:text-2xl font-serif animate-float text-mardiPurple mb-2">The Portfolio of a Full Stack Developer</h2>
        <p className="intro name p-gradient-text subheading text-lg max-w-xl mx-auto font-bold hero-text animate-float">Building beautiful, performant web experiences with a New Orleans vibe.</p>

        {/* About Section */}
        <h3 id="about" className="about grid gradient-text subheading text-2xl font-bold mb-2">About Me</h3>
        <p className="p-gradient-text subheading text-lg max-w-xl mx-auto animate-float">
          I’m Avielle, a developer who loves to blend code and creativity. My journey started in the heart of New Orleans, where jazz, art, and technology flow together. I build digital experiences that feel as alive and authentic as the city itself.
        </p>
      </section>
      

      {/* Projects Section */}
      <section id="projects" className="projects rounded-xl shadow-lg  justify-center  font-serif animate-float">
        <h3 className="project-board-heading w-full shadow-lg bg-highlight z-50 font-bold animate-float">Project Board</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 justify-center"> 
          {/* Project Card 1 */}
          <div className="project-cards w-[40vw] place-self-center">
          <div className="rounded-lg shadow-lg hover:scale-[1.05] transition-transform duration-300">
            <h4 className="gradient-text text-xl font-bold font-serif">New Orleans Events Task Manager</h4>
            <p className="p-gradient-text">Plan, organize, and track your events in true New Orleans style with a sleek black & gold UI and dynamic background effects.
This app is powered by React + Local Storage, making it lightweight and fast while keeping your data safe locally on your device.

</p>
            <a href="https://aviselanj.github.io/task-manager/" className="transition-colors duration-300">View Project</a>
          </div>
        </div>
          {/* Project Card 2 */}
          <div className="project-cards w-[40vw] place-self-center">
          <div className="rounded-lg shadow-lg hover:scale-[1.05] transition-transform duration-300">
            <h4 className="gradient-text text-xl font-bold font-serif">Babies Liquid Gold</h4>
            <p className="p-gradient-text">Babies Liquid Gold is my first collaboration app, created to support lactating mothers with guidance and tools for healthy, consistent breastmilk production.</p>
            <a href="https://babies-liquid-gold.github.io/babies-liquid-gold/" className="transition-colors duration-300">View Project</a>
          </div>
          </div>
          {/* Project Card 3 */}
          
         <div className="project-cards w-[40vw] place-self-center">
          <div className="rounded-lg shadow-lg hover:scale-[1.05] transition-transform duration-300">
            <h4 className="gradient-text text-xl font-bold font-serif">Colorful Events Sumeshi</h4>
            <p className="p-gradient-text">A restaurant event management app. Built with the most popular HTML, CSS, and Javascript libarary in the world, Bootstrap.</p>
            <a href="https://aviselanj.github.io/colorful-events-sumeshi/index.html" className="transition-colors duration-300">View Project</a>
          </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills flex flex-col md:flex-row gap-4 p-4 shadow-lg p-8 font-serif animate-float border-t-4 border-background">
        <h3 className="gradient-text subheading text-2xl font-bold mb-4">Skills</h3>
        <ul className="p-gradient-text flex flex-col md:flex-row gap-4 p-4 gap-2 text-lg">
          <li><strong className="p-gradient-text">Frontend: </strong>React, Next.js, Tailwind</li>
          <li><strong className="p-gradient-text"> Backend:</strong> Node.js, Express, Python</li>
          <li><strong className="p-gradient-text"> Databases:</strong> PostgreSQL, MongoDB</li>
          <li><strong className="p-gradient-text"> APIs:</strong> REST, GraphQL</li>
          <li><strong className="p-gradient-text"> Testing: </strong>Jest, Cypress</li>
          <li><strong className="p-gradient-text"> DevOps:</strong> Vercel, Docker</li>
        </ul>
      </section>
      {/* Check me out */}
      <section id="contact" className="w-[60vw] max-w-4xl rounded-xl shadow-lg p-8  font-serif animate-float border-t-4">
        <h3 className="gradient-text subheading text-2xl font-bold mb-4">Check me out!</h3>
        <div className="flex flex-col gap-2">
          <a className="p-gradient-text p-8 font-semibold hover:scale-105 hover:opacity-90 active:opacity-100 active:scale-100" href="https://github.com/aviselanj" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="p-gradient-text p-8 hover:scale-105 hover:opacity-90 active:opacity-100 active:scale-100" href="https://linkedin.com/in/aviellelewis" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>
      

      {/* Footer */}
     <Footer />
      

    </main>
  );
}
