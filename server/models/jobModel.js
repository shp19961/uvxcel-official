const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobsSchema = new Schema({
  designation: String,
  experience: String,
  skills: String,
  salary: String,
  desc: String,
  location: String,
  status: String,
  type: String,
  shifts: String,
  positions: String,
  eligibility: Object,
});

const allJobs = mongoose.model("job", jobsSchema);
module.exports = allJobs;
