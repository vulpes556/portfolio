import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { senderName, email, message } = await req.json();


    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });


    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New message from contact form',
      text: `Message from: ${senderName}, ${email}\n\n${message}`,
    };


    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to send email', details: error.message }),
      { status: 500 }
    );
  }
}
