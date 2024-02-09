const User = require("../../database/models/User");
const { cloudinary } = require("../../utils/cloudinary");

const createUser = async (req, res) => {
  try {
    const { name, lastname, age, email, password, img } = req.body;

    let imageUrl;

    if (img) {
      const userImage = img.data;

      const uploadedImage = await cloudinary.uploader.upload(userImage, {
        upload_preset: "ml_default",
      });

      imageUrl = uploadedImage.url;
    }

    const newUser = new User({
      name,
      lastname,
      age,
      email,
      password,
      img: imageUrl,
    });

    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(400).send("Email is alredy in User");
    }

    await newUser.save();

    return res.status(200).send(`User created: ${name} ${lastname}`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = createUser;
