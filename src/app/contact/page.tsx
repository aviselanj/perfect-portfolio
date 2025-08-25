"use client";

export default function ContactPage() {
    return (
        
        <section id="contact" className="contact-section">
            {/* Navbar */}
            <nav className="fixed w-full shadow-lg bg-highlight z-50">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <a href="#hero" className="italic text-3xl font-serif font-bold no-underline hover:underline">
                            AviTheCreator
                        </a>
                        <ul className="flex space-x-6">
                            <li><a href="./#hero" className="no-underline hover:underline">Home</a></li>
                            <li><a href="./#about" className="no-underline hover:underline">About</a></li>
                            <li><a href="./#projects" className="no-underline hover:underline">Projects</a></li>
                            <li><a href="./#skills" className="no-underline hover:underline">Skills</a></li>
                            <li><a href="/contact" className="no-underline hover:underline">Contact Me</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <form className="contact-form">
                <h2>Contact Me</h2>

                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4}></textarea>

                <button type="submit">Send Message</button>
            </form>
        </section>

    );
}
