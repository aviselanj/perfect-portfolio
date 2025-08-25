import { NextResponse } from "next/server";
import { Resend } from "resend";


// Initialize the Resend client with your API key stored in .env
const resend = new Resend('re_ehp6BErW_En885CGQKaYgfkAovRwTeNG1');

export async function POST(req: Request) {
    try {
        // Parse the incoming form data
        const formData = await req.formData();
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        // Validate that all fields are present
        if (!name || !email || !message) {
            return NextResponse.json({ success: false, message: "All fields are required." }, { status: 400 });
        }

        // Send email using Resend
        const result = await resend.emails.send({
            from: "avielleslewis@yahoo.com", // Your email
            to: "avielleslewis@yahoo.com", // Recipient email
            subject: `New message from ${name}`, // Email subject
            html: `<h1>You have a new message from ${name}</h1>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`, // Email body in HTML format
        });

        // Log email result (for debugging purposes)
        console.log("📩 Email sent:", result);

        // Send success response
        return NextResponse.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        // Handle any errors
        console.error("Error sending email:", error);
        return NextResponse.json({ success: false, message: "Something went wrong." }, { status: 500 });
    }
}
