"use client";

import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<null | { success: boolean; message: string }>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus(null);

        const formData = new FormData(e.target as HTMLFormElement);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();
            setStatus(result);
            if (result.success) {
                setEmail("");
                setMessage("");
            }
        } catch (error) {
            setStatus({ success: false, message: "Something went wrong. Please try again later." });
        }
    };

    return (
        <>
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
        </>
    );
}
