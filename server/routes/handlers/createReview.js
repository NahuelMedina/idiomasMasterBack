const Review = require("../.././database/models/Reviews");

const creatReview = async (req, res) => {
  try {
    const { rating, body, user_id, course_id } = req.body;
    const newReview = new Review({ rating, body, student_review: user_id, course_review: course_id });
    if (newReview) {
      await newReview.save();
      return res.status(200).send(`Review created`);
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = creatReview;
