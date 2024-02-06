require(`dotenv`).config();
const mongoose = require(`mongoose`);

const localhost = process.env.BD_HOST;
const dbName = process.env.BD_NAME;

mongoose.connect(`mongodb://${localhost}/${dbName}`)
.then(() => {
    console.log(`Database is connected`)
})
.catch((error) =>{
    console.log(`Error to connect to database`, error);
})