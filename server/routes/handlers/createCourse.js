const Course = require("../.././database/models/Course");
const {cloudinary} = require("../../utils/cloudinary")

const createCourse = async (req, res) => {
  try {
    const { language, level, price, duration, start_time, finish_time, location, image, schedule} = req.body;

    const courseImage = image.data

     const uploadedImage  = await cloudinary.uploader.upload(courseImage, {
      upload_preset: "ml_default"
     })


    const newCourse = new Course({
      language,
      level,
      price,
      duration,
      start_time,
      finish_time,
      location,
      image : uploadedImage.url,
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