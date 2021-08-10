const mongoose = require("mongoose");

const config = require("../config/index");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`;

  const connectDB =async ()=>{
    try{
        await mongoose
        .connect(MONGO_URI,{ useNewUrlParser: true,
                    useUnifiedTopology: true ,
                    useCreateIndex: true })
        console.log("Mongodb connected")
    }
    catch(err){
        console.error(err.message)
        process.exit(1)
    }

}

module.exports= connectDB