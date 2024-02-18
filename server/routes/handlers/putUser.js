const User = require("../.././database/models/User");
const { cloudinary } = require("../../utils/cloudinary");
const transporter = require("../../nodemailer");
require("dotenv").config();
const fs = require("fs");
const path = require("path");

const putUser = async (req, res) => {
  try {
    const { id, name, lastname, password, email, img, age } = req.body;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).send("User not found");
    }

    if (name) {
      user.name = name;
    }

    if (lastname) {
      user.lastname = lastname;
    }

    if (password) {
      user.password = password;
    }

    if (email) {
      user.email = email;
    }

    if (img) {
      const userImage = img.data;

      const uploadedImage = await cloudinary.uploader.upload(userImage, {
        upload_preset: "ml_default",
        folder: "idiomasMaster" // carpeta que se crea en cloudinary
      });

      user.img = uploadedImage.url;
    }

    if (age) {
      user.age = age;
    }

    await user.save();

    const contenidoHTML = fs.readFileSync(
      path.join(__dirname, "../mail/putUserTemplate.html"),
      "utf-8"
    );

    const response = await transporter.sendMail({
      from: {
        name: "Idiomas Master Admin",
        address: process.env.MAIL_USER,
      },
      to: user.email,
      subject: "Cuenta Actualizada Exitosamente",
      html: contenidoHTML,
    });

    if (!response) {
      return res.status(400).send("Welcome Email cannot been delivered");
    }

    return res.status(200).send("User has been updated");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = putUser;