require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route to handle the contact form submission
app.post('/send-message', async (req, res) => {
  const { name, email, message } = req.body;

  // Configure the email transporter
  const transporter = nodemailer.createTransport({
    host: process.env.smtp.gmail.com,
    port: process.env.587,
    secure: false,
    auth: {
      user: process.env.nayaksukanti999@gmail.com,
      pass: process.env.idfk gxed calf hmlj,
    },
  });

  // Email options
  const mailOptions = {
    from: `${name} <${email}>`,
    to: process.env.receiver@example.com,
    subject: `Message from ${name}`,
    text: message,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
