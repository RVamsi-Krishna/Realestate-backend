const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
var cors = require('cors');

//mongodb+srv://rvk_mongoDB:Rvk_mongoDB@cluster0.nylobhs.mongodb.net/realestate?retryWrites=true&w=majority
// mongodb://localhost:27017/realestate
dotenv.config();
app.use(cors());
//connect to DB
// mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
//     console.log('connected to DB')
// })
mongoose.connect(
    // "mongodb+srv://rvk_mongoDB:Rvk_mongoDB@cluster0.nylobhs.mongodb.net/instaclone?retryWrites=true&w=majority",
    // "mongodb://localhost:27017/instaclone",
    process.env.DATABASE_URL,
    (err) => {
      if (err) console.log(err);
      else console.log("Database Connected");
    }
  );

const PORT = process.env.PORT || 8080;


app.listen(PORT, () => console.log('Server running at 8080......'));

