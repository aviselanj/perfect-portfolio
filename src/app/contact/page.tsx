"use client";

import { useState } from "react";
import Footer from "../Footer";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  async function sendMessage(formData: { name: string; email: string; message: string }) {
    console.log("📤 Sending form data to API:", formData); // log before sending
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const json = await res.json();
    console.log("📥 Response from API:", json); // log API response
    return json;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Sending...");

    const response = await sendMessage(form);

    if (response.success) {
      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("❌ Failed to send message. Check logs.");
    }
  }

  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-between p-4">
      <section id="contact" className="contact-section w-1/2 flex-grow">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Me</h2>

          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          ></textarea>

          <button type="submit">Send</button>
        </form>

        {status && <p className="mt-4">{status}</p>}
      </section>

      <Footer />
    </div>
  );
}
