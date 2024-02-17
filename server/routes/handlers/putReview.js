const Reviews = require("../.././database/models/Reviews");

const putReview = async (req, res) => {
  try {
    const { rating, body, reviewId, reply, view } = req.body;

    const review = await Reviews.findById(reviewId);

    if (rating) {
      review.rating = rating;
    }

    if (body) {
      review.body = body;
    }

    console.log(reply)

    if (reply) {
      review.reply = reply;
    }

    if (view !== undefined && review.view !== view) {
      review.view = view;
    }

    

    await review.save();

    return res.status(200).send("Review has been updated");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = putReview;