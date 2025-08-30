"use client";

import Footer from "../Footer";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen w-full items-center justify-between p-4">
            {/* Page content */}
            <section id="contact" className="contact-section w-1/2 flex-grow">
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

            {/* Footer always at bottom */}
            <Footer />
        </div>
    );
}
