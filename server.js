require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Serve static files from the views directory
app.use(express.static('views'));

// Serve the index.html file on the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Serve the email.html file on the /email route
app.get('/email', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'email.html'));
});

// POST route to handle email sending
app.post('/send-email', async (req, res) => {
  const { to, subject, message } = req.body;

  // Create a transporter using your .env configuration
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Send mail
    await transporter.sendMail({
      from: `"Moneytize Platform" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text: message,
    });

    console.log(`Email sent to ${to}`);
    return res.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, error: 'Error sending email.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
