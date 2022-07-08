const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobsSchema = new Schema({
  designation: String,
  experience: String,
  salary: String,
  location: String,
  skills: String,
});

const allJobs = mongoose.model("job", jobsSchema);
module.exports = allJobs;
