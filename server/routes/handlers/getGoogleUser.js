const User = require("../.././database/models/User");

const getGoogleUser = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Error: User not found. Please check your credentials or try a different login method.",
      });
    }

    if (!user.status) {
      return res.status(400).json({
        message: "User Deactivated: Please reactivate your account.",
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getGoogleUser;
