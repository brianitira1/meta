const mongoose = require("mongoose");

class mongoClient {
  constructor(uri) {
    this.uri = uri;
  }

  async connect() {
    try {
      await mongoose.connect(this.uri);
      console.log("connected to the database");
    } catch (error) {
      console.log(error, "failed to connect to database");
    }
  }

  async run() {
    await this.connect();
  }
}

const uri =
  "mongodb+srv://hacker:bFGi7px82tMjGrge@javascript.sheli3q.mongodb.net/?retryWrites=true&w=majority&appName=javascript";

async function main() {
  const connectDB = new mongoClient(uri);

  try {
    await connectDB.run();
  } catch (error) {
    console.log(error);
  }
}

main();
