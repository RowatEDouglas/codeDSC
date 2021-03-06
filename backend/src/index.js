const express = require("express");
const connectDB = require("../config/db");
const cors = require('cors');
var bodyParser = require('body-parser');


const app = express();
app.use(express.json({ extended: false }));

//Added body parsing
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Connection with database:
connectDB();
//Using cors for testing
app.use(cors({origin: 'http://localhost:3000'}))
// Routes:
app.use("/login", require("./routes/login"));
app.use("/auth", require("./routes/auth"));
app.use("/user", require("./routes/user"));

app.use("/post", require("./routes/BuyAndSellAPI"))

app.get("/", (req, res) => {
  res.send("Hello from Express.js");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
  console.log(`Server up and running on port ${PORT}`);
});
