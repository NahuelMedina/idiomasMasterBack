const User = require("../../database/models/User");

const createUser = async (req, res) => {

    try {
        const { name, lastname, age, email, password, img } = req.body;
        const newUser = new User({ name, lastname, age, email, password, img });
        const existUser = await User.findOne({ email });

        if (existUser) {
            return res.status(400).send("Email is alredy in User")
        }
        await newUser.save();
        return res.status(200).send(`User created: ${name} ${lastname}`)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const creatCourse = async (req, res) => {
    try {
        const { lenguage, level, price, duration, schedule } = req.body;
        const newCourse = new Course({ lenguage, level, price, duration, schedule });
        if (newCourse) {
            await newCourse.save();
            return res.status(200).send(`Curse created: ${lenguage}`)
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const creatReview = async (req, res) => {
    try {
        const { rating, body } = req.body;
        const newReview = new Review({ rating, body });
        if (newReview) {
            await newReview.save();
            return res.status(200).send('Review created')
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const creatPayment = async(req, res)=>{
    try {
        const {Amount, date, student_payment} = req.body;
        const newPayment = new Payment({ Amount, date, student_payment});
        if(newPayment){
            await newPayment.save();
            return res.status(200).send('Payment created')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = {
    createUser,
    creatCourse,
    creatReview,
    creatPayment
};
