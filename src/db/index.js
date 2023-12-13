/*import mongoose from "mongoose";
import {DB_NAME} from "../constants";


const connectDB = async() => {
    try {
       const connectionInstance = await mongoose.connect
       (`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MonogoDB Connect !! DB HOST: ${connectionInstance.connect.host}`);
    }catch(error) {
        console.log("MONGODB connection error", error);
        process.exit(1)
    }
}



export default connectDB*/




import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`\n MongoDB Connected!`);
    console.log(`DB Host: ${connection.host}`);
  } catch (error) {
    console.error("MONGODB Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;