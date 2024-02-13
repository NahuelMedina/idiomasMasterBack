const Review = require("../.././database/models/Reviews");
const transporter = require("../../nodemailer");
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const User = require("../.././database/models/User")

const creatReview = async (req, res) => {
  try {
    const { rating, body, user_id, course_id } = req.body;
    const newReview = new Review({
      rating,
      body,
      student_review: user_id,
      course_review: course_id,
    });
    if (newReview) {
      await newReview.save();

      const user = await User.findById(user_id);

      const contenidoHTML = fs.readFileSync(
        path.join(__dirname, "../mail/postReview.html"),
        "utf-8"
      );
  
      const response = await transporter.sendMail({
        from: {
          name: "Idiomas Master Admin",
          address: process.env.MAIL_USER,
        },
        to: user.email, 
        subject: "Gracias por tus Comentarios", 
        html: contenidoHTML, 
      });
  
      if (!response) {
        return res.status(400).send("Welcome Email cannot been delivered");
      }

      return res.status(200).send(`Review created`);
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = creatReview;
