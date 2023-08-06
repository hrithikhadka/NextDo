import mongoose, { connect } from "mongoose";

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to mongodb...");
  } catch {
    console.log(error);
  }
};

export default connectMongo;
