const { Schema, model } = require(`moongose`);

const PaymentSchema = new Schema({

    Amount:{
        type: Number,
        require: true,
        unique:false,
    },

    date: {
        type: Date,
        require: true,
        unique: false,
    },

    status:{
        type: String,
        require: true,
        unique:false,
        emun:["Pending, Approved, Cancelled, Rejected"]
    },
    student_payment:{
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },

})

module.exports = model("Payment", PaymentSchema);