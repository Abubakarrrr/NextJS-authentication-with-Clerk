import mongoose from "mongoose";

let initilized = false;

export const connect = async () => {
  mongoose.set("strictQuery", true);
  if (initilized) {
    console.log("mongo db connected already");
    return;
  }
  try {
    await mongoose.connect(process.env.MONG0DB_URI, {
      dbName: "clerk-auth-app",
    });
    console.log("mongodb connected");
    initilized = true;
  } catch (error) {
    console.log(error);
  }
};
