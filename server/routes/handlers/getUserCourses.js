const Course = require("../.././database/models/Course");

const getUserCourses = async (req, res) => {
  try {
    const { id } = req.params;

    const course = await Course.find({ student_course: id });

    return res.status(200).json(course);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getUserCourses;
