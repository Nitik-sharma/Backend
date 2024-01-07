import mongoose from "mongoose";

import { DB_NAME } from "../contant.js";

const connectDB = async () => {
  try {
    const connectionIntance = await mongoose.connect(
      `${process.env.MONGOBD_URI}/${DB_NAME}`
    );

    console.log(
      `\n MongoDB connect !! DBHOST:${connectionIntance.connection.host}`
    );
  } catch (error) {
    console.log("Error to connect Db", error);
  }
};

export default connectDB;
