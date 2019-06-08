const mongoose = require("mongoose");
const config = require("config");
const db = config.get("MongoURI");

const connectDB = async () => {
  try {
    mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log("MongoDB connected...");
  } catch {
    console.error(err.message);
    process.exit(1);
  }

  // DIFFERENT WAY TO DO IT
  // mongoose
  //   .connect(db, {
  //     useNewUrlParser: true,
  //     useCreateIndex: true,
  //     useFindAndModify: false
  //   })
  //   .then(() => console.log("MongoDB Connected"))
  //   .catch(err => {
  //     console.error(err.message);
  //     process.exit(1);
  //   });
};

module.exports = connectDB;
