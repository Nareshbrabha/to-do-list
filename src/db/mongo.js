const mongoose = require("mongoose");
mongoose.set("debug", true);
const PASSWORD = "3VWjK9e4Y59SZXk0";
const DATABASE_NAME = "sample_mflix";
const CONNECTION_URI = `mongodb+srv://cluster0.xotgngk.mongodb.net/?retryWrites=true&w=majority&appName=cluster0`;
async function main() {
  await mongoose.connect(CONNECTION_URI, {
    dbName: DATABASE_NAME,
    user: "NARESHBRABHA",
    pass: PASSWORD,
  });
}

main()
  .then(() => {
    console.log(`Mongo Connected`);
  })
  .catch(console.log);
