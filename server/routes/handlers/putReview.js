const Reviews = require("../.././database/MongoBD");

const putReview = async (req, res) => {
  try {
    const { rating, body, reviewId } = req.body;

    const review = await Reviews.findById(reviewId);

    if (rating) {
      review.rating = rating;
    }

    if (body) {
      review.body = body;
    }

    await review.save();

    return res.status(200).send("Review has been updated");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = putReview;
