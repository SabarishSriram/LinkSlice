import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Connection Established ✅");
  } catch (error) {
    console.log(error);
  }
};

export default connection;
