const express = require("express");
const router = express.Router();
const allJobs = require("../models/jobModel");

// Route-1 add job details
router.post("/add-job", async (req, res) => {
  const {
    designation,
    experience,
    skills,
    salary,
    desc,
    location,
    status,
    type,
    shifts,
    positions,
    eligibility,
  } = req.body;
  const newJob = await new allJobs({
    designation,
    experience,
    skills,
    salary,
    desc,
    location,
    status,
    type,
    shifts,
    positions,
    eligibility,
  });
  newJob.save();
  res.send({ newJob });
});

// Route-2 get all jobs details
router.get("/get-jobs", async (req, res) => {
  const alljobs = await allJobs.find();
  res.send(alljobs);
});

// Route-3 get current job details
router.get("/get-current-job/:id", async (req, res) => {
  await allJobs.findOne({ _id: req.params.id }).then((job) => res.json(job));
});

module.exports = router;
