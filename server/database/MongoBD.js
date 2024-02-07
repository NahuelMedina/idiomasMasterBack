require(`dotenv`).config();
const mongoose = require(`mongoose`);

const { BD_HOST, BD_NAME} = process.env;

mongoose.connect(`mongodb://${BD_HOST}/${BD_NAME}`)
.then(() => {
    console.log(`Database is connected`)
})
.catch((error) =>{
    console.log(`Error to connect to database`, error);
})