const User = require("../../database/models/User");

const createUser = async (req, res) => {

    try{

    const {name, lastname, age, email, password, img } = req.body;

    const newUser = new User({name, lastname, age, email, password, img});

    const existUser = await User.findOne({email});

    if(existUser){
        return res.status(400).send("Email is alredy in User")
    }

    await newUser.save();

    return res.status(200).send(`User created: ${name} ${lastname}`)


    }catch(error){

        return res.status(500).send(error.message);
    }
}

module.exports = createUser; 