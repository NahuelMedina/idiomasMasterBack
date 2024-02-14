const { Schema, model } = require(`mongoose`);

const ReviewSchema = new Schema({
  rating: {
    type: Number,
    require: true,
    unique: false,
    min: 1,
    max: 5,
  },

  body: {
    type: String,
    require: true,
    unique: false,
    minlength: 15,
    maxlength: 300,
  },
  reply: {
    type: String,
    require: false,
    unique: false,
    minlength: 15,
    maxlength: 300,
  },

  view: {
    type: Boolean,
    unique: false,
    require: true,
    default: false,
    enum: [true, false],
  },

  student_review: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },

  course_review: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    require: true,
  },
});

module.exports = model("Review", ReviewSchema);
