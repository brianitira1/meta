//sr3neL4uSua4ARv8 mongodb user password
// brianitira mongodb username
// my ip adress 102.219.210.70/32

//bFGi7px82tMjGrge

const mongoose = require("mongoose");

class MongoDBClient {
  constructor(uri) {
    this.uri = uri;
  }

  async connect() {
    try {
      await mongoose.connect(this.uri);
      console.log("Connected to MongoDB!");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error;
    }
  }

  /* async pingDatabase() {
    try {
      await mongoose.connection.db.command({ ping: 1 });
      console.log(
        "Pinged your deployment. You successfully connected to MongoDB!",
      );
    } catch (error) {
      console.error("Error pinging MongoDB:", error);
      throw error;
    }
  }

  async close() {
    try {
      await mongoose.disconnect();
      console.log("MongoDB connection closed.");
    } catch (error) {
      console.error("Error closing MongoDB connection:", error);
      throw error;
    }
  }
  */

  async run() {
    await this.connect();
    //  await this.pingDatabase();
    //console.log("MongoDB connection and ping completed successfully.");
    // } finally {
    // await this.close();
    //}
  }
}

const uri =
  "mongodb+srv://hacker:bFGi7px82tMjGrge@javascript.sheli3q.mongodb.net/?retryWrites=true&w=majority&appName=javascript";

async function main() {
  const mongoClient = new MongoDBClient(uri);
  try {
    await mongoClient.run();
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
