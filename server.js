const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Configurer Nodemailer
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true pour le port 465, false pour les autres ports
    auth: {
        user: 'jeanbarronalokpon@gmail.com',
        pass: 'onbzoppnexokloei'
   }
});

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'jeanbarronalokpon@gmail.com',
        replyTo: email,
        subject: `Nouveau message de ${name}`,
        text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: 'Échec de l\'envoi de l\'email' });
        }
        res.status(200).json({ message: 'Email envoyé avec succès' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
