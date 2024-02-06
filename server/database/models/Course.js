const { Schema, model } = require(`moongose`);

const CourseSchema = new Schema({
  lenguage: {
    type: String,
    require: true,
    unique: false,
    enum: ["English, French, German, Italian, Dutch, Portuguese"],
  },

  level: {
    type: String,
    require: true,
    unique: false,
    enum: ["Beginer, Intermediate, Advanced"],
  },

  price: {
    type: Number,
    require: true,
    unique: false,
    min: 25,
    max: 300,
  },

  duration: {
    type: String,
    requiere: true,
    unique: false,
    enum: ["1 Month , 2 Months, 3 Months, 4 Months"],
  },

  schedule: {
    type: String,
    require: true,
    unique: false,
    enum: [
      "On Weekends, During the week, Monday-Wednesday-Friday, Tuesday-Thursday",
    ],
  },

  start_time: {
    type: String,
    require: true,
    unique: false,
  },

  finish_time: {
    type: String,
    require: true,
    unique: false,
  },

  location: {
    type: String,
    require: true,
    unique: false,
  },

  image: {
    type: String,
    require: true,
    unique: false,
  },
  student_course: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },

  review_course:{
    type: Schema.Types.ObjectId,
    ref: "Review",
    require: true,
  }
});

module.exports = model("Course", CourseSchema);
