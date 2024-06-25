// Database

import mongoose from "mongoose";

let connected = false;

export const DatabaseConnect = async () => {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.log("connected to database ✅");
    return;
  }

  try {
    await mongoose.connect(process.env.DB, {
      dbName: "JoeChat",
    });
    connected = true;
    console.log("connected to database ✅");
  } catch (err) {
    console.log(err);
  }
};