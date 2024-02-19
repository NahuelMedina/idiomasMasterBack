const User = require("../.././database/models/User");

const getGoogleUser = async (req, res) => {
  try {
    const { email, name, lastname, image } = req.body;

    console.log(email);
    console.log(name);
    console.log(lastname);
    console.log(image);

    // Buscar el usuario por correo electrónico
    let user = await User.findOne({ email });

    console.log(user);

    let imageUrl = "";
    imageUrl = image;

    if (!user) {
      console.log("USUARIO NULL");

      const user = new User({
        name,
        lastname,
        email,
        img: imageUrl,
      });

      const newUser = await user.save();

      if (newUser) {
        return res.status(200).json(newUser);
      }
    }

    if (!user.status) {
      return res
        .status(400)
        .json({ message: "User Deactivated: Please reactivate your account." });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getGoogleUser;
