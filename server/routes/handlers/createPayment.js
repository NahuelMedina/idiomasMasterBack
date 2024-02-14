const Payment = require("../.././database/models/Payment");
const User = require("../.././database/models/User")
const transporter = require("../../nodemailer");
require("dotenv").config();
const fs = require("fs");
const path = require("path");

const createPayment = async (req, res) => {
  try {
    const { Amount, date, status, user_id, course_id } = req.body;
    const newPayment = new Payment({
      Amount,
      date,
      status,
      student_payment: user_id,
      course_payment: course_id,
    });
    if (newPayment) {
      const response = await newPayment.save();


      const idString = response._id.toString();

      const user = await User.findById(user_id);

      const contenidoHTML = fs.readFileSync(
        path.join(__dirname, "../mail/purchaseTemplate.html"),
        "utf-8"
      );

      const responseMail = await transporter.sendMail({
        from: {
          name: "Idiomas Master Admin",
          address: process.env.MAIL_USER,
        },
        to: user.email,
        subject: `Compra exitosa, Pago: ${idString}`,
        html: contenidoHTML,
      });

      if (!responseMail) {
        return res.status(400).send("Welcome Email cannot been delivered");
      }
      return res.status(200).send("Payment created");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = createPayment;
