const Course = require("../.././database/models/Course");

const createCourse = async (req, res) => {
  try {
    const { lenguage, level, price, duration, schedule} = req.body;
    const newCourse = new Course({
      lenguage,
      level,
      price,
      duration,
      schedule,
    });
    if (newCourse) {
      await newCourse.save();
      return res.status(200).send(`Course created: ${lenguage}`);
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = createCourse;
