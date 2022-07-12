const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect(
  `mongodb+srv://shp-1996:shp-1996@cluster5.w3ux6.mongodb.net/uvXcel?retryWrites=true&w=majority`
);

app.use("/", require("./routes/jobRoutes"));
app.use("/", require("./routes/subscriberRoutes"));
app.use("/", require("./routes/userRoutes"));

const PORT = 5004;

app.listen(PORT, function () {
  console.log(`server running on port ${PORT}`);
});
