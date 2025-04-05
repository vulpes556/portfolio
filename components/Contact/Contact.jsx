"use client"
import { useState } from "react";
import "./Contact.css";

export default function Contact() {
    const [formData, setFormData] = useState({ senderName: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Message sent successfully!");
                setFormData({ senderName: "", email: "", message: "" });
            } else {
                setStatus("Failed to send message. Try again.");
            }
        } catch (error) {
            setStatus("Something went wrong. Try again.");
        }
    };

    return (
        <div id="contact" className="contact-form">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    required
                    value={formData.senderName}
                    type="text"
                    name="senderName"
                    placeholder="Your Name" />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Send</button>
            </form>
            {status && <p>{status}</p>}
        </div>
    );
}
