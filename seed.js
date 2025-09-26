// seed.js
const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", UserSchema);

async function run() {
  await mongoose.connect(uri);
  console.log("Connected to MongoDB");

  // Példa alapadat
  await User.create({ name: "Admin", email: "admin@example.com" });

  console.log("Seed complete");
  await mongoose.disconnect();
}

run().catch(err => console.error(err));
