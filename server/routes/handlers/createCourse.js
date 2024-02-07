const Course = require("../.././database/models/Course");

const createCourse = async (req, res) => {
  try {
    const { language, level, price, duration, start_time, finish_time, location, image, schedule} = req.body;
    const newCourse = new Course({
      language,
      level,
      price,
      duration,
      start_time,
      finish_time,
      location,
      image,
      schedule,
    });
    if (newCourse) {
      await newCourse.save();
      return res.status(200).send(`Course created: ${language}`);
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = createCourse;