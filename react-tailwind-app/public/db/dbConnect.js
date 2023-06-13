import mongoose from "mongoose";

//use mongoose to connect app to database
require("dotenv").config();
async function dbConnect() {
  mongoose.connect(process.env.DB_URL, {
    //to ensure connection establish properly
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
}
module.export = dbConnect;
