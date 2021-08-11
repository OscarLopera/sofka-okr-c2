const mongoose = require("mongoose");

const config = require("../config/index");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`;


function callback(err) {
    if (err) {
        console.log(err.message);
    } else {
        console.log('Mongodb connected');
    }
}


const connectDB =async ()=>{
    await mongoose
        .connect(MONGO_URI,{ useNewUrlParser: true,
            useUnifiedTopology: true ,
            useCreateIndex: true },callback)

}

module.exports= {connectDB,callback}