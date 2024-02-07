const User = require("../.././database/models/User");

const putUser = async (req, res) => {
  try {
    const { name, lastname, password, email, img, age, id } = req.body;

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
      user.img = img;
    }

    if (age) {
      user.age = age;
    }

    await user.save();

    return res.status(200).send("User has been updated");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = putUser;
