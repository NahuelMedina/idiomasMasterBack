const Course = require("../.././database/models/Course");

const getCourseFilters = async (req, res) => {
  try {
    const { language, level } = req.query;

    if (language && level) {
      const course = await Course.find({ language });

      if (course.length > 0 && level) {
        const allCourses = course.filter((element) => element.level === level);

        return res.status(200).json(allCourses);
      } else if (course.length > 0) {
        return res.status(200).json(course);
      } else {
        return res.status(400).send("We dont have courses with your matches");
      }
    } else if (language && !level) {
      const course = await Course.find({ language });

      if (course.length > 0) {
        return res.status(200).json(course);
      } else {
        return res.status(400).send("We dont have courses with your matches");
      }
    } else if (level && !language) {
      const course = await Course.find({ level });

      if (course.length > 0) {
        return res.status(200).json(course);
      } else {
        return res.status(400).send("We dont have courses with your matches");
      }
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getCourseFilters;
