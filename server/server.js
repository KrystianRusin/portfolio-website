const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  return res.send("Healthy");
});

app.post("/send", async (req, res) => {
  let { name, email, message } = req.body;
  console.log(process.env.EMAIL_NAME);
  console.log(process.env.EMAIL_PASS);

  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: process.env.EMAIL_NAME,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: email,
    to: process.env.EMAIL_RECEIVER,
    subject: `Message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
      console.log(err);
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
