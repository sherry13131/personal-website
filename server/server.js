require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');

// const API_PORT = 3001;
const SERVER = process.env.SERVER;
const API_PORT = process.env.PORT || 80;
const app = express();
const router = express.Router();
const useremail = process.env.USERNAME + "@" + process.env.EMAILHOST;
const pass = process.env.PASS;

var transport = {
    host: 'smtp.gmail.com',
    auth: {
      user: useremail,
      pass: pass
    },
    secure: true,
    port: 465
}

var transporter = nodemailer.createTransport(transport);

transporter.verify((err, success) => {
    console.log("here");
    if (err) {
        console.log(err);
    } else {
        console.log('All works!');
    }
});

router.post('/submit', function(req, res) {
    console.log(req.body);
    const { name, email, message } = req.body;

    let msg = message;
    var mail = {
        from: name,
        to: 'sherry.hyma@gmail.com',
        subject: 'A message from ' + name + '! (' + email + ')',
        text: msg
    }
    console.log("created mail");
    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({ msg: 'fail sending email' });
        } else {
            res.json({ msg: 'success' });
        }
    });
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    credentials: false,
    origin: SERVER
}));
app.use("/api", router);
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));