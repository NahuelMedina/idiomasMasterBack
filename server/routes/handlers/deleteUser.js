const User = require('../.././database/models/User');

const deletUser = async (req, res) => {
    try {
        const { id } = req.params; 
        const user = await User.findById(id);


        if (!user) {
            return res.status(404).json({ message: 'User do not exist' });
        }

        user.status = false;

        await user.save();

        return res.status(200).json({ message: 'User has been deleted successfully.' });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = deletUser;
