const Course = require("../.././database/models/Course");

const putCourse = async (req, res) => {
    try {
    const {
      id,
      language,
      level,
      price,
      duration,
      schedule,
      location,
      image,
      status
    } = req.body;

    const course = await Course.findById(id);

    if (!course) {
      return res.status(404).send("Course not found");
    }

    if (language) {
      course.language = language;
    }

    if (level) {
      course.level = level;
    }

    if (price) {
      course.price = price;
    }

    if (duration) {
      course.duration = duration;
    }

    if (schedule) {
      course.schedule = schedule;
    }

    if (location) {
      course.location = location;
    }

    if (image) {
      course.image = image;
    }

    if (status !== undefined) {
      course.status = status;
    }

    await course.save();

    return res.status(200).send("Course has been updated");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = putCourse;