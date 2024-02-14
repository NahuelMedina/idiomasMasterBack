const User = require('../.././database/models/User');
const transporter = require("../../nodemailer")
require("dotenv").config();
const fs = require("fs");
const path = require("path");

const deletUser = async (req, res) => {
    try {
        const { id } = req.params; 
        const user = await User.findById(id);


        if (!user) {
            return res.status(404).json({ message: 'User do not exist' });
        }

        user.status = false;

        await user.save();

        const contenidoHTML = fs.readFileSync(
            path.join(__dirname, "../mail/noUserTemplate.html"),
            "utf-8"
          );
      
          const response = await transporter.sendMail({
            from: {
              name: "Idiomas Master Admin",
              address: process.env.MAIL_USER,
            },
            to: user.email, 
            subject: "Cuenta desactivada Exitosamente", 
            html: contenidoHTML, 
          });

          if (!response) {
            return res.status(400).send("Welcome Email cannot been delivered");
          }

        return res.status(200).json({ message: 'User has been deleted successfully.' });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = deletUser;
