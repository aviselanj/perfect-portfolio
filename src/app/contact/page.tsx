"use client";

export default function ContactPage() {
    return (
        <section id="contact" className="contact-section">
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
