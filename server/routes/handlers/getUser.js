const User = require("../.././database/models/User");

const getUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && !user.status) {
      return res
        .status(400)
        .json({ message: "User Deactivated, please reactivate it again." });
    } else {
      if (user && user.matchPassword(password)) {
        return res.status(200).json(user);
      } else {
        return res.status(401).json({
          message:
            "The email/password you entered is incorrect. Verify your credentials or try using a different method to log in.",
        });
      }
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getUser;
