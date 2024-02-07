const Payment = require("../.././database/models/Payment");

const createPayment = async (req, res) => {
  try {
    const { Amount, date, status, user_id, course_id } = req.body;
    const newPayment = new Payment({ Amount, date, status, student_payment: user_id, course_payment: course_id });
    if (newPayment) {
      await newPayment.save();
      return res.status(200).send("Payment created");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = createPayment;
